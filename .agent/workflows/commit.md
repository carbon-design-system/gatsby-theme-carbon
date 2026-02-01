---
description: generate a conventional commit message and commit changes
---

1. Stage all changes if not already staged.
2. Use the `conventional-commit` skill to generate a valid commit message based on the staged changes.
// turbo
3. Run `git commit -m "GENERATED_MESSAGE"` with the message from step 2.
