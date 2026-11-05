# Station 4 - Refactor vibe-induced technical debt (10 min, optional if short on time)

Refactoring = reorganize code WITHOUT changing what it does.

## Rules

1. Run `npm test`. Everything must pass BEFORE you start.
2. Change one small thing.
3. Run `npm test` and click through the page again.
4. Commit. Repeat.

## Pick two

- Rename `f`, `n`, `amt`, `cf`, `tmp`, `r`, `msg` to names that explain themselves
- `app.js` has the same fetch block twice. Make it one function
- Replace `var` with `const` / `let`
- Use `validateAmount` from `donation.js` instead of the custom empty check
- Show messages through one `showMessage(text, type)` function

## Check

- [ ] Page behaves the same (or better only because you fixed a bug on purpose)
- [ ] Tests still pass
- [ ] Each change is its own commit
