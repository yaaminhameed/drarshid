// rhinoplasty.jsx — Featured rhinoplasty showcase with anatomy diagram and procedure infographic.

const NoseDiagram = () => (
  <svg viewBox="0 0 460 400" className="rhino-diagram" aria-hidden="true">
    <defs>
      <linearGradient id="profileGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FBE4CC"/>
        <stop offset="100%" stopColor="#E5B689"/>
      </linearGradient>
    </defs>

    {/* face profile */}
    <path d="M80 40
             C 60 80, 50 130, 70 180
             C 80 200, 100 215, 120 222
             L 130 245
             L 175 250
             L 200 220
             C 215 215, 230 210, 240 195
             C 250 180, 245 165, 235 155
             L 230 130
             C 235 110, 230 80, 200 60
             C 160 40, 110 30, 80 40 Z"
          fill="url(#profileGrad)" stroke="var(--ink-900)" strokeWidth="3" strokeLinejoin="round"/>

    {/* nose bridge highlighted */}
    <path d="M225 130 C 240 145, 250 165, 248 180 C 246 195, 230 205, 215 210"
          fill="none" stroke="var(--accent-deep)" strokeWidth="4" strokeLinecap="round"/>

    {/* eye */}
    <ellipse cx="170" cy="135" rx="10" ry="6" fill="white" stroke="var(--ink-900)" strokeWidth="2.5"/>
    <circle cx="173" cy="135" r="3" fill="var(--ink-900)"/>
    <path d="M155 122 q 14 -8 30 0" fill="none" stroke="var(--ink-900)" strokeWidth="2.5" strokeLinecap="round"/>

    {/* lips */}
    <path d="M195 225 q 12 6 24 -2" fill="none" stroke="var(--ink-900)" strokeWidth="2.5" strokeLinecap="round"/>

    {/* zone callouts */}
    <g>
      {/* Bridge */}
      <line x1="380" y1="80" x2="245" y2="135" stroke="var(--ink-900)" strokeWidth="2" strokeDasharray="3 4"/>
      <g transform="translate(380 80)">
        <rect x="-60" y="-22" width="120" height="44" rx="22"
              fill="var(--paper)" stroke="var(--ink-900)" strokeWidth="2.5"/>
        <text x="0" y="-2" textAnchor="middle" fontFamily="Lilita One" fontSize="13" fill="var(--accent-deep)">BRIDGE</text>
        <text x="0" y="14" textAnchor="middle" fontFamily="Nunito" fontWeight="700" fontSize="10" fill="var(--ink-700)">dorsum reshaping</text>
      </g>

      {/* Tip */}
      <line x1="395" y1="180" x2="252" y2="178" stroke="var(--ink-900)" strokeWidth="2" strokeDasharray="3 4"/>
      <g transform="translate(395 180)">
        <rect x="-50" y="-22" width="100" height="44" rx="22"
              fill="var(--accent)" stroke="var(--ink-900)" strokeWidth="2.5"/>
        <text x="0" y="-2" textAnchor="middle" fontFamily="Lilita One" fontSize="13" fill="var(--accent-ink)">TIP</text>
        <text x="0" y="14" textAnchor="middle" fontFamily="Nunito" fontWeight="700" fontSize="10" fill="var(--accent-ink)">refinement</text>
      </g>

      {/* Septum */}
      <line x1="385" y1="265" x2="220" y2="220" stroke="var(--ink-900)" strokeWidth="2" strokeDasharray="3 4"/>
      <g transform="translate(385 265)">
        <rect x="-58" y="-22" width="116" height="44" rx="22"
              fill="var(--sage)" stroke="var(--ink-900)" strokeWidth="2.5"/>
        <text x="0" y="-2" textAnchor="middle" fontFamily="Lilita One" fontSize="13" fill="var(--accent-ink)">SEPTUM</text>
        <text x="0" y="14" textAnchor="middle" fontFamily="Nunito" fontWeight="700" fontSize="10" fill="var(--accent-ink)">straighten + breathe</text>
      </g>

      {/* Nostrils */}
      <line x1="60" y1="280" x2="170" y2="240" stroke="var(--ink-900)" strokeWidth="2" strokeDasharray="3 4"/>
      <g transform="translate(60 280)">
        <rect x="-52" y="-22" width="104" height="44" rx="22"
              fill="var(--cream)" stroke="var(--ink-900)" strokeWidth="2.5"/>
        <text x="0" y="-2" textAnchor="middle" fontFamily="Lilita One" fontSize="13" fill="var(--ink-900)">NOSTRILS</text>
        <text x="0" y="14" textAnchor="middle" fontFamily="Nunito" fontWeight="700" fontSize="10" fill="var(--ink-700)">alar reshaping</text>
      </g>
    </g>

    {/* before/after dotted overlay on bridge */}
    <path d="M225 130 C 245 150, 255 175, 248 195"
          fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeDasharray="4 5" opacity="0.7"/>
  </svg>
);

