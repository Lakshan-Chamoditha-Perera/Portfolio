import { useState, useEffect, useRef } from 'react';
import { Hero, TabNav, Footer } from './layout';
import {
  AboutPanel, ExperiencePanel, ProjectsPanel,
  SkillsPanel, EducationPanel, ContactPanel,
} from './sections';
import { SettingsPanel } from './ui';
import data from './data';

const PANEL_MAP = {
  about:      AboutPanel,
  experience: ExperiencePanel,
  projects:   ProjectsPanel,
  skills:     SkillsPanel,
  education:  EducationPanel,
  contact:    ContactPanel,
};

export default function App() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState('about');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [fontSize, setFontSize] = useState('md');
  const [accent, setAccent] = useState('#ff4d1a');
  const contentRef = useRef(null);
  const firstRender = useRef(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    if (contentRef.current) {
      const top = contentRef.current.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [active]);

  const Panel = PANEL_MAP[active];

  return (
    <>
      <Hero />
      <TabNav
        active={active}
        setActive={setActive}
        dark={dark}
        onTheme={() => setDark(d => !d)}
        onSettings={() => setSettingsOpen(o => !o)}
        settingsOpen={settingsOpen}
      />
      {settingsOpen && (
        <SettingsPanel
          onClose={() => setSettingsOpen(false)}
          accent={accent}
          setAccent={setAccent}
          fontSize={fontSize}
          setFontSize={setFontSize}
        />
      )}
      <main ref={contentRef}>
        <Panel key={active} data={data} />
      </main>
      <Footer />
    </>
  );
}
