import { useEffect, useRef } from "react";
// Animated universe background (twinkling stars + shooting stars).
export default function StarField() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, x = c.getContext("2d");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W, H, stars = [], shot = null, raf;
    const size = () => {
      W = c.width = innerWidth; H = c.height = innerHeight;
      stars = Array.from({ length: Math.min(220, (W * H / 5500) | 0) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.4 + 0.2, p: Math.random() * 6.3, s: Math.random() * 0.02 + 0.005, d: Math.random() * 0.5 + 0.1 }));
    };
    const draw = () => {
      x.clearRect(0, 0, W, H);
      for (const s of stars) {
        s.p += s.s; x.globalAlpha = 0.35 + 0.65 * Math.abs(Math.sin(s.p));
        let y = (s.y - scrollY * s.d * 0.08) % H; if (y < 0) y += H;
        x.fillStyle = s.r > 1.1 ? "#cfd6ff" : "#fff"; x.beginPath(); x.arc(s.x, y, s.r, 0, 6.3); x.fill();
      }
      if (!shot && Math.random() < 0.004) shot = { x: Math.random() * W * 0.8 + W * 0.2, y: Math.random() * H * 0.4, l: 0 };
      if (shot) { shot.x -= 9; shot.y += 4.5; shot.l++; x.globalAlpha = 1 - shot.l / 45; x.strokeStyle = "#fff"; x.lineWidth = 1.6; x.beginPath(); x.moveTo(shot.x, shot.y); x.lineTo(shot.x + 60, shot.y - 30); x.stroke(); if (shot.l > 45) shot = null; }
      if (!still) raf = requestAnimationFrame(draw);
    };
    size(); draw(); addEventListener("resize", size);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", size); };
  }, []);
  return <canvas id="sky" ref={ref} />;
}
