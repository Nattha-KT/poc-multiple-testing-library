module.exports = {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      useBabelrc: true,
    },
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!@poc/shared)/"],
  // moduleNameMapper: {
  //   "^@poc/shared$": "<rootDir>/packages/shared/dist/index.js",
  // },
};
