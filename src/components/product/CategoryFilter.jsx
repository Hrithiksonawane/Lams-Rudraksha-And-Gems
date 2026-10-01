export default function CategoryFilter({ options, value, onChange }) {
  return (<div className="tabs">{options.map(([key, label]) => <button key={key} className={key === value ? "on" : ""} onClick={() => onChange(key)}>{label}</button>)}</div>);
}
