import SectionHead from "../ui/SectionHead";
import ProductGrid from "../product/ProductGrid";
import CategoryFilter from "../product/CategoryFilter";
// One reusable section for any product list (Rudraksha, Gemstones, future lines…).
export default function ProductSection({ id, title, subtitle, products, filter }) {
  return (
    <section id={id}><div className="wrap">
      <SectionHead title={title} subtitle={subtitle} />
      {filter && <CategoryFilter {...filter} />}
      <ProductGrid products={products} />
    </div></section>
  );
}
