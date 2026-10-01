import { formatPrice } from "./pricing";
export const buildOrder = (customer, summary) => ({ customer, ...summary, placedAt: new Date().toISOString() });
export function formatOrderMessage(o) {
  const items = o.lines.map((l) => `• ${l.product.name} × ${l.qty} = ${formatPrice(l.lineTotal)}`).join("\n");
  const c = o.customer;
  return `*New Order – Sacred Rudraksha*\n\n${items}\n\n*Total:* ${formatPrice(o.total)}\n*Payment:* ${c.payment}\n\n*Name:* ${c.name}\n*Phone:* ${c.phone}\n*Address:* ${c.address}, ${c.city} - ${c.pincode}${c.note ? `\n*Note:* ${c.note}` : ""}`;
}
