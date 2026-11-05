// YOUR TURN: turn each todo into a real test AFTER you fix the matching bug.
// Run with: npm test
const test = require("node:test");
const assert = require("node:assert");
const { calculateTotal } = require("../donation.js");

test.todo("calculateTotal adds the fee as a number, not as text (50 + fee = 51.75)");
test.todo("calculateTotal rounds to cents (try amount 33.33 with the fee on)");
test.todo("calculateTotal without cover-fee returns the amount unchanged");
test.todo("validateAmount is used by the page: negative amount must be rejected");
