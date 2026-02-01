---
name: conventional-commit
description: Formats Git commit messages using the Conventional Commits standard and enforces project-specific linting rules.
---

# Conventional Commit Skill

Use this skill to generate or validate Git commit messages.

## Instructions

1. **Analyze Changes**: Look at the staged changes (using `git diff --cached`) or provided content.
2. **Determine Type**: Choose the most appropriate type from:
    - `feat`: A new feature
    - `fix`: A bug fix
    - `chore`: Maintenance or tool changes (Husky, EditorConfig, etc.)
    - `docs`: Documentation only changes
    - `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
    - `refactor`: A code change that neither fixes a bug nor adds a feature
    - `perf`: A code change that improves performance
    - `test`: Adding missing tests or correcting existing tests
3. **Format Header**:
    - Format: `<type>[optional scope]: <description>`
    - **CRITICAL**: The header must NOT exceed **100 characters**.
    - **CRITICAL**: The description must NOT end with a period/full stop.
    - Use imperative, present tense: "change", not "changed" or "changes".
    - Use lowercase for the starting character of the description.
4. **Body (Optional)**: Provide additional context if the change is complex. Wrap lines at 72 characters.
5. **Footer (Optional)**: Mention breaking changes or reference issues (e.g., `Resolves #123`).

## Project Specifics

- This project uses `@commitlint/config-conventional`.
- Maximum header length: 100 characters.
- No trailing punctuation in the subject line.
