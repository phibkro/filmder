import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    define: {
      "import.meta.vitest": "undefined",
    },
    test: {
      includeSource: ["src/**/*.{js,ts,jsx,tsx}"],
      coverage: {
        provider: "v8",
        reporter: ["text"],
      },
      environment: "jsdom",
    },
  }),
);
