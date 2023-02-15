import { RuleConfigSeverity, type UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: { "chore-breaking-rule": [RuleConfigSeverity.Error, "never"] },
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
