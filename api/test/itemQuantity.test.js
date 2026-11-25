const test = require("node:test");
const assert = require("node:assert/strict");
const {
  validateItemQuantity,
  calculateItemSubtotal,
} = require("../src/utils/itemQuantity.js");

test("aceita quantidade positiva e calcula subtotal", () => {
  assert.equal(validateItemQuantity(2), 2);
  assert.equal(calculateItemSubtotal(30, 2), 60);
});

test("recusa quantidade zero ou negativa", () => {
  assert.throws(() => validateItemQuantity(0), /maior que zero/);
  assert.throws(() => calculateItemSubtotal(30, -1), /maior que zero/);
});
