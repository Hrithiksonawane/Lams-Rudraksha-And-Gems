import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (<div className="center wrap"><h2>Page not found</h2><Link className="btn" to="/">Back home</Link></div>);
}
