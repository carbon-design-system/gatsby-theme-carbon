## My pull request is failing! What Gives?

We use a tool called
[commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)
to keep our commit messages organized. This let's us automatically publish
packages based on the type of commit.

If you're here, odds are your pull request or a subsequent commit didn't adhere
to our guidelines.

## So what do I do about it?!

We need a commit message that describes what's happening in your commit, let's
build one.

Commit messages need a type, pick the one below that best matches your commit:

### Release

Commits in this category will trigger a release of the package

- fix: a bug fix (triggers a `patch` release)
- feat: a new feature (triggers a `minor` release)

### No release

- build: changes that affect the build system
- ci: changes to our CI configuration
- chore: dependency updates
- docs: documentation changes
- perf: performance improvements
- refactor: code change that neither fixes a bug, nore adds a feature
- test: adding or changing test files

Commit messages should look like this:

```
type(scope): subject
```
