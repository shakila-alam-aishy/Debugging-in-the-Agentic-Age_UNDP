# Debugging in the Agentic Age

**Agentic AI & Vibe Coding · UNV Volunteer Series**
**Session 7 | Quality & Scale**

A hands-on learning repository for debugging AI-generated code: how to audit it, how to give an AI assistant useful context, how to escape the endless fix loop with Git, and how to prove a fix with regression tests.

> **Learning principle:** Do not blindly trust AI-generated code. Inspect it, test it, verify the fix, and understand the changes before accepting them.

---

## About the series

This session is part of the **Agentic Software Development & Vibe Coding** series, organised by **UN Volunteers (UNV)** under the *Agentic AI & Vibe Coding* volunteer programme, in partnership with **UNDP** and **IICPSD**.

## About this session

AI coding assistants can build a working-looking app in minutes. They can also leave behind exposed secrets, silent failures and wrong calculations. This session is a practical lab: you receive a deliberately broken, AI-built donation page, find out why it is broken, fix it properly, and prove the fix with tests.

| | |
|---|---|
| **Track** | Quality & Scale |
| **Real-world use case** | Fixing a broken AI-built donation page |
| **You will produce** | A bug report and a fix with regression tests |
| **Requirements** | No GPU and no paid tools |

## Learning objectives

By the end of the session you will be able to:

- **Audit AI-generated code.** Check what it does, which files it touches, and whether it handles errors and secrets safely before you trust it.
- **Give agents useful error context.** Include the exact error message, the steps or command you ran, and the relevant file, instead of "it does not work".
- **Escape the endless fix loop.** Recognise repeated failed fixes, stop, roll back to the last working state with Git, and restart with a smaller, clearer request.
- **Refactor technical debt.** Reorganise quickly generated code without changing what it does.
- **Test and verify fixes.** Write regression tests so a fixed bug cannot silently return.
- **Review security risks.** Spot exposed secrets and other unsafe practices.

## Prerequisites

Install these before the lab:

| Tool | Version | Check with |
|---|---|---|
| [Node.js](https://nodejs.org) | 18 or newer (LTS) | `node --version` |
| [Git](https://git-scm.com) | any recent version | `git --version` |
| A code editor | for example VS Code | |
| A web browser | Chrome, Edge or Firefox | |
| An AI coding assistant | a free tier is enough | |

No other installs are needed. The lab project has no dependencies.

## Quick start

```bash
git clone https://github.com/shakila-alam-aishy/Debugging-in-the-Agentic-Age_UNDP.git
cd Debugging-in-the-Agentic-Age_UNDP/Lab

node server.js        # open http://localhost:3000
node --test           # run the tests (in a second terminal)
```

> **Windows (PowerShell):** use `cd Debugging-in-the-Agentic-Age_UNDP\Lab`.
> Stop the server with `Ctrl + C`.

**Opening browser DevTools:** press `Ctrl + Shift + I` (macOS: `Cmd + Option + I`). On many laptops `F12` is mapped to another function and will not work.

## The lab: four stations

Work in pairs and commit small and often. Each station has a worksheet in `Lab/lab/`.

| Station | Learning goal | Worksheet |
|---|---|---|
| 1 | Read and audit AI-generated code | `1-audit-checklist.md` |
| 2 | Give agents useful error context | `2-error-context.md` |
| 3 | Escape the endless fix loop and roll back with Git | `3-git-rollback.md` |
| 4 | Refactor vibe-induced technical debt (optional) | `4-refactor.md` |

Finish with a regression test and a bug report using `bug-report-template.md`.

### Station 3: simulate a fix loop, then roll back

Run these from the `Lab` folder:

```bash
git apply --ignore-whitespace --directory=Lab lab/bad-ai-fix.patch   # simulates a bad AI fix
git status                                                           # what changed?
git restore .                                                        # roll back
git log --oneline                                                    # screenshot this
```

Quick reference for the rest of the Git commands is in `Lab/lab/git-cheatsheet.md`.

## What to submit

1. **Bug report**, filled in from `lab/bug-report-template.md` (save it as `lab/my-bug-report.md`).
2. **Fixed code** with at least one real regression test in `test/regression.test.js`.
3. **Screenshot** of `git log --oneline` showing your rollback or revert.

## Repository structure

```text
Debugging-in-the-Agentic-Age_UNDP/
│
├── README.md                     You are here
│
├── Slides/
│   ├── Debugging in the Agentic Age.pptx
│   └── Debugging in the Agentic Age Lab.pptx
│
└── Lab/                          The practical project
    ├── README.md                 Lab-specific instructions
    ├── index.html                The donation page
    ├── style.css
    ├── app.js                    Form handling and payment call
    ├── donation.js               Money helpers (validation, fee, total)
    ├── server.js                 Small local server with a fake /api/charge endpoint
    ├── package.json
    ├── .gitignore
    ├── .gitattributes
    │
    ├── lab/                      Worksheets and the practice patch
    │   ├── 1-audit-checklist.md
    │   ├── 2-error-context.md
    │   ├── 3-git-rollback.md
    │   ├── 4-refactor.md
    │   ├── bug-report-template.md
    │   ├── git-cheatsheet.md
    │   └── bad-ai-fix.patch
    │
    └── test/                     Tests (npm test or node --test)
        ├── donation.test.js
        └── regression.test.js
```

## Key topics

1. Reading and auditing AI-generated code
2. Writing effective debugging prompts
3. Understanding error messages and browser DevTools
4. Avoiding repeated, ineffective AI-generated fixes
5. Using Git status, diff, log, restore and revert safely
6. Refactoring
