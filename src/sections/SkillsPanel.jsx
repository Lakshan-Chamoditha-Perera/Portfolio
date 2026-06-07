import PanelHead from '../ui/PanelHead';
import TechChip from '../ui/TechChip';

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
                  <TechChip key={j} name={s} accent={s.includes('Primary')} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
