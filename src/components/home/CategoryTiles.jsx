import { Link } from "react-router-dom";
import { categoryTiles } from "../../data/siteContent";
import Reveal from "../ui/Reveal";
export default function CategoryTiles() {
  return (
    <section style={{ paddingTop: 0 }}><div className="wrap cats">
      {categoryTiles.map((t) => (
        <Reveal as={Link} key={t.title} className="cat" to={t.to} state={{ scrollTo: t.scrollTo }}><h3>{t.title}</h3><p>{t.text}</p></Reveal>))}
    </div></section>
  );
}
