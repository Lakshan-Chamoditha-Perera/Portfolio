import { useEffect, useRef } from "react";

const PRESETS = [
  { label: "Neon Lime", v: "#EAFF00" },
  { label: "Blue", v: "#2563eb" },
  { label: "Emerald", v: "#059669" },
  { label: "Violet", v: "#7c3aed" },
  { label: "Amber", v: "#d97706" },
  { label: "Rose", v: "#e11d48" },
  { label: "Sports Green", v: "#4DFF00" },
];

const SIZES = [
  { id: "sm", label: "S", px: "15px" },
  { id: "md", label: "M", px: "18px" },
  { id: "lg", label: "L", px: "21px" },
];

export default function SettingsPanel({
  onClose,
  accent,
  setAccent,
  fontSize,
  setFontSize,
}) {
  const ref = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    function onClickOut(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        !e.target.closest("[data-settings-trigger]")
      )
        onClose();
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOut);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOut);
    };
  }, [onClose]);

  function applyAccent(color) {
    setAccent(color);
    document.documentElement.style.setProperty("--accent", color);
  }

  function applySize(id, px) {
    setFontSize(id);
    document.documentElement.style.setProperty("--base-size", px);
    document.documentElement.style.fontSize = px;
  }

  return (
    <div
      className="settings-panel"
      ref={ref}
      role="dialog"
      aria-label="Settings"
    >
      <div className="sp-head">
        <span className="sp-title">
          <span style={{ color: "var(--accent)" }}>⚙</span> Settings
        </span>
        <button
          className="sp-close"
          onClick={onClose}
          aria-label="Close settings"
        >
          ✕
        </button>
      </div>

      <div className="sp-section">
        <p className="sp-label">Font Size</p>
        <div className="sp-row">
          {SIZES.map((s) => (
            <button
              key={s.id}
              className={`sz-btn sz-${s.id}${fontSize === s.id ? " active" : ""}`}
              onClick={() => applySize(s.id, s.px)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="sp-section">
        <p className="sp-label">Accent Color</p>
        <div className="sp-row sp-swatches">
          {PRESETS.map((p) => (
            <button
              key={p.v}
              className={`swatch${accent === p.v ? " active" : ""}`}
              style={{ "--sw": p.v }}
              onClick={() => applyAccent(p.v)}
              title={p.label}
              aria-label={p.label}
            />
          ))}
          <label
            className="swatch swatch-custom"
            title="Custom color"
            aria-label="Custom color"
          >
            <input
              type="color"
              value={accent}
              onChange={(e) => applyAccent(e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