const Rhinoplasty = ({ language }) => {
  const steps = [
    { n: '01', title: 'Consultation', desc: 'A 45-minute talk: motivations, breathing, expectations. Photos and CT if needed.', icon: IconStethoscope },
    { n: '02', title: 'Surgical plan', desc: 'A bespoke plan — open or closed approach, septum work, grafting, timing.', icon: IconCalendar },
    { n: '03', title: 'Day of surgery', desc: 'Performed under general anaesthesia. 1.5–3 hours. Same-day or overnight stay.', icon: IconScalpel },
    { n: '04', title: 'Recovery', desc: 'Splint for 7 days. Bruising fades 10–14 days. Final shape settles in 6–12 months.', icon: IconLeaf },
  ];

  return (
    <section className="section rhino" id="rhinoplasty">
      <div className="rhino__head">
        <div>
          <span className="eyebrow">Featured procedure · <span className="urdu">ناک کی سرجری</span></span>
          <h2 className="h-section">Rhinoplasty &mdash; reshape, breathe, look like yourself.</h2>
          <p className="lede" style={{maxWidth:560}}>
            Rhinoplasty is one part art, one part anatomy. The goal isn't a different face &mdash; it's a nose that fits yours, breathes well, and ages naturally.
          </p>
        </div>
      </div>

      <div className="rhino__main">
        <div className="rhino__diagram-card card">
          <NoseDiagram />
          <div className="rhino__diagram-tag">
            <span className="hand" style={{fontSize:'24px',color:'var(--accent-deep)'}}>4 zones we shape</span>
          </div>
        </div>

        <div className="rhino__details">
          <div className="rhino__pair">
            <div className="rhino__type rhino__type--cosmetic">
              <span className="tag" style={{background:'var(--accent)', color:'var(--accent-ink)', borderColor:'var(--ink-900)'}}>Cosmetic</span>
              <h4>Aesthetic rhinoplasty</h4>
              <p>For shape: bridge bumps, drooping tips, asymmetry, post-trauma deformity.</p>
            </div>
            <div className="rhino__type rhino__type--functional">
              <span className="tag" style={{background:'var(--sage)', color:'var(--accent-ink)', borderColor:'var(--ink-900)'}}>Functional</span>
              <h4>Septorhinoplasty</h4>
              <p>For function: deviated septum, blocked breathing, snoring, recurrent sinus issues.</p>
            </div>
          </div>

          <div className="rhino__facts">
            <div className="rhino__fact">
              <IconClock size={20} sw={2.4} color="var(--accent-deep)"/>
              <div><strong>1.5–3 hrs</strong><span>Surgery time</span></div>
            </div>
            <div className="rhino__fact">
              <IconShield size={20} sw={2.4} color="var(--accent-deep)"/>
              <div><strong>General</strong><span>Anaesthesia</span></div>
            </div>
            <div className="rhino__fact">
              <IconLeaf size={20} sw={2.4} color="var(--accent-deep)"/>
              <div><strong>7 days</strong><span>Splint period</span></div>
            </div>
            <div className="rhino__fact">
              <IconHeartPulse size={20} sw={2.4} color="var(--accent-deep)"/>
              <div><strong>6–12 mo</strong><span>Final result</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="rhino__journey">
        <h3 className="rhino__journey-title">Your rhinoplasty journey, step by step</h3>
        <div className="rhino__steps">
          {steps.map((s, i) => (
            <div key={i} className="rhino__step">
              <div className="rhino__step-num">{s.n}</div>
              <div className="rhino__step-icon"><s.icon size={26} sw={2.2} color="var(--ink-900)"/></div>
              <h5>{s.title}</h5>
              <p>{s.desc}</p>
              {i < steps.length - 1 && <div className="rhino__step-arrow"><IconArrow size={20} sw={2.4} color="var(--ink-300)"/></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const rhinoStyles = `
.rhino { position: relative; }
.rhino__head { margin-bottom: 48px; max-width: 800px; }

.rhino__main {
  display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
  margin-bottom: 56px;
  align-items: stretch;
}
.rhino__diagram-card {
  position: relative;
  padding: 30px 20px;
  background: var(--bg-soft);
  display: flex; align-items: center; justify-content: center;
}
.rhino-diagram { width: 100%; height: auto; max-width: 460px; }
.rhino__diagram-tag {
  position: absolute; bottom: 18px; left: 24px;
}

.rhino__details {
  display: flex; flex-direction: column; gap: 20px;
}
.rhino__pair {
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
}
.rhino__type {
  padding: 22px;
  background: var(--paper);
  border: 2.5px solid var(--ink-900);
  border-radius: var(--r-md);
  box-shadow: var(--shadow-1);
}
.rhino__type h4 {
  margin: 14px 0 6px;
  font-family: var(--ff-display);
  font-size: 22px; color: var(--ink-900);
}
.rhino__type p {
  margin: 0; font-size: 14px;
  color: var(--ink-700); line-height: 1.45;
}

.rhino__facts {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
  background: var(--ink-900);
  padding: 24px;
  border-radius: var(--r-md);
  border: 2.5px solid var(--ink-900);
}
.rhino__fact {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 14px;
  background: rgba(255,245,218,0.08);
  border: 1.5px solid rgba(255,245,218,0.2);
  border-radius: 12px;
}
.rhino__fact > div { display: flex; flex-direction: column; line-height: 1.1; }
.rhino__fact strong {
  font-family: var(--ff-display); font-size: 18px;
  color: var(--cream);
}
.rhino__fact span {
  font-family: var(--ff-body); font-weight: 700;
  font-size: 11px; letter-spacing: 0.6px;
  text-transform: uppercase;
  color: rgba(255,245,218,0.7);
  margin-top: 2px;
}

.rhino__journey {
  background: var(--cream);
  padding: 40px 36px;
  border: 2.5px solid var(--ink-900);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-2);
}
.rhino__journey-title {
  margin: 0 0 28px;
  font-family: var(--ff-display);
  font-size: 30px;
  color: var(--ink-900);
  text-align: center;
}
.rhino__steps {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
  position: relative;
}
.rhino__step {
  position: relative;
  background: var(--paper);
  border: 2.5px solid var(--ink-900);
  border-radius: var(--r-md);
  padding: 22px 20px;
  box-shadow: var(--shadow-1);
}
.rhino__step-num {
  font-family: var(--ff-display);
  font-size: 16px;
  color: var(--accent-deep);
  letter-spacing: 1px;
}
.rhino__step-icon {
  width: 48px; height: 48px;
  background: var(--bg-soft);
  border: 2px solid var(--ink-900);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  margin: 12px 0 14px;
}
.rhino__step h5 {
  margin: 0 0 6px;
  font-family: var(--ff-display);
  font-size: 20px; color: var(--ink-900);
}
.rhino__step p {
  margin: 0; font-size: 13.5px;
  color: var(--ink-700); line-height: 1.45;
}
.rhino__step-arrow {
  position: absolute;
  right: -18px; top: 38px;
  background: var(--cream);
  border-radius: 50%;
  padding: 4px;
  z-index: 2;
}

@media (max-width: 980px) {
  .rhino__main { grid-template-columns: 1fr; }
  .rhino__steps { grid-template-columns: 1fr 1fr; }
  .rhino__step-arrow { display: none; }
}
@media (max-width: 600px) {
  .rhino__pair, .rhino__steps { grid-template-columns: 1fr; }
  .rhino__facts { grid-template-columns: 1fr; }
  .rhino__journey { padding: 28px 20px; }
}
`;

Object.assign(window, { Rhinoplasty, rhinoStyles });
