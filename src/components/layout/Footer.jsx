import { Link } from "react-router-dom";
export default function Footer() {
  return (<footer>Benefits are based on traditional beliefs and are not medical claims.<br />© 2026 Sacred Rudraksha · <Link to="/" style={{ textDecoration: "underline" }}>Home</Link> · <Link to="/checkout" style={{ textDecoration: "underline" }}>Cart</Link></footer>);
}
