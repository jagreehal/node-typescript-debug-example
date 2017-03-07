module.exports = function(wallaby) {
  return {
    debug: true,
    files: [
      "src/**/*.ts*",
      "!src/**/*.spec.ts*"
    ],
    tests: ["src/**/*.spec.ts*"],
    env: { type: "node" },
    compilers: {
      "**/*.ts*": wallaby.compilers.typeScript({
        typescript: require("typescript")
      })
    },
    testFramework: "jest",
    setup: function(w) {
      wallaby.testFramework.configure({
        moduleFileExtensions: ["ts", "tsx"],
        transform: {
          "^.+\\.(ts|tsx)$": "<rootDir>/preprocessor.js"
        },
        testMatch: ["**/*.spec.(ts|tsx)"]
      });
    }
  };
};
