import { resolve } from "path";

import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

// import packageJson from "./package.json";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "YourProjectName",
			fileName: "your-project-name",
		},
		rollupOptions: {
			/**
			 * Uncomment these lines (and import above) if you add any direct or peer dependencies.
			 * This ensures they are not included directly in package but instead imported from node modules
			 */
			// external: Object.keys(packageJson.dependencies).flatMap((dep) => [
			// 	dep,
			// 	// Include all dependency paths, not just root
			// 	new RegExp(`^${dep}/`),
			// ]),
			output: {
				// Ensure we can tree-shake properly
				preserveModules: true,
				// Ensures import/require works in all environments
				interop: "auto",
				// Must be `false` for `preserveModules: true`
				inlineDynamicImports: false,
			},

			/**
			 * The Rollup building process does not break on some warning, this one ensures it returns
			 * correct exit status code so the GitHub Actions can break.
			 */
			onwarn(warning) {
				throw Object.assign(new Error(), warning);
			},
		},
		commonjsOptions: {
			// Assumes all external dependencies are ESM dependencies. Just ensures
			// we then import those dependencies correctly in CJS as well.
			esmExternals: true,
		},
	},
	test: {
		globals: true,
	},
	plugins: [
		dts({
			afterDiagnostic: (diagnostics) => {
				if (diagnostics.length > 0) {
					throw new Error("Have issues with generating types", {
						cause: diagnostics,
					});
				}
			},
		}),
	],
});
