import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
	tseslint.configs.recommended,
	{
		files: ["src/**/*.ts"],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				project: "./tsconfig.eslint.json",
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
		}
	},
	{
		ignores: [
			"main.js",
			"node_modules/",
			"esbuild.config.mjs",
			"version-bump.mjs",
			"dist/",
		],
	},
);
