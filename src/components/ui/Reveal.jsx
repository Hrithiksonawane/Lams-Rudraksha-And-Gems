import { useEffect, useRef, useState } from "react";
// Wrap anything to fade it in when it scrolls into view. `as` can be "div", Link, etc.
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`rv ${seen ? "in" : ""} ${className}`} {...rest}>{children}</Tag>;
}
