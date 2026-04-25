// about.jsx — About / credentials section.

const About = ({ language }) => {
  const credentials = [
    { year: 'MBBS', label: 'Bachelor of Medicine', school: 'Government Medical College, Srinagar' },
    { year: 'MS ENT', label: 'Master of Surgery — ENT, Head & Neck', school: 'GMC Srinagar' },
    { year: 'Sr. Resident', label: 'Senior Residency', school: 'SKIMS — Sher-i-Kashmir Institute of Medical Sciences' },
    { year: 'Fellowship', label: 'Rhinoplasty & Facial Plastics', school: 'Advanced training in nasal surgery' },
  ];

  const principles = [
    { icon: IconHeartPulse, title: 'Listen first', body: 'Every visit starts with a conversation. Symptoms told well are half-diagnosed.' },
    { icon: IconShield,    title: 'Conservative when possible', body: 'Medication and lifestyle changes before surgery — surgery only when it truly helps.' },
    { icon: IconSparkle,   title: 'Modern, gentle techniques', body: 'Endoscopic, minimally-invasive procedures with shorter recovery.' },
    { icon: IconLeaf,      title: 'Care after care', body: 'Follow-ups, WhatsApp check-ins, and recovery guidance in your language.' },
  ];

  return (
    <section className="section about" id="about">
      <div className="about__head">
        <div>
          <span className="eyebrow">About the doctor · <span className="urdu">تعارف</span></span>
          <h2 className="h-section">Eleven years inside Kashmir's best ENT departments &mdash; now caring for you, one patient at a time.</h2>
        </div>
        <p className="lede about__lede">
          Dr. Arshed Ali Naqshbandi trained at GMC Srinagar and held a senior residency at SKIMS &mdash; the institutions where the most complex head and neck cases in the valley pass through. He brings that depth into a calm clinic where there's room to actually talk.
        </p>
      </div>

      <div className="about__grid">
        <div className="about__credentials card">
          <div className="about__credentials-head">
            <IconAward size={22} sw={2.4} color="var(--accent)" />
            <h3>Training &amp; credentials</h3>
          </div>
          <ol className="about__timeline">
            {credentials.map((c, i) => (
              <li key={i} className="about__timeline-item">
                <span className="about__timeline-dot"><IconCheck size={14} sw={3} color="var(--accent-ink)" /></span>
                <div>
                  <strong>{c.year}</strong>
                  <span>{c.label}</span>
                  <em>{c.school}</em>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="about__principles">
          <h3 className="about__principles-title">How I practise</h3>
          {principles.map((p, i) => (
            <div className="about__principle" key={i}>
              <div className="about__principle-icon" style={{background: i % 2 ? 'var(--sage-soft)' : 'var(--cream)'}}>
                <p.icon size={26} sw={2.2} color="var(--ink-900)" />
              </div>
              <div>
                <strong>{p.title}</strong>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about__quote">
        <IconQuote size={42} sw={2} color="var(--accent)" />
        <p className="serif">
          "An ENT visit shouldn't feel like a queue at a counter. It should feel like a conversation with someone who has time to listen — and the training to know exactly what to do next."
        </p>
        <span className="hand" style={{fontSize:'28px',color:'var(--ink-700)'}}>— Dr. Arshed</span>
      </div>
    </section>
  );
};

const aboutStyles = `
.about__head {
  display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px;
  align-items: end; margin-bottom: 56px;
}
.about__lede { margin: 0; }
.about__grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
}
.about__credentials { padding: 32px 32px 28px; }
.about__credentials-head {
  display: flex; align-items: center; gap: 12px;
  padding-bottom: 18px; margin-bottom: 18px;
  border-bottom: 2.5px dashed rgba(15,33,56,0.2);
}
.about__credentials-head h3 {
  margin: 0; font-family: var(--ff-display);
  font-size: 22px; color: var(--ink-900);
}
.about__timeline { list-style: none; padding: 0; margin: 0; }
.about__timeline-item {
  display: flex; gap: 16px; padding: 14px 0;
  border-bottom: 1.5px dashed rgba(15,33,56,0.15);
}
.about__timeline-item:last-child { border-bottom: none; }
.about__timeline-dot {
  flex: 0 0 30px; width: 30px; height: 30px;
  border-radius: 50%;
  background: var(--accent);
  border: 2.5px solid var(--ink-900);
  display: inline-flex; align-items: center; justify-content: center;
}
.about__timeline-item > div { display: flex; flex-direction: column; gap: 2px; }
.about__timeline-item strong {
  font-family: var(--ff-display); font-size: 18px; color: var(--ink-900);
}
.about__timeline-item span {
  font-family: var(--ff-body); font-weight: 700;
  font-size: 14px; color: var(--ink-900);
}
.about__timeline-item em {
  font-family: var(--ff-body); font-style: normal;
  font-weight: 600; font-size: 13px; color: var(--ink-500);
}

.about__principles { display: flex; flex-direction: column; gap: 14px; }
.about__principles-title {
  margin: 0 0 4px; font-family: var(--ff-display);
  font-size: 22px; color: var(--ink-900);
}
.about__principle {
  display: flex; gap: 16px;
  background: var(--paper);
  padding: 18px 18px;
  border: 2.5px solid var(--ink-900);
  border-radius: var(--r-md);
  box-shadow: var(--shadow-1);
}
.about__principle-icon {
  flex: 0 0 56px; width: 56px; height: 56px;
  border: 2.5px solid var(--ink-900);
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
}
.about__principle strong {
  display: block;
  font-family: var(--ff-display); font-size: 18px;
  color: var(--ink-900);
}
.about__principle p {
  margin: 4px 0 0; font-size: 14px;
  color: var(--ink-700); line-height: 1.45;
}

.about__quote {
  margin-top: 56px;
  padding: 40px 56px;
  background: var(--ink-900);
  color: var(--cream);
  border-radius: var(--r-xl);
  border: 2.5px solid var(--ink-900);
  text-align: center;
  position: relative;
  box-shadow: var(--shadow-3);
}
.about__quote p {
  font-size: 26px; line-height: 1.4;
  font-style: italic; color: var(--cream);
  max-width: 760px; margin: 18px auto;
}
.about__quote svg { display: inline-block; }

@media (max-width: 900px) {
  .about__head, .about__grid { grid-template-columns: 1fr; gap: 24px; }
  .about__quote { padding: 28px 24px; }
  .about__quote p { font-size: 20px; }
}
`;

Object.assign(window, { About, aboutStyles });
