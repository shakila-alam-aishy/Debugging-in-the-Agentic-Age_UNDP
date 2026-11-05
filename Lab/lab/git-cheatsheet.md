# Git cheat sheet for the lab

```
git status                   what changed right now
git diff                     show the exact changes
git log --oneline            list commits, newest first
git add -A                   stage all changes
git commit -m "message"      save a snapshot

git restore <file>           undo uncommitted changes to a file
git restore .                undo ALL uncommitted changes
git revert <commit>          new commit that undoes an old commit (safe)
git reset --hard <commit>    jump back, DELETES newer work (careful)
```

## Fix-loop rule

If the agent has failed 2 or 3 times in a row: stop, roll back to the last working state, then ask again with a smaller, clearer request.
