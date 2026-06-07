import Eyebrow from './Eyebrow';

export default function PanelHead({ idx, label, title }) {
  return (
    <div className="panel-head">
      <Eyebrow idx={idx}>{label}</Eyebrow>
      <h2 className="sec-h">{title}</h2>
    </div>
  );
}
