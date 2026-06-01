import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// User GitHub Pages site (dongyanl1n.github.io) is served from the domain root,
// so the base path is "/". Build output goes to /dist and is published by the
// GitHub Actions workflow in .github/workflows/deploy.yml.
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
  },
});
