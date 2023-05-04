# YourProjectName

## Project Purpose

This is a template repository, intended to accelerate teams at Lokalise to create public packages for publishing on NPM.

This repository is not specifically frontend focused.

## Key Features

The following are all handled for you and do not need to be configured:

- Licensing
- Linting
- Formatting
- Testing
- Building
- Bundling
- Automated Versioning
- Publishing

## Getting Started

- [ ] Find and replace all instances of the symbols (case-insensitive) with your project name:
  - `your-project-name`
  - `YourProjectName`
- [ ] Add an NPM token to GitHub secrets with the name `NPM_TOKEN`
  - This is required for publishing under the `@lokalise` NPM namespace.
- [ ] Add a GitHub token to GitHub secrets with the name `GITHUB_TOKEN`
  - This is required to allow the automated semantic release process to push to `main`.
- [ ] Update the `CODEOWNERS` file with your personal and/or team tags.

Once you are all setup, we recommend reviewing and rewriting this README as necessary to make it more specific to your project.

The last thing to do is actually start writing your code! We recommend starting from `src/index.ts` and `src/index.test.ts`.

## Customizing the build

The build system uses Vite. It is configured to treat `./src/index.ts` as the entry point of your repository. Feel free
to change any particulars in `./vite.config.ts`. In particular if you require multiple entry points, we recommend
reviewing Vite's documentation on this here: [Vite Library Mode](https://vitejs.dev/guide/build.html#library-mode).

In case you add direct or peer dependencies, you should uncomment following lines (and corresponding import above) to
ensure those dependencies are not directly included in the built package.

```tsx
external: Object.keys(packageJson.dependencies).flatMap((dep) => [
	dep,
	// Include all dependency paths, not just root
	new RegExp(`^${dep}/`),
])
```

## Husky

By default, pre-commit hook will run `npm run lint:fix`. Feel free to remove that if it's undesirable or add your own
pre-commit commands.

Check out [husky](https://typicode.github.io/husky) docs for more info.

## commitlint

You can use `npm run commit` to interactively construct correct commit messsage.

Check out [commitlint](https://commitlint.js.org) docs for examples of how to customise.

## Release actions

The following token needs to be set in the Github repo for the `prerelease` and `release` Github Actions to work:

- `secrets.NPM_TOKEN` (need this to publish on NPM)

When performing a release, make sure to follow our conventional commit approach, as described in [contribution documentation](https://github.com/lokalise/npm-package-template/blob/main/CONTRIBUTING.md).

## License

This project is APACHE, VERSION 2.0 licensed, see LICENSE.md for details.

## Template Specific Internal Notes

The following notes are only relevant to the maintainers of this template. You may delete this section when you clone it.

### Creating a release of the template

- Merge your PR and create a [new draft release](https://github.com/lokalise/npm-package-template/releases/new).
- Create a new tag `vx.x.x`. Consider the type of changes you added. Major, minor or patch.
- In Release title mention the same version `vx.x.x`.
- Generate release notes.
- Publish Release

## Other Resources

This template represents the culmination of Lokalise technical recommendations as documented in the [Frontend Radar](https://lokalise.atlassian.net/l/cp/Bqkz2hC5).

## Support Us

**lokalise-npm-package-template** was created by Lokalise Engineering Team. Support our work by keeping this line in your README.
