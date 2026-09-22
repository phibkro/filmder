# Deploy Filmder at the Cloudflare edge

Frozen: yes
Revision: 2026-09-22. The application and proxy share one Worker. This removes
a public credential-relay hostname and one deployment resource. Local
development runs the complete Worker path. The deployment disables the
additional `workers.dev` route.


## Goal

Serve Filmder from Cloudflare without a home-server dependency.
Keep the TMDB credential outside the browser bundle.

## Contract

- `filmder.phibkro.org` serves the Vite application as Worker static assets.
- The same Worker proxies TMDB requests under `/api/tmdb/3/`.
- The proxy accepts only `GET` requests under that path.
- The proxy adds the TMDB bearer token from a Cloudflare secret binding.
- A per-client rate limit protects the upstream credential quota.
- The browser sends TMDB requests only to its current origin.
- Alchemy owns the Worker, domain, assets, bindings, and rate limit.
- The Worker is publicly reachable only through `filmder.phibkro.org`.
- Local commands use the `development` stage. Plan and deploy commands use the `production` stage.
- `bun run dev` serves both the local application and the local proxy Worker.
- The repository owns its source, build, release, and rollback procedures.
- The homelab removes its Filmder runtime only after production acceptance.

## Constraints

- Do not put the TMDB bearer token in a Vite variable.
- Do not store the bearer token in the repository.
- Do not proxy TMDB write endpoints.
- Do not deploy from CI in this change.
- Do not change the application behavior or public URLs.

## Acceptance

1. Install dependencies from the committed lock file.
2. Run the application build, type check, and existing tests.
3. Run focused proxy checks for method, path, credential, asset, and rate-limit behavior.
4. With operator approval, bootstrap or upgrade the Alchemy state store if required, then inspect the plan without deploying service resources.
5. Make sure that local development serves the complete Worker request path.
6. Make sure that the Worker disables its `workers.dev` route.
7. Inspect the built application and make sure that it contains no TMDB token.
8. Transfer the hostname from the Tunnel route to the Worker in a controlled cutover.
9. Make sure that the production site loads through the edge deployment.
10. Make sure that a movie request succeeds through the proxy.
11. Make sure that rollback can restore the previous Cloudflare deployment.

Steps 4 and 8 through 11 require operator-approved provider changes.
