// eslint-disable-next-line import/no-extraneous-dependencies
import react from "@vitejs/plugin-react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
