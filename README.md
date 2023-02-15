# YourProjectName

TODO documentation

## Getting Started

Find and replace all instances of the symbols (case-insensitive):

- `your-project-name`
- `YourProjectName`

and replace it with the name of your repo.

## Customizing the build

### Vite

See here for docs on how to add multiple entry points: [Vite Library Mode](https://vitejs.dev/guide/build.html#library-mode)

### Husky

By default, pre-commit hook will run `npm run lint:fix`. Feel free to remove that if it's undesirable or add your own
pre-commit commands.

Check out [husky](https://typicode.github.io/husky) docs for more info.

### commitlint

You can use `npm run commit` to interactively construct correct commit messsage.

Check out [commitlint](https://commitlint.js.org) docs for examples of how to customise.

## Release actions

The following token needs to be set in the Github repo for the `prerelease` and `release` Github Actions to work:

- `secrets.NPM_TOKEN` (need this to publish on NPM)
