import { Link } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";
import { useCart } from "../../context/CartContext";
// Menu items live in this list. Add one line to add a menu link.
const links = [
  { label: "Home", to: "/" },
  { label: "Rudraksha", to: "/", scrollTo: "rudraksha" },
  { label: "Gemstones", to: "/", scrollTo: "gems" },
  { label: "Pendant", to: "/product/pendant" },
  { label: "FAQ", to: "/", scrollTo: "faq" },
];
export default function Navbar() {
  const { count } = useCart();
  return (
    <div className="nav"><div className="wrap">
      <Link className="logo" to="/">{siteConfig.brand}</Link>
      <div className="links">{links.map((l) => <Link key={l.label} to={l.to} state={{ scrollTo: l.scrollTo }}>{l.label}</Link>)}</div>
      <Link className="cartbtn" to="/checkout">🛒 Cart <b>{count}</b></Link>
    </div></div>
  );
}
