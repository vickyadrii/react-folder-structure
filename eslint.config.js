import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import securityNode from "eslint-plugin-security-node";
import sonarjs from "eslint-plugin-sonarjs";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        plugins: {
            prettier,
            sonarjs,
            "security-node": securityNode,
        },
        extends: [js.configs.recommended, tseslint.configs.recommended, reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        settings: {
            "import-x/resolved": {
                typescript: {
                    alwaysTryTypes: true,
                    project: "./tsconfig.json",
                },
            },
            react: {
                version: "detect",
            },
        },
        rules: {
            /* --------------------------- General Hygiene --------------------------- */
            "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
            "no-debugger": "error",
            "no-unused-vars": "off",
            "no-undef": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],

            /* ------------------------- TypeScript Strictness ------------------------- */
            "@typescript-eslint/explicit-function-return-type": "off", // Inferred types are usually sufficient
            "@typescript-eslint/explicit-member-accessibility": "off", // React components don't typically use this
            "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
            "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
            "@typescript-eslint/no-use-before-define": ["error", { functions: false, classes: false, variables: false }],
            "@typescript-eslint/no-explicit-any": process.env.NODE_ENV === "production" ? "error" : "warn",
            "@typescript-eslint/no-empty-function": ["warn", { allow: ["constructors"] }],

            /* ----------------------------- Import Hygiene ----------------------------- */
            "import-x/no-duplicates": "off", // Handled by TypeScript
            "import-x/no-unresolved": "off", // Handled by TypeScript
            "import-x/named": "off", // Handled by TypeScript

            /* ----------------------------- SonarJS Rules ----------------------------- */
            "sonarjs/cognitive-complexity": ["error", 20], // Higher for React components
            "sonarjs/no-duplicate-string": "warn",
            "sonarjs/function-inside-loop": "warn",
            "sonarjs/unused-import": "off", // Disabled due to compatibility issues

            /* ------------------------------ React Rules ------------------------------ */
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": "off",

            /* ----------------------------- Security Rules ----------------------------- */
            "security-node/detect-sql-injection": "error",
            "security-node/detect-nosql-injection": "error",
            "security-node/detect-child-process": "error",
            "security-node/detect-insecure-randomness": "error",
            "security-node/detect-eval-with-expr": "warn",
            "security-node/detect-dangerous-redirects": "warn",

            "react/no-unescaped-entities": "off",

            /* ------------------------------ Prettier Integration ------------------------------ */
            "prettier/prettier": "error",
            "@stylistic/indent": "off",
            "@stylistic/quotes": "off",
            "@stylistic/semi": "off",
        },
    },
    prettierConfig,
]);
