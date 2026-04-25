// services.jsx — Three big service pillars (ENT, Head & Neck, Rhinoplasty) + grid of conditions.

const Services = ({ language }) => {
  const pillars = [
    {
      icon: IconEar,
      tag: 'Pillar 01',
      title: 'Ear, Nose & Throat',
      urdu: 'کان، ناک اور گلے',
      bullets: ['Ear infections & hearing loss', 'Sinusitis & nasal allergies', 'Tonsil & adenoid problems', 'Vertigo & balance issues'],
      accent: 'var(--accent)',
      ink: 'var(--accent-ink)',
    },
    {
      icon: IconScalpel,
      tag: 'Pillar 02',
      title: 'Head & Neck Surgery',
      urdu: 'سر اور گردن کی سرجری',
      bullets: ['Thyroid & parotid surgery', 'Neck lump evaluation', 'Endoscopic sinus surgery (FESS)', 'Snoring & sleep apnoea'],
      accent: 'var(--ink-900)',
      ink: 'var(--cream)',
    },
    {
      icon: IconNose,
      tag: 'Pillar 03',
      title: 'Rhinoplasty',
      urdu: 'ناک کی سرجری',
      bullets: ['Cosmetic nose reshaping', 'Functional septorhinoplasty', 'Post-trauma reconstruction', 'Revision rhinoplasty'],
      accent: 'var(--sage)',
      ink: 'var(--accent-ink)',
    },
  ];

  return (
    <section className="section services" id="services">
      <div className="services__head">
        <span className="eyebrow">What I treat · <span className="urdu">خدمات</span></span>
        <h2 className="h-section">Three pillars of care &mdash; from a stuffy nose to complex surgery.</h2>
      </div>

      <div className="services__pillars">
        {pillars.map((p, i) => (
          <article key={i} className="pillar card" style={{'--pillar-accent': p.accent, '--pillar-ink': p.ink}}>
            <div className="pillar__num">0{i+1}</div>
            <div className="pillar__icon">
              <p.icon size={36} sw={2} color="var(--pillar-ink)" />
            </div>
            <span className="pillar__tag">{p.tag}</span>
            <h3 className="pillar__title">{p.title}</h3>
            <span className="urdu pillar__urdu">{p.urdu}</span>
            <ul className="pillar__bullets">
              {p.bullets.map((b, j) => (
                <li key={j}><IconCheck size={14} sw={3} color="var(--accent-deep)" /> {b}</li>
              ))}
            </ul>
            <a href="#book" className="pillar__link">
              Book for this <IconArrow size={16} sw={2.4} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

const servicesStyles = `
.services__head { max-width: 760px; margin-bottom: 48px; }
.services__pillars {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
}
.pillar {
  position: relative;
  padding: 32px 28px 28px;
  display: flex; flex-direction: column;
  overflow: hidden;
  transition: transform 200ms ease;
}
.pillar:hover { transform: translateY(-4px); }
.pillar__num {
  position: absolute; top: 18px; right: 24px;
  font-family: var(--ff-display);
  font-size: 64px; line-height: 1;
  color: rgba(15,33,56,0.08);
}
.pillar__icon {
  width: 72px; height: 72px;
  background: var(--pillar-accent);
  border: 2.5px solid var(--ink-900);
  border-radius: 20px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 18px;
  box-shadow: var(--shadow-1);
}
.pillar__tag {
  font-family: var(--ff-body);
  font-weight: 800; font-size: 11px;
  letter-spacing: 1.4px; text-transform: uppercase;
  color: var(--ink-500);
}
.pillar__title {
  margin: 6px 0 4px;
  font-family: var(--ff-display);
  font-size: 26px; line-height: 1.05;
  color: var(--ink-900);
}
.pillar__urdu { display: block; margin-bottom: 16px; }
.pillar__bullets {
  list-style: none; padding: 0; margin: 0 0 24px;
  display: flex; flex-direction: column; gap: 10px;
  font-family: var(--ff-body); font-weight: 600;
  color: var(--ink-700);
}
.pillar__bullets li {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 15px;
  padding-bottom: 10px;
  border-bottom: 1.5px dashed rgba(15,33,56,0.12);
}
.pillar__bullets li:last-child { border-bottom: none; padding-bottom: 0; }
.pillar__bullets svg { margin-top: 4px; flex: 0 0 14px; }
.pillar__link {
  margin-top: auto;
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--ff-body); font-weight: 800;
  font-size: 14px; color: var(--ink-900);
  text-decoration: none;
  text-transform: uppercase; letter-spacing: 1px;
  transition: gap 150ms ease;
}
.pillar__link:hover { gap: 14px; }

@media (max-width: 900px) {
  .services__pillars { grid-template-columns: 1fr; }
}
`;

Object.assign(window, { Services, servicesStyles });
