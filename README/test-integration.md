## Bun Test Integration

This project uses Bun's built-in test runner. Jest (Node) is not used in this workspace — the content below explains how to write and run tests with Bun.

Quick commands
- Run tests: `bun test`
- Run tests with verbose output: `bun test -v`

Configuration
- `bunfig.toml` in the project root controls Bun's test settings. Example values in this repo:

```toml
test = true
testDir = "test"
testTimeout = 5000
testEnvironment = "node"
```

Writing tests
- Use Bun's API in TypeScript: `import { test, expect } from 'bun:test'`.
- Place tests under the `test` directory. Example `test/index.test.ts` already exists in this project and covers all exported functions.

Server tests
- Prevent starting a server on import by guarding startup with `if (import.meta.main) { ... }`. This lets tests import modules without launching servers.

Example test snippet

```ts
import { test, expect } from 'bun:test';
import * as math from '../index';

test('add', () => {
  expect(math.add(5, 3)).toBe(8);
});
```

Notes (Bun vs Jest)
- Bun's runner executes under Bun, not Node — some runtime behavior (fetch, timers, builtins) differs.
- Jest provides a larger ecosystem and plugins; use Jest only if you need those specific integrations.

CI tips
- To run Bun tests in GitHub Actions, use a setup step to install Bun (or use a prebuilt action) then run `bun test`.

If you want, I can:
- remove the leftover Jest README file from `README/jest-integration.md`,
- add a short GitHub Actions workflow that runs `bun test`, or
- add more example tests for routes, JSON, and edge cases.
