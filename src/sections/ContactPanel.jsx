import PanelHead from '../ui/PanelHead';

export default function ContactPanel({ data }) {
  const items = [
    { k: "Email", v: data.email, href: `mailto:${data.email}` },
    { k: "Phone", v: data.phone, href: `tel:${data.phone.replace(/\s/g, "")}` },
    { k: "LinkedIn", v: "/in/Lakshan-Chamoditha-Perera", href: data.linkedin },
    { k: "GitHub", v: "/Lakshan-Chamoditha-Perera", href: data.github },
  ];

  return (
    <section className="panel">
      <div className="wrap">
        <PanelHead idx="06" label="Get In Touch" title={<>Let's<br />build it.</>} />
        <div className="contact-grid">
          {items.map((it, i) => (
            <a
              key={i}
              className="cc"
              href={it.href}
              target={it.href.startsWith('mailto:') || it.href.startsWith('tel:') ? undefined : '_blank'}
              rel="noopener noreferrer"
            >
              <span>
                <span className="cc-k">{it.k}</span>
                <span className="cc-v">{it.v}</span>
              </span>
              <span className="cc-arrow">↗</span>
            </a>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--f-mono)', fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginTop: '28px' }}>
          Based in {data.location} · Open to remote & on-site roles · References on request
        </p>
      </div>
    </section>
  );
}
