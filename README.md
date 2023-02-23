# YourProjectName

## Project Purpose

This is a template repository, intended to accelerate teams creating packages for publishing on NPM.

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

Find and replace all instances of the symbols (case-insensitive) with your project name:

- `your-project-name`
- `YourProjectName`

In order to publish to NPM you will need to add an NPM token as a GitHub secret with the name `NPM_TOKEN`.

Once you are all setup, we recommend reviewing and rewriting this README as necessary to make it more specific to your project.

Update CODEOWNERS file with your personal and/or team tags.

The last thing to do is actually start writing your code! We recommend starting from `src/index.ts` and `src/index.test.ts`.

## Customizing the build

The build system uses Vite. It is configured to treat `./src/index.ts` as the entry point of your repository. Feel free to change any particulars in `./vite.config.ts`. In particular if you require multiple entry points, we recommend reviewing Vite's documentation on this here: [Vite Library Mode](https://vitejs.dev/guide/build.html#library-mode)

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

## License

This project is APACHE, VERSION 2.0 licensed, see LICENSE.md for details.

## Other Resources

This template represents the culmination of Lokalise technical recommendations as documented in the [Frontend Radar](https://lokalise.atlassian.net/l/cp/Bqkz2hC5).
