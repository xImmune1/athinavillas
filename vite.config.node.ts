// Standalone Vite config for self-hosting on a Node.js server (e.g. an Ubuntu VPS).
// This intentionally does NOT use @lovable.dev/vite-tanstack-config, because that
// preset bundles the Cloudflare Workers plugin (which would produce a Worker
// artifact that cannot run under plain `node`).
//
// Usage:
//   bun run build:node     # produces .output/server/index.mjs (Node server)
//   node .output/server/index.mjs
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    viteReact(),
  ],
});
