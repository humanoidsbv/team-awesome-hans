module.exports = {
  extends: ["@humanoids/eslint-config", "plugin:cypress/recommended"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "error",
  },
  env: {
    jest: true,
  },
};
