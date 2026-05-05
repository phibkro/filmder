import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // Path mount support — set PUBLIC_BASE=/filmder/ at build time when
  // deploying behind a sub-path (e.g. via Tailscale Funnel at
  // workstation.<tailnet>.ts.net/filmder/). Default `/` keeps `bun
  // run dev` working unchanged on root.
  base: process.env.PUBLIC_BASE ?? "/",
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
});
