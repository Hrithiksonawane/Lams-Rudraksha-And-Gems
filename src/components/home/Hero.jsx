import { Link } from "react-router-dom";
import MalaArt from "../art/MalaArt";
export default function Hero() {
  return (
    <header className="wrap hero">
      <div>
        <div className="eyebrow">Authentic · Certified · Energized</div>
        <h1>The Sacred Bead of <em>Lord Shiva</em></h1>
        <p>Hand-selected Rudraksha and Navratna gemstones. Find what matches your purpose, from peace and focus to prosperity and protection.</p>
        <div className="row">
          <Link className="btn" to="/" state={{ scrollTo: "rudraksha" }}>Shop Now</Link>
          <Link className="btn ghost" to="/" state={{ scrollTo: "gems" }}>View Gemstones</Link>
        </div>
      </div>
      <div className="orbit"><i className="ring" /><i className="ring r2" /><MalaArt /></div>
    </header>
  );
}
