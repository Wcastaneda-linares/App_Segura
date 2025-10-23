import js from "@eslint/js";
import pluginSecurity from "eslint-plugin-security";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    plugins: {
      security: pluginSecurity,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        __dirname: "readonly"
      },
    },
    rules: {
      "no-eval": "error",
      "security/detect-object-injection": "off",
    },
  },
];
