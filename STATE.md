<!-- generated-by: foundry@v1 -->
# State

Lifecycle: build
Now: Filmder runs as one Cloudflare Worker serving the application and same-origin TMDB proxy; this repository owns deployment and rollback.
Next: Provision the dormant production Sentry integration only through a separate operator-approved credential change.
Blocked: Sentry project creation, production DSN access, and production secret changes are operator-owned.
