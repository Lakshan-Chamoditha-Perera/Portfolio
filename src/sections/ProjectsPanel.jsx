import PanelHead from '../ui/PanelHead';
import TechChip from '../ui/TechChip';

function ProjectCard({ p }) {
  return (
    <article className={`proj-card${p.feature ? ' feature' : ''}`}>
      <div className="proj-top">
        <h3 className="proj-name">{p.name}</h3>
        <span className="proj-tag">{p.tag}</span>
      </div>
      <div className="proj-thumb"><span className="cap">{p.cap}</span></div>
      <p className="proj-desc">{p.desc}</p>
      <div className="chip-row">
        {p.tech.map((t, i) => <TechChip key={i} name={t} />)}
      </div>
    </article>
  );
}

export default function ProjectsPanel({ data }) {
  return (
    <section className="panel">
      <div className="wrap">
        <PanelHead idx="03" label="Featured Projects" title="Selected Work" />
        <div className="proj-grid">
          {data.projects.map((p, i) => <ProjectCard key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}
