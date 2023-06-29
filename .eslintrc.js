module.exports = require("@backstage/cli/config/eslint-factory")(__dirname, {
  ignorePatterns: ["src/api/generated/models/**.ts"],
  extends: ["prettier"],
});
