module.exports = function(wallaby) {
  return {
    debug: true,
    files: [
      "src/**/*.ts*",
      "tsconfig.json",
      "package.json",
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
    setup: function (wallaby) {
      var jestConfig = require('./package.json').jest;
      wallaby.testFramework.configure(jestConfig);
    }
  };
};
