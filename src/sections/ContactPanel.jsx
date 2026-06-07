import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import PanelHead from '../ui/PanelHead';

export default function ContactPanel({ data }) {
  const items = [
    { k: 'Email',    v: data.email,                      href: `mailto:${data.email}`,                icon: <FaEnvelope  size={18} /> },
    { k: 'Phone',    v: data.phone,                      href: `tel:${data.phone.replace(/\s/g,'')}`, icon: <FaPhone     size={18} /> },
    { k: 'LinkedIn', v: '/in/Lakshan-Chamoditha-Perera', href: data.linkedin,                         icon: <FaLinkedin  size={18} /> },
    { k: 'GitHub',   v: '/Lakshan-Chamoditha-Perera',    href: data.github,                           icon: <FaGithub    size={18} /> },
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
              <span className="cc-left">
                <span className="cc-icon">{it.icon}</span>
                <span>
                  <span className="cc-k">{it.k}</span>
                  <span className="cc-v">{it.v}</span>
                </span>
              </span>
              <span className="cc-arrow">↗</span>
            </a>
          ))}
        </div>
        <p className="cc-note">
          Based in {data.location} · Open to remote &amp; on-site roles · References on request
        </p>
      </div>
    </section>
  );
}
