module.exports = {
  extends: "@humanoids/eslint-config",
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "react/jsx-one-expression-per-line": { allow: "none" | "literal" | "single-child" },
  },
};
