import { promises } from "../../data/siteContent";
import Reveal from "../ui/Reveal";
import SectionHead from "../ui/SectionHead";
export default function WhyUs() {
  return (
    <section><div className="wrap">
      <SectionHead title="The Promise" />
      <div className="why">{promises.map((p) => <Reveal key={p.title}><div className="i">{p.icon}</div><h3>{p.title}</h3><p>{p.text}</p></Reveal>)}</div>
    </div></section>
  );
}
