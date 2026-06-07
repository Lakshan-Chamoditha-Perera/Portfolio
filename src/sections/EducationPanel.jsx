import Eyebrow from '../ui/Eyebrow';
import PanelHead from '../ui/PanelHead';

export default function EducationPanel({ data }) {
  return (
    <section className="panel">
      <div className="wrap">
        <PanelHead idx="05" label="Education & Credentials" title="Background" />
        <div style={{ marginBottom: 'clamp(40px,6vw,72px)' }}>
          {data.education.map((e, i) => (
            <div className="edu-item" key={i}>
              <span className="acc-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <div className="edu-deg">{e.deg}</div>
                <div className="edu-school">{e.school}</div>
                {e.note && <div className="edu-note">{e.note}</div>}
              </div>
              <span className="edu-year">{e.year}</span>
            </div>
          ))}
        </div>
        <Eyebrow idx="✦">Licenses & Certifications</Eyebrow>
        <div className="cert-list" style={{ marginTop: '20px' }}>
          {data.certs.map((c, i) => (
            <div className="cert" key={i}>
              <span className="cnum">{String(i + 1).padStart(2, '0')}</span>
              <span className="cname">{c.name}</span>
              <span className="cissuer">{c.issuer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
