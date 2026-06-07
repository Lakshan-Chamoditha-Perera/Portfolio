import data from '../data';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <p className="foot-giant">
          {data.name.first} <span className="outline">{data.name.last}</span>
        </p>
        <div className="foot-meta">
          <span>© {data.year} {data.name.first} {data.name.last} — {data.title}</span>
          <span className="foot-links">
            <a href={`mailto:${data.email}`}>Email</a>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a
              href="#top"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              ↑ Top
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
