// Draws one Rudraksha bead with the right number of natural lines (mukhi).
export default function BeadArt({ mukhi = 5 }) {
  const grooves = Array.from({ length: mukhi }, (_, k) => 2 * Math.PI * k / mukhi)
    .filter((t) => Math.cos(t) >= -0.05).map((t) => 44 * Math.sin(t));
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label={`${mukhi} Mukhi Rudraksha bead`}>
      <circle cx="50" cy="50" r="44" fill="url(#beadBody)" />
      <circle cx="50" cy="50" r="44" fill="#000" filter="url(#rough)" opacity=".8" />
      <g clipPath="url(#beadClip)">
        {grooves.map((dx, i) => (
          <path key={i} d={`M50 6 A${Math.abs(dx).toFixed(1)} 44 0 0 ${dx > 0 ? 1 : 0} 50 94`} fill="none" stroke="#2a1507" strokeWidth="2.6" opacity=".85" />
        ))}
      </g>
      <ellipse cx="50" cy="9" rx="6" ry="3" fill="#1a0c04" /><ellipse cx="50" cy="91" rx="6" ry="3" fill="#1a0c04" />
      <circle cx="50" cy="50" r="44" fill="url(#beadShine)" />
    </svg>
  );
}
