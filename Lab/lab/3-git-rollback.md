# Station 3 - Escape the fix loop and roll back with Git (10 min)

## The loop

An agent tried to fix the total and made it worse. Simulate that:

```
git apply --ignore-whitespace --directory=Lab lab/bad-ai-fix.patch
npm start
```

Open the page, type 50, tick the fee box, click Donate. Nothing happens. Open the browser Console and read the error.

Ask your assistant to fix it. If its second and third attempts also fail: STOP. Do not keep asking.

## The way out

```
git status                  # what changed?
git diff                    # see exactly what changed
git log --oneline           # find the last good commit
```

Pick ONE way back:

| Situation | Command |
|---|---|
| Changes not committed yet, throw them away | `git restore .` |
| One file only | `git restore app.js` |
| Already committed, keep history | `git revert <commit>` |
| Go back to a known good commit (careful: deletes work) | `git reset --hard <commit>` |

Then restart with a SMALLER request:

> In donation.js, calculateTotal returns "501.75" for amount "50" with the fee on. Make it return the number 51.75, rounded to cents. Change only that function.

## Check

- [ ] `git status` is clean or shows only your intended fix
- [ ] The page loads again
- [ ] Screenshot of `git log --oneline` saved for your submission
