const Configuration = {
	extends: ["@commitlint/config-conventional"],
	rules: { "breaking-changes-rules": [2, "never"] },
	parserPreset: {
		parserOpts: { noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"] },
	},
	plugins: [
		{
			rules: {
				"breaking-changes-rules": (parsed) => {
					if (
						["chore", "refactor"].includes(parsed.type) &&
						parsed.footer !== null &&
						parsed.footer.includes("BREAKING CHANGE")
					) {
						return [
							false,
							`${parsed.type} commits cannot contain breaking changes`,
						];
					} else {
						return [true];
					}
				},
			},
		},
	],
};

module.exports = Configuration;
