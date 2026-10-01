// Pure functions: no React, no browser. Easy to test and reuse.
export const addItem = (cart, id, qty = 1) => {
  const next = { ...cart, [id]: (cart[id] || 0) + qty };
  if (next[id] <= 0) delete next[id];
  return next;
};
export const countItems = (cart) => Object.values(cart).reduce((a, b) => a + b, 0);
export function summarize(cart, lookup, shipping = 0) {
  const lines = Object.entries(cart).map(([id, qty]) => {
    const product = lookup(id);
    return { product, qty, lineTotal: product.price * qty };
  });
  const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
  return { lines, subtotal, shipping, total: subtotal + shipping };
}
