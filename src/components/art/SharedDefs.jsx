// Gradients/filters shared by every bead drawing. Rendered once in Layout.
export default function SharedDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <radialGradient id="beadBody" cx="35%" cy="30%" r="75%"><stop offset="0" stopColor="#c58a50" /><stop offset=".55" stopColor="#8a5326" /><stop offset="1" stopColor="#3b200c" /></radialGradient>
        <radialGradient id="beadShine" cx="30%" cy="25%" r="35%"><stop offset="0" stopColor="#fff" stopOpacity=".35" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient>
        <filter id="rough"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="4" /><feColorMatrix values="0 0 0 0 .1 0 0 0 0 .05 0 0 0 0 0 0 0 0 .5 0" /><feComposite in2="SourceGraphic" operator="in" /></filter>
        <clipPath id="beadClip"><circle cx="50" cy="50" r="44" /></clipPath>
        <linearGradient id="threadRed" x1="0" x2="1"><stop offset="0" stopColor="#7d0b12" /><stop offset=".5" stopColor="#d1262f" /><stop offset="1" stopColor="#7d0b12" /></linearGradient>
        <linearGradient id="goldMetal" x1="0" x2="1"><stop offset="0" stopColor="#a8832f" /><stop offset=".5" stopColor="#f1deaa" /><stop offset="1" stopColor="#a8832f" /></linearGradient>
      </defs>
    </svg>
  );
}
