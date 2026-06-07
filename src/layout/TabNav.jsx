const TABS = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'skills',     label: 'Skills' },
  { id: 'education',  label: 'Education' },
  { id: 'contact',    label: 'Contact' },
];

export default function TabNav({ active, setActive, dark, onTheme }) {
  return (
    <nav className="tabnav">
      <div className="wrap">
        <div className="tabnav-inner" role="tablist">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              className="tab"
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
            >
              <span className="tnum">{String(i + 1).padStart(2, '0')}</span>
              {t.label}
            </button>
          ))}
          <span className="tab-spacer" />
          <button
            className="theme-btn"
            onClick={onTheme}
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {dark ? '☀' : '☾'}
          </button>
        </div>
      </div>
    </nav>
  );
}
