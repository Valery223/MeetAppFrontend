/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config
export default defineConfig({
  plugins: [react()],
  test: {
    // опции тестирования для Vitest
    globals: true,
    environment: "jsdom",
    test: {
      global: true,
      environment: "jsdom",
      css: true,
    },
  },
});
