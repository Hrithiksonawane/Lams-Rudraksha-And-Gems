import Reveal from "./Reveal";
export default function SectionHead({ title, subtitle }) {
  return (<Reveal className="head"><h2>{title}</h2><div className="divider" />{subtitle && <p>{subtitle}</p>}</Reveal>);
}
