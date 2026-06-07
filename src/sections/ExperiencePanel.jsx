import { useState, useRef, useEffect } from 'react';
import PanelHead from '../ui/PanelHead';

function AccItem({ idx, item, open, onToggle }) {
  const ref = useRef(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    if (ref.current) setH(open ? ref.current.scrollHeight : 0);
  }, [open, item]);

  useEffect(() => {
    const onResize = () => { if (open && ref.current) setH(ref.current.scrollHeight); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  return (
    <div className="acc-item">
      <button className="acc-head" aria-expanded={open} onClick={onToggle}>
        <span className="acc-num">{idx}</span>
        <span className="acc-title">
          <span className="role">{item.role}</span>
          <span className="co">{item.co}</span>
        </span>
        <span className="acc-dates">{item.dates}</span>
        <span className="acc-chev">+</span>
      </button>
      <div className="acc-body" style={{ height: h + 'px' }}>
        <div className="acc-body-inner" ref={ref}>
          <ul className="acc-bullets">
            {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ExperiencePanel({ data }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="panel">
      <div className="wrap">
        <PanelHead idx="02" label="Work Experience" title="Experience" />
        <div>
          {data.experience.map((e, i) => (
            <AccItem
              key={i}
              idx={String(i + 1).padStart(2, '0')}
              item={e}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
