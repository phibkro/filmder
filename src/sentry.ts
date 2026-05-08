import * as Sentry from "@sentry/react";

// Sentry init — gracefully no-ops when VITE_SENTRY_DSN is unset
// (no DSN provisioned yet) so this file can be imported
// unconditionally from main.tsx without any feature flag.
//
// When operator creates a Sentry project + adds the DSN to the
// build env (VITE_SENTRY_DSN), Vite bakes it into the bundle and
// reporting starts on next deploy. The SDK adds ~30KB minified +
// gzipped to the production bundle.

const dsn = import.meta.env.VITE_SENTRY_DSN as string | undefined;

if (dsn) {
  Sentry.init({
    dsn,
    // Default integrations + browser tracing for performance
    // monitoring. Replays disabled — too heavy for portfolio scale.
    integrations: [Sentry.browserTracingIntegration()],
    // 10% sample rate keeps free-tier event budget comfortable.
    tracesSampleRate: 0.1,
  });
}

export {};
