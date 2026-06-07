export default function Eyebrow({ idx, children }) {
  return (
    <span className="eyebrow">
      <span className="idx">{idx}</span> — {children}
    </span>
  );
}
