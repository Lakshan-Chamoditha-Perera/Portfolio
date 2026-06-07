import PanelHead from '../ui/PanelHead';

export default function AboutPanel({ data }) {
  return (
    <section className="panel">
      <div className="wrap">
        <PanelHead
          idx="01"
          label="About"
          title={<>Engineer, by<br /><span style={{ color: 'var(--accent)' }}>design.</span></>}
        />
        <div className="about-grid">
          <div className="about-body">
            <p className="lead">Secure systems. <span className="acc">Real</span> delivery.</p>
            <div style={{ height: '22px' }} />
            {data.about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="about-side">
            <div>
              <h4>// Focus areas</h4>
              <div className="chip-row">
                {data.focus.map((f, i) => (
                  <span key={i} className={`chip${i === 0 ? ' accent' : ''}`}>{f}</span>
                ))}
              </div>
            </div>
            <div className="stats">
              {data.stats.map((s, i) => (
                <div className="stat" key={i}>
                  <div className="num">{s.num}<span className="acc">.</span></div>
                  <div className="lab">{s.lab}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
