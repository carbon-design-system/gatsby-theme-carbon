# Contribution Guidelines

Want to contribute to this repository? Please read below first:

- [Issues and bugs](#issues-and-bugs)
- [Feature requests](#feature-requests)
- [Doc fixes](#doc-fixes)
- [Submission guidelines](#submission-guidelines)

## Issues and bugs

If you find a bug in the source code or a mistake in the documentation, you can help us by
submitting an issue to this repo. Even better you can submit a Pull Request with a fix.

**Please see the submission guidelines below**.

## Feature requests

You can request a new feature by submitting an issue to this repo. Proposed features (with suitable design documentation and reasoning) can be crafted and submitted to this repo as a Pull Request.

**Please see the Submission Guidelines below**.

## Doc fixes

If you want to help improve the docs, it's a good idea to let others know what you're working on to minimize duplication of effort. Comment on an issue to let others know what you're working on, or create a new issue if your work doesn't fit within the scope of any of the existing doc fix projects.

**Please see the submission guidelines below**.

## Submission guidelines

### Setup

1. Fork the project by navigating to the main [repository](https://github.com/carbon-design-system/gatsby-theme-carbon) and clicking the **Fork** button on the top-right corner.

2. Navigate to your forked repository and copy the **SSH url**. Clone your fork by running the following in your terminal:

   ```
   $ git clone git@github.com:{ YOUR_USERNAME }/gatsby-theme-carbon.git
   $ cd gatsby-theme-carbon
   ```

   See [GitHub docs](https://help.github.com/articles/fork-a-repo/) for more details on forking a repository.

3. Once cloned, you will see `origin` as your default remote, pointing to your personal forked repository. Add a remote named `upstream` pointing to the main `gatsby-theme-carbon`:

   ```
   $ git remote add upstream git@github.com:carbon-design-system/gatsby-theme-carbon.git
   $ git remote -v
   ```

   Your terminal should output something like this:

   ```
   origin	[your forked repo] (fetch)
   origin	[your forked repo] (push)
   upstream	   git@github.com/carbon-design-system/gatsby-theme-carbon.git (fetch)
   upstream	   git@github.com/carbon-design-system/gatsby-theme-carbon.git (push)
   ```

### Submitting an issue

Before you submit your issue, search the repository. Maybe your question was already answered.

If your issue appears to be a bug, and hasn't been reported, open a new issue. Help us to maximize the effort we can spend fixing issues and adding new features, by not reporting duplicate issues.

### Submitting a pull request

1. Search this repository for an open or closed pull request that relates to your submission. You don't want to duplicate effort.

2. Pull the latest master branch from `upstream`:

   ```
   $ git pull upstream master
   ```

3. Always work and submit pull requests from a branch. _Do not submit pull requests from the `master` branch of your fork_.

   ```
   $ git checkout -b { YOUR_BRANCH_NAME } master
   ```

4. Create your patch or feature following our [development guidelines](/README.md#development). Make sure to also follow our [coding standards](#coding-standards).

5. Test your branch and add new test cases where appropriate per the [testing guidelines](#testing).

6. Commit your changes using a descriptive commit message.

   ```
   $ git commit -a -m "chore: Update header with newest designs, resolves #123"
   ```

   **Note:** the optional commit `-a` command line option will automatically `add` and `rm` edited files. See [Close a commit via commit message](https://help.github.com/articles/closing-issues-via-commit-messages/) and [writing good commit messages](https://github.com/erlang/otp/wiki/Writing-good-commit-messages) for more details on commit messages.

7. Once ready for feedback from other contributors and maintainers, **push your commits to your fork** (be sure to run `yarn ci-check` before pushing, to make sure your code passes linting and unit tests):

   ```
   $ git push origin { YOUR_BRANCH_NAME }
   ```

8. In GitHub, navigate to [carbon-design-system/gatsby-theme-carbon](https://github.com/carbon-design-system/gatsby-theme-carbon) and click the button that reads "Compare & pull request".

9. Write a title and description, the click "Create pull request".

   See [how to write the perfect pull request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request) for more details on writing good PRs.

10. Stay up to date with the activity in your pull request. Maintainers will be reviewing your work and making comments, asking questions and suggesting changes to be made before they merge your code. When you need to make a change, add, commit and push to your branch normally.

    Once all revisions to your pull request are complete, a maintainer will squash and merge your commits for you.

**That's it! Thank you for your contribution!**
