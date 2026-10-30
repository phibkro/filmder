<!-- generated-by: foundry@v1 -->

# AGENTS.md — project contract

Generated boilerplate from `homelab/foundry/profile-v1` (single source:
homelab/docs/PROJECTS.md, "Project conventions contract"). Hand edits here are
flagged as drift by `conventions-check`; record real divergences in
`.conventions-exceptions` instead.

## Contract

- **Mission state:** `STATE.md` is the single mission-state file. It declares a
  lifecycle — `idea | spec | spec-frozen | build | park | archive` — plus
  Now / Next / Blocked. Agents read it first; keep it current.
- **Agent doc:** this file is THE agent doc. Where a harness wants CLAUDE.md,
  it is a symlink to AGENTS.md. Never a second prose copy.
- **Specs:** design work lives in `docs/specs/`. Lifecycle ≥ spec requires
  that directory to exist.
- **Lifecycle gates:** idea → spec → spec-frozen → build → park → archive, one
  executable gate per transition (defined in the conventions contract).
  spec-frozen additionally requires `Frozen: yes` in STATE.md.
- **Checks:** `just check` is the repository's declared verification gate.
  `just conventions-check` detects convention drift. The project-specific section
  names the exact tools. Both gates must pass before merge.

## PROJECT-SPECIFIC (replace this section)

- Runtime and package manager: Bun, Vite, React, and one Alchemy v2 Cloudflare Worker.
- Verification: `just check` runs lint, the application build, deployment type checking, and Vitest.
- Credential boundary: `TMDB_TOKEN` is a local environment value or Cloudflare secret binding. Never expose it through a `VITE_` variable, committed file, build output, log, or browser response.
- Public contract: `filmder.phibkro.org` serves both the application and same-origin `GET /api/tmdb/3/*` proxy. The homelab does not build, route, or serve it.
- Deployment: CI deploys stage `production` (`bun run deploy`) after every merge to `main` once the checks pass, when the repository variable `DEPLOYMENTS` is `enabled` (secrets `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` and `TMDB_TOKEN`, environment `production`). A local `bun run deploy` still needs operator approval; inspect `bun run plan` first.
