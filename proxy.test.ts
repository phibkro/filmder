import { afterEach, describe, expect, it, vi } from "vitest";

import worker from "./proxy.ts";

function makeEnv(options?: { limited?: boolean; token?: string }) {
  return {
    ASSETS: {
      fetch: vi.fn(async () => new Response("asset", { status: 200 })),
    },
    TMDB_RATE_LIMIT: {
      limit: vi.fn(async () => ({ success: options?.limited !== true })),
    },
    TMDB_TOKEN: options?.token ?? "test-token",
  };
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Filmder Worker", () => {
  it("serves non-proxy requests from static assets", async () => {
    const env = makeEnv();
    const request = new Request("https://filmder.phibkro.org/movies/42");

    const response = await worker.fetch(request, env as never);

    expect(response.status).toBe(200);
    expect(await response.text()).toBe("asset");
    expect(env.ASSETS.fetch).toHaveBeenCalledWith(request);
    expect(env.TMDB_RATE_LIMIT.limit).not.toHaveBeenCalled();
  });

  it("rejects non-GET proxy requests", async () => {
    const response = await worker.fetch(
      new Request("https://filmder.phibkro.org/api/tmdb/3/movie/42", {
        method: "POST",
      }),
      makeEnv() as never,
    );

    expect(response.status).toBe(405);
    expect(response.headers.get("allow")).toBe("GET");
  });

  it("rejects paths outside the TMDB v3 API", async () => {
    const response = await worker.fetch(
      new Request("https://filmder.phibkro.org/api/tmdb/2/movie/42"),
      makeEnv() as never,
    );

    expect(response.status).toBe(404);
  });

  it("stops requests that exceed the client rate limit", async () => {
    const env = makeEnv({ limited: true });
    const response = await worker.fetch(
      new Request("https://filmder.phibkro.org/api/tmdb/3/movie/42", {
        headers: { "CF-Connecting-IP": "192.0.2.1" },
      }),
      env as never,
    );

    expect(response.status).toBe(429);
    expect(response.headers.get("retry-after")).toBe("60");
    expect(env.TMDB_RATE_LIMIT.limit).toHaveBeenCalledWith({ key: "192.0.2.1" });
  });

  it("forwards an allowed request with the server-side credential", async () => {
    const upstreamFetch = vi.fn(async () =>
      new Response('{"id":42}', {
        headers: {
          "content-type": "application/json",
          "set-cookie": "upstream=private",
        },
      }),
    );
    vi.stubGlobal("fetch", upstreamFetch);

    const response = await worker.fetch(
      new Request(
        "https://filmder.phibkro.org/api/tmdb/3/movie/42?language=en-US",
      ),
      makeEnv({ token: "Bearer test-token" }) as never,
    );

    expect(upstreamFetch).toHaveBeenCalledWith(
      new URL("https://api.themoviedb.org/3/movie/42?language=en-US"),
      {
        headers: {
          accept: "application/json",
          authorization: "Bearer test-token",
        },
      },
    );
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ id: 42 });
    expect(response.headers.has("set-cookie")).toBe(false);
  });
});
