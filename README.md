# Filmder

Filmder is a React application for browsing movies and saving favorites in the browser.
The application and its TMDB proxy run in one Cloudflare Worker.

## Architecture

- Vite builds the static application.
- The Worker serves those assets at `filmder.phibkro.org`.
- The same Worker proxies `GET /api/tmdb/3/*` requests to TMDB.
- A Cloudflare secret binding keeps the TMDB token out of the browser bundle.
- A per-client Cloudflare rate limit protects the upstream quota.

The proxy rejects other methods and paths.
It removes upstream cookies before it returns a response.

## Local development

Copy the environment template and add a TMDB read-access token:

```sh
cp .env.example .env
bun install --frozen-lockfile
bun run dev
```

`TMDB_TOKEN` can contain a raw token or an existing `Bearer <token>` value.
Alchemy starts the local Worker and serves the built application through it.

Run all repository checks before a commit:

```sh
bun run check
```

The focused Worker checks cover static assets, path and method restrictions, rate limiting, and credential forwarding.

## Production deployment

Production changes require operator approval and a Cloudflare profile with Worker access.
Provision `TMDB_TOKEN` as a Cloudflare secret through Alchemy.
CI checks the repository but does not deploy it.

The first plan can bootstrap or upgrade the shared `alchemy-state-store` Worker.
That is a provider mutation and is part of the required approval.

```sh
bun install --frozen-lockfile
bun run check
bun run plan
bun run deploy
```

Inspect the plan before deployment.
Inspect the built JavaScript and confirm that it does not contain the token.

The Cloudflare cutover completed on September 22, 2026. The public hostname,
application assets, and TMDB proxy now belong to this repository's Worker. No
Tunnel, Caddy route, or homelab runtime remains in the release path.

## Rollback

Use a clean worktree at the last known-good revision. Install its lock file, run
its checks, inspect `bun run plan`, and run `bun run deploy` only after operator
approval. Verify both the application and same-origin TMDB proxy.

Do not use `alchemy destroy` as a rollback command. The former Tunnel and
homelab runtime are cutover history, not available fallback infrastructure.

## Production address

<https://filmder.phibkro.org>
