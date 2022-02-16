module.exports = {
  roots: ["./src", "./test"],
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc-node/jest",
      {
        dynamicImport: true,
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
      },
    ],
  },
};
