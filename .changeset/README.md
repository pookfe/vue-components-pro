# Changesets

Use `pnpm changeset` after changes that should be released.

Typical release flow:

1. Add a changeset in the same PR as the code change.
2. Merge to `main`.
3. Let the release workflow open or update the version PR.
4. Merge the version PR to publish updated packages.
