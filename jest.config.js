/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/*.ts",
    "./src/**/*.ts",
    "!src/*.spec.ts",
    "!src/**/*.spec.ts"
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      functions: 80,
      lines: 80,
      branches: 80
    }
  }
};