function validateItemQuantity(quantity) {
  if (typeof quantity !== "number" || Number.isNaN(quantity) || !Number.isFinite(quantity)) {
    throw new Error("Quantidade deve ser um número válido");
  }
  if (quantity <= 0) {
    throw new Error("Quantidade deve ser maior que zero");
  }
  return quantity;
}

function calculateItemSubtotal(unitPrice, quantity) {
  const validQuantity = validateItemQuantity(quantity);
  if (typeof unitPrice !== "number" || Number.isNaN(unitPrice) || !Number.isFinite(unitPrice) || unitPrice < 0) {
    throw new Error("Preço unitário inválido");
  }
  return Number((unitPrice * validQuantity).toFixed(2));
}

module.exports = {
  validateItemQuantity,
  calculateItemSubtotal,
};
