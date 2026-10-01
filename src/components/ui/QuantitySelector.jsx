export default function QuantitySelector({ value, onChange, min = 1 }) {
  return (
    <div className="qty">
      <button type="button" aria-label="Decrease" onClick={() => onChange(Math.max(min, value - 1))}>−</button>
      <span>{value}</span>
      <button type="button" aria-label="Increase" onClick={() => onChange(value + 1)}>+</button>
    </div>
  );
}
