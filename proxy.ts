interface Env {
  ASSETS: Fetcher;
  TMDB_RATE_LIMIT: RateLimit;
  TMDB_TOKEN: string;
}

const PROXY_PREFIX = "/api/tmdb";

function textResponse(body: string, status: number, extraHeaders?: HeadersInit) {
  const headers = new Headers(extraHeaders);
  headers.set("content-type", "text/plain; charset=utf-8");
  return new Response(body, { status, headers });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (!url.pathname.startsWith(`${PROXY_PREFIX}/`)) {
      return env.ASSETS.fetch(request);
    }

    if (request.method !== "GET") {
      return textResponse("Method not allowed", 405, { allow: "GET" });
    }

    const upstreamPath = url.pathname.slice(PROXY_PREFIX.length);
    if (!upstreamPath.startsWith("/3/")) {
      return textResponse("Not found", 404);
    }

    const clientAddress = request.headers.get("CF-Connecting-IP") ?? "unknown";
    const rateLimit = await env.TMDB_RATE_LIMIT.limit({ key: clientAddress });
    if (!rateLimit.success) {
      return textResponse("Too many requests", 429, { "retry-after": "60" });
    }

    const upstream = new URL(upstreamPath, "https://api.themoviedb.org");
    upstream.search = url.search;
    const token = env.TMDB_TOKEN.replace(/^Bearer\s+/i, "");
    const upstreamResponse = await fetch(upstream, {
      headers: {
        accept: "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    const headers = new Headers(upstreamResponse.headers);
    headers.delete("set-cookie");
    return new Response(upstreamResponse.body, {
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
      headers,
    });
  },
};
