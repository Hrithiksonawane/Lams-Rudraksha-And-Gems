// ProductArt picks a drawing by product.art.kind (or a real photo if product.photo exists).
// To support a new kind of product, add one line to `renderers` — no other file changes.
import BeadArt from "./BeadArt";
import GemArt from "./GemArt";
import PendantArt from "./PendantArt";
const renderers = {
  bead: (p) => <BeadArt mukhi={p.art.mukhi} />,
  gem: (p) => <GemArt id={p.id} base={p.art.base} light={p.art.light} />,
  pendant: () => <PendantArt />,
};
export default function ProductArt({ product }) {
  if (product.photo) return <img src={product.photo} alt={product.name} />;
  return renderers[product.art.kind](product);
}
