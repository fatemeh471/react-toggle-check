// import macrosPlugin from 'vite-plugin-babel-macros';
import { resolve } from "node:path";
import { defineConfig } from "vitest/config";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

import copy from "rollup-plugin-copy";
// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.json"],
  plugins: [
    react(),
    eslintPlugin(),
    tsconfigPaths(),
    dts({
      outDir: ["dist", "dist/types"],
      staticImport: true,
      rollupTypes: true,
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "#": resolve("src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest/setup-tests.ts",
    mockReset: true,
  },
  build: {
    lib: {
      entry: {
        index: resolve("src", "main.exports.ts"),
      },
      formats: ["es"],
      name: "react-toggle-check",
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        dir: "dist",
        format: "esm",
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: ({ name: fileName, type }) => {
          console.log({ fileName, type });
          return `${fileName}.js`;
        },
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      plugins: [
        copy({
          targets: [{ src: "./src/prettier", dest: "dist" }],
          hook: "writeBundle",
        }),
      ],
    },
  },
});
