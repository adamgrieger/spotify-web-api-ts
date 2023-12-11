//  require('@spotify/web-scripts/config/eslintrc.js');
module.exports = {
  extends: ["@inferrinizzard/eslint-config"],
  rules: {
    "@typescript-eslint/unbound-method": "off",
  },
  overrides: [
    {
      files: "src/openapi/**/*",
      rules: {
        "@typescript-eslint/ban-tslint-comment": "off",
      },
    },
  ],
};
