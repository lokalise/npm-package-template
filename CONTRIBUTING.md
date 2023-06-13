# Contributing

<!-- TOC -->

- [Contributing](#contributing)
  - [Submitting a Change](#submitting-a-change)
    - [Commit Message Convention](#commit-message-convention)
    - [Common Commit Types](#common-commit-types)
    - [Rebase Interactive](#rebase-interactive)
    - [Breaking Changes](#breaking-changes)
      - [How to approach breaking changes](#how-to-approach-breaking-changes)
      - [Marking changes as breaking](#marking-changes-as-breaking)
      - [Removing deprecated functionality](#removing-deprecated-functionality)
    - [Reverting Commits](#reverting-commits)
    - [Highlight your code snippets in your messages](#highlight-your-code-snippets-in-your-messages)
  - [Release Process](#release-process)
    - [1) Feature Branches (regular changes)](#1-feature-branches-regular-changes)
    - [2) Pre-Releases (Beta / Release Candidate branches for complex changes)](#2-pre-releases-beta-/-release-candidate-branches-for-complex-changes)
    - [3) Experimental Releases](#3-experimental-releases)
  <!-- TOC -->

---

## Submitting a Change

- `npm install`.
- `git checkout -b my-branch-name`. Short, accurate and lowercase branch names are recommended.
- Commit your changes. Check our [Commit Message Convention](#commit-message-convention).
- Clean your commit history(if required). We recommend using [rebase interactive](#rebase-interactive).
- PR is approved by at least one of the [Codeowners](https://github.com/lokalise/npm-package-template/blob/main/CODEOWNERS).
- Rebase with `main` and **Merge** your changes.

### Commit Message Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) approach and uses [semantic releases](https://github.com/semantic-release/semantic-release) for automated version management, release notes and package publishing.

Check [common commit types](#common-commit-types) as `semantic-release` processes them to determine the next version as well as producing release notes when a PR is merged in `main`.

### Common Commit Types

- feat → Addition or removal of features. Eg: `feat: add table on landing page`, `feat: remove table from landing page`. Will increase the `minor` version.
- fix → Bug fixing, followed by the bug. Eg: `fix: illustration overflows in mobile view`. Will increase the `patch` version.
- refactor → Code refactors. E.g. `refactor: change to use shared merge refs hook in Menu`. Will increase the `patch` version.
- chore → _Will not trigger a release._ Code that package won't output. E.g. `chore: add revert documentation to contributing docs`.
- `BREAKING CHANGE: ` or `BREAKING CHANGES: ` footer → Will increase the `major` version. Breaking changes are only allowed for the `feat` and `fix` commit types. More info on [breaking changes](#breaking-changes).

### Rebase Interactive

Because clean, linear and meaningful commit history is important, **Git interactive rebase** allows you to change individual commits, squash commits together, drop commits or change the order of the commits.

Here's a nice tutorial from [jetbrains](https://www.jetbrains.com/idea/guide/tutorials/git-interactive-rebase/) to learn how to rebase interactive from the UI or the CLI. [Configure your local git editor](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration) `core.editor`. As an example you might not want to use VI or emacs editors for interactive rebase. You might want to use something simpler as vscode **(our recommendation)** or phpstorm for the process.

### Breaking Changes

A breaking change is any change in library that _could_ break existing consumer's code. Or, in other words, these are changes that _might_ require consumer to update their code before they can use the latest version.

Having breaking changes forces consumers to either stick with older version of the library or make changes when they might not have time for it.

Examples of breaking changes include changing prop type or name, removing exported type or function, bumping major peer dependency version, etc.

#### How to approach breaking changes

In case you're removing or renaming something, see if you can instead mark that piece of code as deprecated (using [`@deprecated`](https://jsdoc.app/tags-deprecated.html) tag). This will inform consumers of library that the particular piece of code should not be used. When applicable, provide an alternative.

#### Marking changes as breaking

If changes are breaking, they **must** contain `BREAKING CHANGE` or `BREAKING CHANGES` in the footer of the commit message. Breaking changes are only allowed for the `feat` and `fix` commit types.

```shell
git commit -m 'feat: remove "foo" export

BREAKING CHANGE: "foo" export no longer available, use "bar".'
```

#### Removing deprecated functionality

If we followed suggestion from the [previous section](#how-to-approach-breaking-changes), we're likely to end up with a bunch of deprecated functionality that we don't want to maintain forever. Every once in a while we'll do a breaking change release where the only changes will be removal of deprecated features. 

This should mean that, if consumers migrated deprecated features in timely manner, the breaking change should actually be painless.

### I accidently merged commits from Main

There's a couple of options that could be considered:

- By using [rebase interactive](#rebase-interactive). Check the total amount of commits _(X)_ you have in your branch, run `git rebase -i HEAD~X` and drop the commits brought from main.
- By opening a new Feature Branch, [cherry-pick](https://git-scm.com/docs/git-cherry-pick) your commits from your old branch and push.

### Reverting Commits

If the commit reverts a previous commit, it should begin with `revert:` , followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.` followed by a reason for the revert, where the hash is the SHA of the commit being reverted:

```shell
revert: feat: add type to foo var

This reverts commit a7721472aad3bab9deff29e184df9a05b274e2dc. Reason to revert.
```

Keep in mind that the standard commit message from `git revert` is slightly different, so make sure to use the `--edit` option when running `git revert` to adjust the commit message.

You can follow any of the regular prerelease and release processes documented below with revert commits.

### Highlight your code snippets in your messages

Wrap your message in double quotes and escape the back ticks.

```shell
git commit -m "feat: add \`boolean\` prop \`open\` to \`<dialog>\`"
```

---

## Release Process

### 1) Feature Branches (regular changes)

The most common process is to branch off from **main**, add your code and merge it to **main** with `Rebase and merge`
option. [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
and [Semantic Releases](https://github.com/semantic-release/semantic-release) will take care of the rest. See image
below for visual clarity:

<img src="https://user-images.githubusercontent.com/2275908/193548546-ddc9582d-d724-4903-a531-71aa3c5bf1ac.png" alt="Release Flow" width="600">

### 2) Pre-Releases (Beta / Release Candidate branches for complex changes)

(See image below for visual clarity)

- Branch off from `main` to your `feature-branch`.
- Commit the code you need and do your local tests.
- Open a PR and wait for approval.
- Checkout `beta` branch and `cherry-pick` your changes from `feature-branch`:
  - If you previously checked out beta, always ensure it is always up-to-date with `main` before `cherry-pick`'ing. By doing it, you release a `beta` version based on the current `main` branch + your cherry-picked changes.
  - **NOTE:** Everytime a push in beta occurs a new version gets deployed in NPM. Changelog, Package.json and Lock files also change. Update your local beta branch after the release has finished.
  - Use the beta package to test your application.
  - **NOTE:** ⛔ Never merge `beta` in `main`.
- After tests are complete you either:
  - Merge your `feature-branch` in `main`.
  - `cherry-pick` your `feature-branch` commits into an `rc` branch to hold / group those for a release in the upcoming weeks.

<img src="https://user-images.githubusercontent.com/2275908/193548740-692a3567-d305-4437-b298-742a2e97980d.png" alt="Pre-Releases Flow" width="600">

### 3) Experimental Releases

(See image below for visual clarity)

Similar to pre-releases (2), they're not required to either be tested through beta or rc branches. They are one off simpler and less complex experimental features.

- Branch off from `main` to your `feature-branch`.
- Commit the code you need and do your local tests.
- Open a PR and wait for approval.
- Branch off from `feature-branch` to a branch prepended with `exp-*`. eg. `exp-feature-branch`.
- When pushing your changes a new experimental release is promoted. eg. `1.3.0-exp-feature-branch.1`.
- **NOTE:** ⛔ Never merge `exp-*` branches in `main`.
- After tests are complete **delete** the `exp-*` branch in origin.

<img src="https://user-images.githubusercontent.com/2275908/195072598-be6c6ab4-2be1-4f74-941f-5f4ff0337ed0.png" alt="Experimental Releases" width="600">
