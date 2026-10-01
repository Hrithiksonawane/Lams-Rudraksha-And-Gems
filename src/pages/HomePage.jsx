import { useState } from "react";
import "../styles/home.css";
import { categories } from "../data/rudraksha";
import { listByType } from "../services/catalog";
import Hero from "../components/home/Hero";
import CategoryTiles from "../components/home/CategoryTiles";
import ProductSection from "../components/home/ProductSection";
import WhyUs from "../components/home/WhyUs";
import Faq from "../components/home/Faq";
export default function HomePage() {
  const [cat, setCat] = useState("all");
  const rudraksha = listByType("rudraksha").filter((p) => cat === "all" || p.category === cat);
  return (
    <>
      <Hero />
      <CategoryTiles />
      <ProductSection id="rudraksha" title="Choose Your Rudraksha" subtitle="Each Mukhi carries a distinct energy, by tradition."
        products={rudraksha} filter={{ options: categories, value: cat, onChange: setCat }} />
      <ProductSection id="gems" title="Precious Gemstones" subtitle="Traditionally worn after consulting a qualified astrologer."
        products={listByType("gemstone")} />
      <WhyUs />
      <Faq />
    </>
  );
}
