export default function PendantArt() {
  return (
    <svg viewBox="0 0 300 330" role="img" aria-label="Rudraksha pendant on red thread">
      <path d="M30 8Q50 150 150 150M270 8Q250 150 150 150" fill="none" stroke="url(#threadRed)" strokeWidth="7" strokeLinecap="round" />
      <circle cx="150" cy="148" r="9" fill="#a01018" />
      <rect x="138" y="152" width="24" height="16" rx="4" fill="url(#goldMetal)" />
      <rect x="130" y="164" width="40" height="9" rx="4" fill="url(#goldMetal)" />
      <svg x="85" y="168" width="130" height="130" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="44" fill="url(#beadBody)" />
        <circle cx="50" cy="50" r="44" fill="#000" filter="url(#rough)" opacity=".8" />
        <path d="M50 6Q22 50 50 94M50 6Q78 50 50 94M50 6V94" fill="none" stroke="#2a1507" strokeWidth="2.6" />
        <circle cx="50" cy="50" r="44" fill="url(#beadShine)" />
      </svg>
      <path d="M96 292Q150 312 204 292L196 284Q150 298 104 284Z" fill="url(#goldMetal)" />
    </svg>
  );
}
