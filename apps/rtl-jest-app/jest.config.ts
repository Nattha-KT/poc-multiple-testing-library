import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["<rootDir>/src/**/*.test.ts?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "./tsconfig.app.json" }],
  },

  moduleNameMapper: {
    "^@poc/shared(.*)$": "<rootDir>/../../packages/shared/src$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};

export default config;
