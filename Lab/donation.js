// Donation helpers. Pure functions, no DOM, so they can be tested with Node.

function validateAmount(value) {
  const amount = Number(value);

  if (value === "" || Number.isNaN(amount)) {
    return { ok: false, error: "Please enter a donation amount." };
  }
  if (amount <= 0) {
    return { ok: false, error: "Donation must be greater than zero." };
  }
  if (amount > 10000) {
    return { ok: false, error: "Donation cannot be more than $10,000." };
  }
  return { ok: true, amount: amount };
}

function formatMoney(amount) {
  return "$" + amount.toFixed(2);
}

// Card processing fee: 2.9% + $0.30
function calculateFee(amount) {
  return amount * 0.029 + 0.3;
}

// If the donor covers the fee, add it on top of the donation
function calculateTotal(amount, coverFee) {
  if (coverFee) {
    return amount + calculateFee(amount);
  }
  return amount;
}

if (typeof module !== "undefined") {
  module.exports = { validateAmount, formatMoney, calculateFee, calculateTotal };
}
