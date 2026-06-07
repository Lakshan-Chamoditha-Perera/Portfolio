const TABS = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'skills',     label: 'Skills' },
  { id: 'education',  label: 'Education' },
  { id: 'contact',    label: 'Contact' },
];

function GearIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export default function TabNav({ active, setActive, dark, onTheme, onSettings, settingsOpen }) {
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
          <button
            className={`theme-btn${settingsOpen ? ' settings-active' : ''}`}
            data-settings-trigger
            onClick={onSettings}
            title="Settings"
            aria-label="Open settings"
            aria-expanded={settingsOpen}
          >
            <GearIcon />
          </button>
        </div>
      </div>
    </nav>
  );
}
