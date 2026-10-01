import { useEffect, useRef, useState } from "react";
// Full-screen zoom: slider, mouse wheel, drag to pan. Pass any picture as children.
export default function ZoomModal({ open, onClose, children }) {
  const [z, setZ] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const drag = useRef(null);
  useEffect(() => {
    if (!open) return;
    setZ(1); setPos({ x: 0, y: 0 });
    const esc = (e) => e.key === "Escape" && onClose();
    addEventListener("keydown", esc); document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [open, onClose]);
  if (!open) return null;
  const setZoom = (v) => { const n = Math.min(5, Math.max(1, v)); setZ(n); if (n === 1) setPos({ x: 0, y: 0 }); };
  return (
    <div className="modal open" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button className="x" onClick={onClose} aria-label="Close">×</button>
      <div className="stage"
        onWheel={(e) => setZoom(z - e.deltaY * 0.003)}
        onPointerDown={(e) => { drag.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }; e.currentTarget.setPointerCapture(e.pointerId); }}
        onPointerMove={(e) => drag.current && z > 1 && setPos({ x: e.clientX - drag.current.x, y: e.clientY - drag.current.y })}
        onPointerUp={() => (drag.current = null)}>
        <div style={{ width: "100%", height: "100%", transform: `translate(${pos.x}px,${pos.y}px) scale(${z})` }}>{children}</div>
      </div>
      <div className="ctl"><span>−</span><input type="range" min="1" max="5" step="0.1" value={z} onChange={(e) => setZoom(+e.target.value)} /><span>+</span><span>{z.toFixed(1)}×</span></div>
    </div>
  );
}
