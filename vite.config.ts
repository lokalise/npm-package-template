import { resolve } from "path";
import { defineConfig } from "vitest/config";
import dts from "vite-plugin-dts";

// import packageJson from "./package.json";

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
	plugins: [dts()],
});
