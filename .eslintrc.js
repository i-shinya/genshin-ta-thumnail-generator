module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier/@typescript-eslint",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["vue"],
  rules: {
    "quotes": ["warn", "single"]
  },
};
