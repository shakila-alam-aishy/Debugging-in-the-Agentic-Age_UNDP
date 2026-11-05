const test = require("node:test");
const assert = require("node:assert");
const { validateAmount } = require("../donation.js");

test("accepts a normal amount", () => {
  assert.deepStrictEqual(validateAmount("25"), { ok: true, amount: 25 });
});

test("rejects an empty amount", () => {
  assert.strictEqual(validateAmount("").ok, false);
});

test("rejects a negative amount", () => {
  assert.strictEqual(validateAmount("-50").ok, false);
});
