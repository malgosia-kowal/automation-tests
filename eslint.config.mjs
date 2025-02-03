/** @type {import('eslint').Linter.Config[]} */
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },

  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },

  { languageOptions: { globals: globals.browser } },

  pluginJs.configs.recommended,

  // ✅ FIX: Use tseslint.configs.recommended as an object
  {
    languageOptions: {
      parser: tsparser, // Set TypeScript parser
    },
    plugins: {
      "@typescript-eslint": tseslint, // Add TypeScript ESLint plugin
      prettier, // Add Prettier plugin
    },
    rules: {
      ...tseslint.configs.recommended.rules, // ✅ Fix: Use `.rules`
      ...prettierConfig.rules, // ✅ Disable conflicting ESLint rules
      "prettier/prettier": "error", // ✅ Enforce Prettier formatting
    },
  },
];
