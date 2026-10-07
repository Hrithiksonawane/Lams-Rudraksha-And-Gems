import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/product.css";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { getProduct, listRelated } from "../services/catalog";
import { formatPrice, strikePrice } from "../services/pricing";
import ZoomableArt from "../components/product/ZoomableArt";
import ProductGrid from "../components/product/ProductGrid";
import QuantitySelector from "../components/ui/QuantitySelector";
import SectionHead from "../components/ui/SectionHead";
import NotFoundPage from "./NotFoundPage";
export default function ProductPage() {
  const { id } = useParams();
  const product = getProduct(id);
  const [qty, setQty] = useState(1);
  const { add } = useCart();
  const toast = useToast();
  const navigate = useNavigate();
  if (!product) return <NotFoundPage />;
  const section = product.type === "gemstone" ? "gems" : "rudraksha";
  return (
    <div className="wrap pg">
      <div className="crumb"><Link to="/">Home</Link> / <Link to="/" state={{ scrollTo: section }}>{product.type}</Link> / {product.name}</div>
      <div className="pd">
        <div className="pimg"><ZoomableArt product={product} /></div>
        <div>
          <div className="meta">{product.subtitle}</div>
          <h2>{product.name}</h2>
          <div className="tag" style={{ fontSize: "1.3rem" }}>{product.tagline}</div>
          <div className="big">{formatPrice(product.price)}<s>{formatPrice(strikePrice(product.price))}</s></div>
          <ul>{product.benefits.map((b) => <li key={b}>{b}</li>)}</ul>
          <QuantitySelector value={qty} onChange={setQty} />
          <div className="row">
            <button className="btn" onClick={() => { add(product.id, qty); toast("Added to cart ✓"); }}>Add to Cart</button>
            <button className="btn ghost" onClick={() => { add(product.id, qty); navigate("/checkout"); }}>Buy Now</button>
          </div>
          <p className="note">Benefits are traditional beliefs, not medical claims. Every bead is natural, so exact size and shade may vary slightly.</p>
        </div>
      </div>
      <div style={{ marginTop: 70 }}><SectionHead title="You May Also Like Below Items" /></div>
      <ProductGrid products={listRelated(product)} />
    </div>
  );
}
