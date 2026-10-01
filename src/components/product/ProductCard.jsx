import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useToast } from "../../context/ToastContext";
import { formatPrice, strikePrice } from "../../services/pricing";
import ProductArt from "../art";
import Reveal from "../ui/Reveal";
export default function ProductCard({ product: p }) {
  const { add } = useCart();
  const toast = useToast();
  return (
    <Reveal className="card">
      <Link className="card-link" to={`/product/${p.id}`}>
        <ProductArt product={p} />
        <div className="meta">{p.subtitle}</div>
        <h3>{p.name.replace(" Rudraksha", "")}</h3>
        <div className="tag">{p.tagline}</div>
        <div className="price">{formatPrice(p.price)}<s>{formatPrice(strikePrice(p.price))}</s></div>
      </Link>
      <button type="button" className="btn sm" onClick={() => { add(p.id); toast("Added to cart ✓"); }}>Add to Cart</button>
    </Reveal>
  );
}
