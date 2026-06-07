import data from '../data';

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-topbar">
          <span className="mono-strong">
            <span className="arrow" style={{ width: '16px', height: '12px' }} />
            {' '}LP — {data.title}
          </span>
          <span className="mono-strong">
            <span className="avail-dot" />
            {' '}Available for work
          </span>
        </div>
      </div>
      <hr className="rule" />
      <div className="wrap">
        <div className="hero-stage">
          <h1 className="giant bleed">{data.name.first}</h1>
          <h1 className="giant">
            <span className="outline">{data.name.last}</span>
            <span className="reg-mark">®{data.year}</span>
          </h1>
          <div className="hero-meta">
            <div className="hero-role">
              <b>{data.title}</b> · Fintech &amp; Distributed Systems<br />
              Java / Spring Boot · React / Next.js · {data.location}
            </div>
            </div>
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map(k => (
            <span key={k} aria-hidden={k === 1}>
              {data.focus.map((f, i) => <span key={i}>{f.replace('#', '')}</span>)}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
