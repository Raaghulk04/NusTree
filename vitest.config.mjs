import { fileURLToPath } from "node:url";
import { defineConfig, defineProject } from "vitest/config";

const srcDir = fileURLToPath(new URL("./src", import.meta.url));
const alias = {
  "@": srcDir,
};

export default defineConfig({
  resolve: {
    alias,
  },
  test: {
    globals: true,
    alias,
    projects: [
      defineProject({
        resolve: {
          alias,
        },
        test: {
          name: "unit",
          globals: true,
          include: ["src/{server,graph}/**/*.test.{js,jsx,ts,tsx}"],
          exclude: ["src/**/*.auth.test.{js,jsx,ts,tsx}"],
          environment: "node",
          setupFiles: ["./src/tests/setup-env.js"],
          alias,
        },
      }),
      defineProject({
        resolve: {
          alias,
        },
        test: {
          name: "ui",
          globals: true,
          include: ["src/components/**/*.test.{js,jsx,ts,tsx}"],
          environment: "jsdom",
          setupFiles: ["./src/tests/setup-env.js", "./src/tests/setup-ui.js"],
          alias,
        },
      }),
      defineProject({
        resolve: {
          alias,
        },
        test: {
          name: "auth",
          globals: true,
          include: ["src/**/*.auth.test.{js,jsx,ts,tsx}"],
          environment: "node",
          setupFiles: ["./src/tests/setup-env.js", "./src/tests/setup-auth.js"],
          alias,
        },
      }),
    ],
  },
});
