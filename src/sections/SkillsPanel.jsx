import PanelHead from '../ui/PanelHead';

export default function SkillsPanel({ data }) {
  return (
    <section className="panel">
      <div className="wrap">
        <PanelHead idx="04" label="Technical Skills" title="The Stack" />
        <div>
          {data.skills.map((g, i) => (
            <div className="skill-group" key={i}>
              <h4>
                <span className="gidx">{String(i + 1).padStart(2, '0')}</span>
                {g.group}
              </h4>
              <div className="chip-row">
                {g.items.map((s, j) => (
                  <span key={j} className={`chip${s.includes('Primary') ? ' accent' : ''}`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
