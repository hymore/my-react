const { defineConfig } = require("vite");
const path = require("path");

import react from "@vitejs/plugin-react";
export default defineConfig({
  resolve: {
    alias: {
      shared: path.posix.resolve("src/shared"),
      react: path.posix.resolve("src/react"),
      "react-reconciler": path.posix.resolve("src/react-reconciler"),
    },
  },
  plugins: [react()],
});
