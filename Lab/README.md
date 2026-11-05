# Community Relief Fund - donation page

An AI assistant built this page. It is **broken**. Your job in the lab is to find out why, fix it properly, and prove the fix with tests.

## Run it

```
npm start          # open http://localhost:3000
npm test           # run the tests
```

You need Node.js 18 or newer and Git. No other installs, no paid tools, no GPU.

## What you will produce

1. A filled-in `lab/bug-report-template.md` (save it as `lab/my-bug-report.md`)
2. A fix in the code
3. At least one real regression test in `test/regression.test.js`
4. A screenshot of `git log --oneline` after your rollback

## Files

| File | What it does |
|---|---|
| `index.html`, `style.css` | The page |
| `app.js` | Reads the form, calls the server, shows messages |
| `donation.js` | Money helpers (validation, fee, total) |
| `server.js` | Tiny local server with a fake `/api/charge` endpoint |
| `test/` | Tests (`npm test`) |
| `lab/` | Worksheets for the lab |

Work in pairs. Commit small and often.
