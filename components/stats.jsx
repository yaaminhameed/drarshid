// stats.jsx — Bold stats band between sections.

const Stats = () => {
  const items = [
    { num: '12+', label: 'Years training\n& clinical practice', icon: IconClock, color: 'var(--accent)' },
    { num: '3,000+', label: 'Patients seen\nin Kashmir valley', icon: IconHeartPulse, color: 'var(--sage)' },
    { num: '850+', label: 'ENT &amp; head/neck\nsurgeries performed', icon: IconScalpel, color: 'var(--gold)' },
    { num: '4.9★', label: 'Average rating\nfrom 200+ reviews', icon: IconAward, color: 'var(--crimson)' },
  ];
  return (
    <section className="section stats">
      <div className="stats__inner">
        {items.map((it, i) => (
          <div className="stats__item" key={i}>
            <div className="stats__icon" style={{background: it.color}}>
              <it.icon size={28} sw={2.2} color="var(--accent-ink)"/>
            </div>
            <div className="stats__num">{it.num}</div>
            <div className="stats__lbl" dangerouslySetInnerHTML={{__html: it.label.replace('\n','<br/>')}}/>
          </div>
        ))}
      </div>
    </section>
  );
};

const statsStyles = `
.stats { padding-top: 0; padding-bottom: 0; }
.stats__inner {
  display: grid; grid-template-columns: repeat(4, 1fr);
  background: var(--paper);
  border: 2.5px solid var(--ink-900);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-3);
  overflow: hidden;
}
.stats__item {
  padding: 32px 28px;
  display: flex; flex-direction: column; gap: 10px;
  border-right: 2px dashed rgba(15,33,56,0.18);
}
.stats__item:last-child { border-right: none; }
.stats__icon {
  width: 56px; height: 56px;
  border: 2.5px solid var(--ink-900);
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 6px;
}
.stats__num {
  font-family: var(--ff-display);
  font-size: 52px; line-height: 1;
  color: var(--ink-900);
}
.stats__lbl {
  font-family: var(--ff-body); font-weight: 700;
  font-size: 13px; line-height: 1.35;
  color: var(--ink-700);
  text-transform: uppercase; letter-spacing: 0.6px;
}
@media (max-width: 900px) {
  .stats__inner { grid-template-columns: 1fr 1fr; }
  .stats__item:nth-child(2) { border-right: none; }
  .stats__item:nth-child(1), .stats__item:nth-child(2) { border-bottom: 2px dashed rgba(15,33,56,0.18); }
}
@media (max-width: 500px) {
  .stats__inner { grid-template-columns: 1fr; }
  .stats__item { border-right: none; border-bottom: 2px dashed rgba(15,33,56,0.18); }
}
`;

Object.assign(window, { Stats, statsStyles });
