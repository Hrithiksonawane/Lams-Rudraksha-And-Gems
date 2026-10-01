import { Link, useNavigate } from "react-router-dom";
import "../styles/checkout.css";
import { siteConfig } from "../config/siteConfig";
import { useCart } from "../context/CartContext";
import { buildOrder } from "../services/orderService";
import { createWhatsAppChannel } from "../services/orderChannels";
import CheckoutForm from "../components/checkout/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary";
import SectionHead from "../components/ui/SectionHead";
const defaultChannel = createWhatsAppChannel(siteConfig.whatsappNumber);
// `channel` is injected: swap WhatsApp for Razorpay/an API without touching this page's logic.
export default function CheckoutPage({ channel = defaultChannel }) {
  const { summary, clear } = useCart();
  const navigate = useNavigate();
  if (!summary.lines.length)
    return (<div className="center wrap"><h2>Your cart is empty</h2><p style={{ color: "var(--muted)" }}>Add something sacred to begin.</p><Link className="btn" to="/" state={{ scrollTo: "rudraksha" }}>Shop Rudraksha</Link></div>);
  const place = (customer) => {
    const order = buildOrder(customer, summary);
    channel.send(order);
    clear();
    navigate("/thanks", { state: { order } });
  };
  return (
    <div className="wrap pg">
      <SectionHead title="Checkout" />
      <div className="co"><CheckoutForm total={summary.total} onSubmit={place} /><OrderSummary /></div>
    </div>
  );
}
