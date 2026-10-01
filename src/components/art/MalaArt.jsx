// Decorative mala (necklace) used in the home hero.
const Bead = ({ x, y, s, flip, plain }) => (
  <g transform={`translate(${x} ${y}) scale(${s}) translate(-50 -50)`}>
    <circle cx="50" cy="50" r="44" fill="url(#beadBody)" />
    <circle cx="50" cy="50" r="44" fill="#000" filter="url(#rough)" opacity=".8" />
    <path d={plain ? "M50 6V94" : `M50 6Q${flip ? 28 : 72} 50 50 94`} fill="none" stroke="#2a1507" strokeWidth="5" />
    <circle cx="50" cy="50" r="44" fill="url(#beadShine)" />
  </g>
);
export default function MalaArt() {
  const N = 26;
  const beads = Array.from({ length: N }, (_, i) => {
    const t = Math.PI / 2 + 2 * Math.PI * (i + 1) / (N + 1);
    return { x: 200 + 150 * Math.cos(t), y: 190 + 170 * Math.sin(t), i };
  }).filter((b) => !(b.y > 345 && Math.abs(b.x - 200) < 30));
  return (
    <svg viewBox="0 0 400 460" role="img" aria-label="Rudraksha mala">
      <path d="M200 392V440" stroke="#b9c2ff" strokeWidth="3" />
      <path d="M188 446L200 410L212 446Z" fill="#b9c2ff" opacity=".85" />
      {beads.map((b) => <Bead key={b.i} x={b.x} y={b.y} s={0.38} flip={b.i % 2} />)}
      <Bead x={200} y={362} s={0.5} plain />
    </svg>
  );
}
