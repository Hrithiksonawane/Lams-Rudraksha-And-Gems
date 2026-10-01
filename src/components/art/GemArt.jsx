export default function GemArt({ id, base, light }) {
  const gid = `gem-${id}`;
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Gemstone">
      <defs><linearGradient id={gid} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={light} /><stop offset="1" stopColor={base} /></linearGradient></defs>
      <polygon points="50,6 88,30 88,70 50,94 12,70 12,30" fill={`url(#${gid})`} stroke="#0006" />
      <polygon points="50,26 70,38 70,62 50,74 30,62 30,38" fill={light} opacity=".55" stroke="#fff6" strokeWidth=".8" />
      <path d="M50 6V26M88 30L70 38M88 70L70 62M50 94V74M12 70L30 62M12 30L30 38" stroke="#fff7" strokeWidth=".8" />
      <polygon points="50,6 88,30 70,38 50,26" fill="#fff" opacity=".28" />
      <polygon points="12,70 30,62 50,74 50,94" fill="#000" opacity=".22" />
      <ellipse cx="38" cy="32" rx="6" ry="3" fill="#fff" opacity=".7" transform="rotate(-30 38 32)" />
    </svg>
  );
}
