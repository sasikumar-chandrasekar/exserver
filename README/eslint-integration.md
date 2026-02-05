## exserver — ESLint Integration

This repository uses Bun for runtime and the project is written in TypeScript. This README documents how ESLint is integrated into the project, how to run it, and how to enable autofix-on-save in VS Code.

**Quick Commands**:
- **Install dependencies:** `bun add -d eslint @eslint/js globals @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript jiti`
- **Run linter:** `bun run lint` (alias for `eslint . --ext .ts,.js`)
- **Run autofix:** `bun run lint:fix` (alias for `eslint . --ext .ts,.js --fix`)

**What I added/changed**:
- **ESLint & TypeScript packages:** `eslint`, `@eslint/js`, `globals`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `typescript`, and `jiti` (dev dependencies).
- **`eslint.config.ts`**: a TypeScript ESLint configuration file lives at the repository root.
- **VS Code settings:** `.vscode/settings.json` was added to enable `source.fixAll.eslint` on save and validate TypeScript/JavaScript files.
- **`package.json` scripts:** Added `lint` and `lint:fix` scripts for convenience.
- **Minor code tweaks:** Small changes to `index.ts` to satisfy lint rules (unused server variable and unused request param were adjusted).

**Why `jiti` is needed**

ESLint can load configuration files written in TypeScript (like `eslint.config.ts`) but requires a runtime loader such as `jiti` to execute the TypeScript config. If you see errors like `The 'jiti' library is required for loading TypeScript configuration files`, install `jiti` as a dev dependency (it's already included here).

**VS Code: Auto-fix on Save**

To run ESLint auto-fixes whenever you save a file, ensure the following:

- The official **ESLint** extension for VS Code is installed and enabled.
- The workspace file `.vscode/settings.json` exists with these settings (this was added to the repo):

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.packageManager": "bun"
}
```

Notes:
- After installing new dependencies (ESLint, jiti, parsers), restart VS Code so the extension can find the packages in `node_modules`.
- If auto-fix doesn't run, open the **Output** panel in VS Code and select **ESLint** to see diagnostic messages.

**Running ESLint manually**

- Lint (report only):

  ```bash
  bunx eslint . --ext .ts,.js
  # or
  bun run lint
  ```

- Fix issues automatically:

  ```bash
  bunx eslint . --ext .ts,.js --fix
  # or
  bun run lint:fix
  ```

**Common troubleshooting**

- "Missing `jiti`" or "Failed to load TypeScript config": install `jiti` and restart VS Code.
- "ESLint not running on save": make sure the ESLint extension is enabled and the workspace settings above are present.
- If ESLint complains about unused variables and you intentionally name variables with `_` prefix, you can disable or configure the `@typescript-eslint/no-unused-vars` rule in the ESLint config.

**Next steps / recommendations**

- Optionally add Prettier and integrate it with ESLint via `eslint-config-prettier` and `eslint-plugin-prettier` for consistent formatting.
- Consider adding a Git pre-commit hook (Husky or simple `lint-staged`) to run `eslint --fix` on staged files.

If you'd like, I can:
- commit these changes and push to your remote repo,
- add Prettier and configure integration with ESLint, or
- tune the ESLint rules to match a style guide (Airbnb / Standard / Custom).

---

File locations referenced in this document:

- `eslint.config.ts` — project ESLint configuration (TypeScript)
- `.vscode/settings.json` — VS Code settings enabling ESLint autofix on save
- `package.json` — contains `lint` and `lint:fix` scripts
