// conditions.jsx — Grid of conditions treated, organized by anatomy.

const Conditions = ({ language }) => {
  const groups = [
    {
      icon: IconEar,
      label: 'Ear',
      urdu: 'کان',
      color: 'var(--accent)',
      conditions: [
        { name: 'Hearing loss', sub: 'Adults & children' },
        { name: 'Ear infections', sub: 'Acute & chronic' },
        { name: 'Tinnitus', sub: 'Ringing in ears' },
        { name: 'Vertigo & dizziness', sub: 'BPPV, Meniere\'s' },
        { name: 'Eardrum perforation', sub: 'Tympanoplasty' },
        { name: 'Earwax impaction', sub: 'Microsuction' },
      ]
    },
    {
      icon: IconNose,
      label: 'Nose',
      urdu: 'ناک',
      color: 'var(--sage)',
      conditions: [
        { name: 'Sinusitis', sub: 'Acute & chronic' },
        { name: 'Allergic rhinitis', sub: 'Hay fever' },
        { name: 'Deviated nasal septum', sub: 'Septoplasty' },
        { name: 'Nasal polyps', sub: 'Endoscopic removal' },
        { name: 'Nosebleeds', sub: 'Recurrent epistaxis' },
        { name: 'Loss of smell', sub: 'Anosmia' },
      ]
    },
    {
      icon: IconThroat,
      label: 'Throat',
      urdu: 'گلا',
      color: 'var(--gold)',
      conditions: [
        { name: 'Tonsillitis', sub: 'Recurrent & chronic' },
        { name: 'Adenoid enlargement', sub: 'In children' },
        { name: 'Snoring & sleep apnoea', sub: 'OSA evaluation' },
        { name: 'Voice hoarseness', sub: 'Vocal cord care' },
        { name: 'Throat infections', sub: 'Pharyngitis' },
        { name: 'Swallowing problems', sub: 'Dysphagia' },
      ]
    },
    {
      icon: IconScalpel,
      label: 'Head & Neck',
      urdu: 'سر و گردن',
      color: 'var(--crimson)',
      conditions: [
        { name: 'Thyroid swelling', sub: 'Goitre, nodules' },
        { name: 'Neck lumps', sub: 'Lymph node evaluation' },
        { name: 'Salivary gland disorders', sub: 'Parotid, submandibular' },
        { name: 'Facial trauma', sub: 'Nasal fractures' },
        { name: 'Cosmetic rhinoplasty', sub: 'Aesthetic reshaping' },
        { name: 'Sleep surgery', sub: 'For severe snoring' },
      ]
    },
  ];

  return (
    <section className="section conditions" id="conditions">
      <div className="conditions__head">
        <div>
          <span className="eyebrow">Conditions treated · <span className="urdu">بیماریاں</span></span>
          <h2 className="h-section">If it's above the collarbone &mdash; we likely see it every week.</h2>
        </div>
        <p className="lede" style={{maxWidth: 460}}>
          A non-exhaustive list of what walks through the clinic door. If you're not sure where your symptom fits, just call &mdash; we'll point you in the right direction.
        </p>
      </div>

      <div className="conditions__grid">
        {groups.map((g, i) => (
          <div key={i} className="cond-group card">
            <div className="cond-group__head" style={{background: g.color}}>
              <div className="cond-group__icon">
                <g.icon size={32} sw={2} color="var(--accent-ink)" />
              </div>
              <div>
                <strong>{g.label}</strong>
                <span className="urdu">{g.urdu}</span>
              </div>
            </div>
            <ul className="cond-group__list">
              {g.conditions.map((c, j) => (
                <li key={j}>
                  <span className="cond-group__bullet" style={{background: g.color}} />
                  <div>
                    <strong>{c.name}</strong>
                    <em>{c.sub}</em>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const conditionsStyles = `
.conditions__head {
  display: grid; grid-template-columns: 1.4fr 1fr;
  gap: 40px; align-items: end; margin-bottom: 56px;
}
.conditions__grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px;
}
.cond-group { padding: 0; overflow: hidden; }
.cond-group__head {
  display: flex; align-items: center; gap: 14px;
  padding: 18px 20px;
  color: var(--accent-ink);
  border-bottom: 2.5px solid var(--ink-900);
}
.cond-group__icon {
  width: 48px; height: 48px;
  background: rgba(255,255,255,0.18);
  border: 2.5px solid var(--ink-900);
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  flex: 0 0 48px;
}
.cond-group__head strong {
  display: block;
  font-family: var(--ff-display); font-size: 22px;
  color: var(--accent-ink); line-height: 1;
}
.cond-group__head .urdu {
  display: block; margin-top: 2px;
  color: rgba(255, 246, 236, 0.85);
  font-size: 14px;
}
.cond-group__list {
  list-style: none; padding: 8px 20px 18px; margin: 0;
}
.cond-group__list li {
  display: flex; gap: 12px; padding: 10px 0;
  border-bottom: 1.5px dashed rgba(15,33,56,0.12);
}
.cond-group__list li:last-child { border-bottom: none; }
.cond-group__bullet {
  margin-top: 8px;
  flex: 0 0 8px; width: 8px; height: 8px;
  border-radius: 50%;
  border: 1.5px solid var(--ink-900);
}
.cond-group__list strong {
  display: block;
  font-family: var(--ff-body); font-weight: 800;
  font-size: 14px; color: var(--ink-900);
}
.cond-group__list em {
  display: block; margin-top: 1px;
  font-family: var(--ff-body); font-style: normal;
  font-size: 12px; font-weight: 600;
  color: var(--ink-500);
}

@media (max-width: 1100px) { .conditions__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 900px) {
  .conditions__head { grid-template-columns: 1fr; gap: 18px; }
}
@media (max-width: 600px) { .conditions__grid { grid-template-columns: 1fr; } }
`;

Object.assign(window, { Conditions, conditionsStyles });
