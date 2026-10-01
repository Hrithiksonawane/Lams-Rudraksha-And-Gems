// An "order channel" is anything with { link(order), send(order) }.
// Today: WhatsApp. Later: write createRazorpayChannel() or createApiChannel()
// with the same two methods and swap it in CheckoutPage — nothing else changes.
import { formatOrderMessage } from "./orderService";
export const createWhatsAppChannel = (number) => ({
  link: (order) => `https://wa.me/${number}?text=${encodeURIComponent(formatOrderMessage(order))}`,
  send(order) { window.open(this.link(order), "_blank", "noopener"); },
});
