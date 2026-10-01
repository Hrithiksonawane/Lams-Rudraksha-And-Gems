import { useState } from "react";
import ProductArt from "../art";
import ZoomModal from "./ZoomModal";
export default function ZoomableArt({ product }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className="zoom-btn" onClick={() => setOpen(true)} aria-label="Zoom in">
        <ProductArt product={product} /><small>🔍 TAP TO ZOOM</small>
      </button>
      <ZoomModal open={open} onClose={() => setOpen(false)}><ProductArt product={product} /></ZoomModal>
    </>
  );
}
