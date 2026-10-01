import { faqs } from "../../data/siteContent";
import Reveal from "../ui/Reveal";
import SectionHead from "../ui/SectionHead";
export default function Faq() {
  return (
    <section id="faq"><div className="wrap" style={{ maxWidth: 760 }}>
      <SectionHead title="Questions, Answered" />
      {faqs.map((f) => <Reveal as="details" key={f.q}><summary>{f.q}</summary><p>{f.a}</p></Reveal>)}
    </div></section>
  );
}
