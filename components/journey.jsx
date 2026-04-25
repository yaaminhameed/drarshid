// journey.jsx — Patient visit journey & testimonials.

const Journey = ({ language }) => {
  const steps = [
    { n: '1', title: 'Reach out', desc: 'WhatsApp or call. Tell us briefly what\'s wrong and we\'ll suggest a slot.', icon: IconWhatsapp, color: 'var(--accent)' },
    { n: '2', title: 'Visit the clinic', desc: 'Arrive 10 mins early. Comfortable waiting area. No long queues.', icon: IconHospital, color: 'var(--sage)' },
    { n: '3', title: 'Examination', desc: 'A focused exam with modern endoscopy. Clear explanation of what we find.', icon: IconStethoscope, color: 'var(--gold)' },
    { n: '4', title: 'Diagnosis & plan', desc: 'You leave knowing exactly what\'s wrong and a plan in your language.', icon: IconCheck, color: 'var(--crimson)' },
    { n: '5', title: 'Follow-up', desc: 'WhatsApp check-ins. Easy to reach if symptoms change.', icon: IconHeartPulse, color: 'var(--accent-deep)' },
  ];

  const testimonials = [
    { name: 'Yasmeena B.', area: 'Rajbagh, Srinagar', text: 'Six years of sinus headaches — finally explained and treated properly. The clinic feels calm, not rushed.', tag: 'Chronic sinusitis' },
    { name: 'Bilal R.', area: 'Anantnag', text: 'My son\'s tonsils were treated by Dr. Arshed. He took time to explain everything to us in Kashmiri. Felt like family.', tag: 'Pediatric tonsillectomy' },
    { name: 'Nazia A.', area: 'Hyderpora', text: 'I had my rhinoplasty here. Doctor was honest about what he could and couldn\'t change. Result feels natural — like me.', tag: 'Rhinoplasty' },
  ];

  return (
    <section className="section journey" id="journey">
      <div className="journey__head">
        <span className="eyebrow">Your visit · <span className="urdu">دورہ</span></span>
        <h2 className="h-section">What happens when you come in.</h2>
      </div>

      <div className="journey__steps">
        {steps.map((s, i) => (
          <div key={i} className="jstep">
            <div className="jstep__circle" style={{background: s.color}}>
              <s.icon size={26} sw={2.2} color="var(--accent-ink)"/>
              <span className="jstep__n">{s.n}</span>
            </div>
            <h5>{s.title}</h5>
            <p>{s.desc}</p>
          </div>
        ))}
        <svg className="journey__line" viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M 50 30 C 250 0, 350 60, 500 30 C 650 0, 750 60, 950 30"
                fill="none" stroke="var(--ink-900)" strokeWidth="2.5" strokeDasharray="6 6"/>
        </svg>
      </div>

      <div className="journey__testimonials">
        <h3 className="journey__t-title">What patients say</h3>
        <div className="journey__t-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`testimonial card testimonial--${i}`}>
              <IconQuote size={36} sw={2} color="var(--accent)"/>
              <p className="serif">"{t.text}"</p>
              <div className="testimonial__foot">
                <div>
                  <strong>{t.name}</strong>
                  <em>{t.area}</em>
                </div>
                <span className="tag">{t.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const journeyStyles = `
.journey__head { margin-bottom: 56px; max-width: 720px; }

.journey__steps {
  position: relative;
  display: grid; grid-template-columns: repeat(5, 1fr);
  gap: 18px; margin-bottom: 80px;
}
.journey__line {
  position: absolute; inset: 0; pointer-events: none;
  z-index: 0; width: 100%; height: 60px; top: 30px;
}
.jstep {
  position: relative; z-index: 1;
  background: var(--paper);
  border: 2.5px solid var(--ink-900);
  border-radius: var(--r-md);
  padding: 24px 18px 20px;
  text-align: center;
  box-shadow: var(--shadow-1);
}
.jstep__circle {
  position: relative;
  width: 64px; height: 64px;
  border: 2.5px solid var(--ink-900);
  border-radius: 50%;
  margin: -52px auto 14px;
  display: flex; align-items: center; justify-content: center;
  box-shadow: var(--shadow-2);
}
.jstep__n {
  position: absolute; top: -8px; right: -8px;
  width: 26px; height: 26px;
  background: var(--paper);
  border: 2.5px solid var(--ink-900);
  border-radius: 50%;
  font-family: var(--ff-display);
  color: var(--ink-900); font-size: 14px;
  display: flex; align-items: center; justify-content: center;
}
.jstep h5 {
  margin: 0 0 6px;
  font-family: var(--ff-display);
  font-size: 18px; color: var(--ink-900);
}
.jstep p {
  margin: 0; font-size: 13px;
  color: var(--ink-700); line-height: 1.45;
}

.journey__t-title {
  font-family: var(--ff-display);
  font-size: 32px; color: var(--ink-900);
  margin: 0 0 28px;
}
.journey__t-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px;
}
.testimonial {
  padding: 28px 26px;
  display: flex; flex-direction: column; gap: 16px;
}
.testimonial--0 { background: var(--paper); }
.testimonial--1 { background: var(--cream); }
.testimonial--2 { background: var(--sage-soft); }
.testimonial p {
  font-size: 19px; line-height: 1.45;
  color: var(--ink-900);
  font-style: italic; margin: 0;
}
.testimonial__foot {
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px; padding-top: 16px;
  border-top: 1.5px dashed rgba(15,33,56,0.18);
  flex-wrap: wrap;
}
.testimonial__foot strong {
  display: block;
  font-family: var(--ff-body); font-weight: 800;
  font-size: 15px; color: var(--ink-900);
}
.testimonial__foot em {
  display: block; margin-top: 2px;
  font-family: var(--ff-body); font-style: normal;
  font-weight: 600; font-size: 12px; color: var(--ink-500);
}

@media (max-width: 1100px) { .journey__steps { grid-template-columns: repeat(3, 1fr); } .journey__line { display: none; } }
@media (max-width: 900px)  { .journey__t-grid { grid-template-columns: 1fr; } }
@media (max-width: 700px)  { .journey__steps { grid-template-columns: 1fr 1fr; } }
`;

Object.assign(window, { Journey, journeyStyles });
