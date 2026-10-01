import { Link, Navigate, useLocation } from "react-router-dom";
import "../styles/checkout.css";
import { siteConfig } from "../config/siteConfig";
import { createWhatsAppChannel } from "../services/orderChannels";
const channel = createWhatsAppChannel(siteConfig.whatsappNumber);
export default function ThanksPage() {
  const order = useLocation().state?.order;
  if (!order) return <Navigate to="/" replace />;
  return (
    <div className="center wrap" style={{ maxWidth: 640 }}>
      <div style={{ fontSize: "3rem" }}>🕉️</div>
      <h2 style={{ fontSize: "2.6rem" }}>Thank you, {order.customer.name.split(" ")[0]}!</h2>
      <p style={{ color: "var(--muted)" }}>Your order is ready to send. Tap the button so we receive it on WhatsApp and confirm payment and delivery.</p>
      <div className="row" style={{ justifyContent: "center" }}>
        <a className="btn" href={channel.link(order)} target="_blank" rel="noopener noreferrer">Send Order on WhatsApp</a>
        <Link className="btn ghost" to="/">Continue Shopping</Link>
      </div>
    </div>
  );
}
