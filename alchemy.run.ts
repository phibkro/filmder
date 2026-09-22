import * as Alchemy from "alchemy";
import * as Cloudflare from "alchemy/Cloudflare";
import * as Config from "effect/Config";
import * as Effect from "effect/Effect";
const state =
  process.env.ALCHEMY_STAGE === "development"
    ? Alchemy.localState()
    : Cloudflare.state();


export default Alchemy.Stack(
  "filmder",
  {
    providers: Cloudflare.providers(),
    state,
  },
  Effect.gen(function* () {
    const tmdbToken = yield* Config.Redacted("TMDB_TOKEN");

    const site = yield* Cloudflare.Website.StaticSite("Site", {
      name: "filmder",
      command: "bun run build",
      outdir: "dist",
      main: "./proxy.ts",
      domain: "filmder.phibkro.org",
      workersDev: false,
      env: {
        TMDB_TOKEN: tmdbToken,
        TMDB_RATE_LIMIT: Cloudflare.RateLimit("TMDB_RATE_LIMIT", {
          namespaceId: "1001",
          simple: { limit: 60, period: 60 },
        }),
      },
      assets: {
        runWorkerFirst: true,
        notFoundHandling: "single-page-application",
      },
      compatibility: {
        date: "2026-05-01",
      },
      observability: {
        enabled: true,
      },
    });

    return { site };
  }),
);

export const meta = {
  Site: {
    commands: {
      build: "bun run build",
      dev: "bun run dev",
      plan: "bun run plan",
      test: "bun run test",
      typecheck: "bun run infra:typecheck",
    },
    runtime: "Cloudflare Worker with static assets and a rate-limited TMDB proxy",
    trust: {
      input: "untrusted-public",
      validate: "method and path allowlist",
    },
  },
} as const;
