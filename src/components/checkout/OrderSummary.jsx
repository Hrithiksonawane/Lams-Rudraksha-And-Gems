import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../services/pricing";
import ProductArt from "../art";
import QuantitySelector from "../ui/QuantitySelector";
export default function OrderSummary() {
  const { summary, change } = useCart();
  return (
    <div className="box">
      <h3>Order Summary</h3>
      {summary.lines.map(({ product: p, qty }) => (
        <div className="line" key={p.id}>
          <div style={{ width: 54, flex: "none" }}><ProductArt product={p} /></div>
          <div>{p.name}<br /><span style={{ color: "var(--muted)" }}>{formatPrice(p.price)}</span></div>
          <QuantitySelector value={qty} min={0} onChange={(n) => change(p.id, n - qty)} />
        </div>
      ))}
      <div className="sum" style={{ marginTop: 12 }}><span>Subtotal</span><span>{formatPrice(summary.subtotal)}</span></div>
      <div className="sum"><span>Shipping</span><span>{summary.shipping ? formatPrice(summary.shipping) : "Free"}</span></div>
      <div className="sum t"><span>Total</span><span>{formatPrice(summary.total)}</span></div>
    </div>
  );
}
