const Configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: { "chore-breaking-rule": [2, "never"] },
  plugins: [
    {
      rules: {
        "chore-breaking-rule": (parsed) => {
          if (
            parsed.type === "chore" &&
            parsed.footer !== null &&
            parsed.footer.includes("BREAKING CHANGE")
          ) {
            return [false, "chore commits cannot contain breaking changes"];
          } else {
            return [true];
          }
        },
      },
    },
  ],
};

module.exports = Configuration;
