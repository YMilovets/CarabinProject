/* eslint-disable @typescript-eslint/no-explicit-any */
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";

import { globalIgnores } from "eslint/config";
import type { ConfigWithExtendsArray } from "@eslint/config-helpers";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

const plugins: Record<string, any> = {
	"@typescript-eslint": tseslint.plugin,
	"react-hooks": reactHooks,
	"react-refresh": reactRefresh,
	"simple-import-sort": simpleSort,
	import: importPlugin,
};

const configList: ConfigWithExtendsArray = [
	globalIgnores([
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
		".vscode/**",
		"public/**",
	]),
	{
		files: ["src/**/*.{ts,tsx,js,jsx}"],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				NodeJS: true,
				process: "readonly",
				LayoutProps: "readonly",
				...globals.browser,
				...globals.es2025,
			},
		},
		plugins: plugins,
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		rules: {
			...js.configs.recommended.rules,
			...tseslintPlugin.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,

			"react-refresh/only-export-components": "warn",
			"react/react-in-jsx-scope": "off",
			"import/extensions": "off",
			"react-hooks/exhaustive-deps": "warn",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_" },
			],
			"no-shadow": "off",
			"@typescript-eslint/no-shadow": "error",
			"simple-import-sort/imports": [
				"error",
				{
					groups: [
						["^(react/(.*)$)|^(react$)", "^@?\\w"],
						["^(next/(.*)$)|^(next$)", "^@?\\w"],
						["^(@|Components)(/.*|$)"],
						["^\\.\\.(?!/?$)", "^\\.\\./?$"],
						["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
						["^\\u0000"],
						["^.+\\.?(css)$"],
					],
				},
			],
			"simple-import-sort/exports": ["error"],

			"no-mixed-spaces-and-tabs": 0,
			"import/no-named-as-default": 0,
		},
		settings: {
			"import/resolver": {
				node: {
					paths: ["src", "webpack"],
					extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
					moduleDirectory: ["node_modules", "src/"],
				},
				typescript: { alwaysTryTypes: true },
			},
		},
	},
];

const commonConfig = [...nextVitals, ...nextTs, ...configList];

export default commonConfig;
