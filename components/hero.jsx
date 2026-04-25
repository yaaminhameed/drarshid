// hero.jsx — Hero section with doctor portrait, headline, anatomical illustration accents.

const HeroAnatomy = () => (
  <svg viewBox="0 0 420 460" className="hero-anatomy" aria-hidden="true">
    <defs>
      <radialGradient id="headGlow" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#FFE7D2" />
        <stop offset="100%" stopColor="#F6D6B8" />
      </radialGradient>
      <pattern id="dotPat" width="14" height="14" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="rgba(15,33,56,0.18)" />
      </pattern>
    </defs>

    {/* dot field bg */}
    <rect x="20" y="20" width="380" height="420" rx="180" fill="url(#dotPat)" opacity="0.35" />

    {/* head silhouette in profile facing right */}
    <path d="M120 360
             C 90 320, 80 260, 95 200
             C 105 150, 140 110, 200 100
             C 270 92, 320 130, 330 195
             C 332 215, 335 230, 348 245
             C 360 258, 360 275, 348 282
             C 340 287, 338 300, 340 315
             C 343 335, 330 355, 305 360
             C 285 364, 268 358, 258 370
             C 248 384, 252 405, 252 420
             L 120 420 Z"
          fill="url(#headGlow)" stroke="var(--ink-900)" strokeWidth="3" strokeLinejoin="round" />

    {/* ear */}
    <path d="M150 215
             C 138 215, 130 225, 132 240
             C 134 255, 148 265, 152 270
             C 154 273, 152 278, 154 282"
          fill="none" stroke="var(--ink-900)" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M148 230 c -3 5 -3 12 2 16" fill="none" stroke="var(--ink-900)" strokeWidth="2" strokeLinecap="round"/>

    {/* eye */}
    <ellipse cx="265" cy="200" rx="9" ry="5" fill="white" stroke="var(--ink-900)" strokeWidth="2.5" />
    <circle cx="267" cy="200" r="3" fill="var(--ink-900)" />
    <path d="M250 188 q 14 -8 28 0" fill="none" stroke="var(--ink-900)" strokeWidth="2.5" strokeLinecap="round"/>

    {/* brow */}
    <path d="M250 178 q 14 -6 28 -2" fill="none" stroke="var(--ink-900)" strokeWidth="3" strokeLinecap="round"/>

    {/* nose */}
    <path d="M295 200 c 8 18 18 30 18 45 c 0 8 -6 12 -14 12 c -4 0 -7 -2 -10 -4" 
          fill="none" stroke="var(--ink-900)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M296 252 c 4 4 12 4 16 0" fill="none" stroke="var(--ink-900)" strokeWidth="2" strokeLinecap="round"/>

    {/* mouth */}
    <path d="M275 285 q 18 4 32 -2" fill="none" stroke="var(--ink-900)" strokeWidth="3" strokeLinecap="round"/>
    <path d="M278 295 q 16 6 28 0" fill="none" stroke="var(--ink-900)" strokeWidth="2" strokeLinecap="round"/>

    {/* throat indicator */}
    <path d="M260 330 q 4 8 0 16" fill="none" stroke="var(--ink-900)" strokeWidth="2.5" strokeLinecap="round"/>

    {/* labels with leader lines */}
    <g className="hero-anatomy__label" data-label="ear">
      <line x1="60" y1="175" x2="135" y2="225" stroke="var(--ink-900)" strokeWidth="1.8" strokeDasharray="3 4" />
      <circle cx="60" cy="175" r="22" fill="var(--paper)" stroke="var(--ink-900)" strokeWidth="2.5" />
      <text x="60" y="180" textAnchor="middle" fontFamily="Lilita One" fontSize="14" fill="var(--ink-900)">EAR</text>
    </g>
    <g className="hero-anatomy__label" data-label="nose">
      <line x1="380" y1="240" x2="316" y2="240" stroke="var(--ink-900)" strokeWidth="1.8" strokeDasharray="3 4" />
      <circle cx="380" cy="240" r="24" fill="var(--accent)" stroke="var(--ink-900)" strokeWidth="2.5" />
      <text x="380" y="245" textAnchor="middle" fontFamily="Lilita One" fontSize="14" fill="var(--accent-ink)">NOSE</text>
    </g>
    <g className="hero-anatomy__label" data-label="throat">
      <line x1="380" y1="335" x2="270" y2="345" stroke="var(--ink-900)" strokeWidth="1.8" strokeDasharray="3 4" />
      <circle cx="384" cy="335" r="28" fill="var(--paper)" stroke="var(--ink-900)" strokeWidth="2.5" />
      <text x="384" y="340" textAnchor="middle" fontFamily="Lilita One" fontSize="14" fill="var(--ink-900)">THROAT</text>
    </g>

    {/* sound waves into ear */}
    <g opacity="0.7">
      <path d="M55 215 q -10 10 0 25" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 200 q -16 22 0 50" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M25 185 q -22 32 0 80" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
    </g>
  </svg>
);

const Hero = ({ language }) => {
  return (
    <section className="hero" id="top">
      {/* decorative bg shapes */}
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__copy">
          <div className="hero__chips">
            <span className="tag" style={{background:'var(--cream)'}}>
              <span style={{width:8,height:8,borderRadius:'50%',background:'var(--sage)',display:'inline-block'}}/>
              Accepting new patients
            </span>
            <span className="tag" style={{background:'var(--paper)'}}>
              GMC Srinagar · Ex-SKIMS
            </span>
          </div>

          <h1 className="hero__headline display">
            <span>Care for your</span><br/>
            <span className="hero__word">
              ear
              <svg className="hero__underline" viewBox="0 0 240 18" preserveAspectRatio="none" aria-hidden>
                <path d="M4 13 C 60 4, 180 4, 236 13" fill="none" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </span>,&nbsp;
            <span className="hero__word">
              nose
              <svg className="hero__underline" viewBox="0 0 240 18" preserveAspectRatio="none" aria-hidden>
                <path d="M4 13 C 60 4, 180 4, 236 13" fill="none" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </span> &amp;<br/>
            <span>throat &mdash; close to home.</span>
          </h1>

          <p className="lede hero__lede">
            {language === 'ur'
              ? <span className="urdu" style={{fontSize:'1.05em'}}>کان، ناک اور گلے کی ماہر دیکھ بھال — سری نگر میں</span>
              : 'Comprehensive ENT, head & neck surgery, and rhinoplasty care in Srinagar. Trained at GMC, with senior residency experience at SKIMS — delivered in a calm, unhurried setting.'}
          </p>

          <div className="hero__ctas">
            <a href="#book" className="btn btn--primary">
              <IconCalendar size={18} sw={2.4} /> Book a consultation
            </a>
            <a href="https://wa.me/919876543210" className="btn">
              <IconWhatsapp size={18} sw={2.4} color="#25D366" /> WhatsApp
            </a>
          </div>

          <div className="hero__trust">
            <div className="hero__trust-item">
              <span className="hero__trust-num">12+</span>
              <span className="hero__trust-lbl">Years training<br/>&amp; practice</span>
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-item">
              <span className="hero__trust-num">3,000+</span>
              <span className="hero__trust-lbl">Procedures<br/>performed</span>
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-item">
              <span className="hero__trust-num">4.9★</span>
              <span className="hero__trust-lbl">Patient<br/>rating</span>
            </div>
          </div>
        </div>

        <div className="hero__art">
          <div className="hero__portrait card">
            {/* Decorative backing — accent disc + dotted ring */}
            <div className="hero__portrait-disc" aria-hidden="true" />
            <svg className="hero__portrait-ring" viewBox="0 0 420 500" aria-hidden="true">
              <ellipse cx="210" cy="250" rx="190" ry="230" fill="none"
                stroke="var(--ink-900)" strokeWidth="2.5" strokeDasharray="2 7" strokeLinecap="round" opacity="0.55"/>
            </svg>
            <div className="hero__portrait-photo">
              <img src="assets/dr-portrait-final.png" alt="Dr. Arshed Ali — ENT specialist, Srinagar" />
              <div className="hero__portrait-tint" aria-hidden="true" />
            </div>
            {/* signature underline + name plate */}
            <div className="hero__portrait-plate" aria-hidden="true">
              <strong>Dr. Arshed Ali</strong>
              <em>ENT · Head &amp; Neck · Rhinoplasty</em>
            </div>

            {/* floating credential cards */}
            <div className="hero__chip hero__chip--1">
              <IconMortarBoard size={20} sw={2.2} />
              <div>
                <strong>MBBS, MS ENT</strong>
                <em>GMC Srinagar</em>
              </div>
            </div>
            <div className="hero__chip hero__chip--2">
              <IconHospital size={20} sw={2.2} />
              <div>
                <strong>Senior Resident</strong>
                <em>Ex-SKIMS</em>
              </div>
            </div>
            <div className="hero__chip hero__chip--3">
              <IconNose size={20} sw={2.2} />
              <div>
                <strong>Rhinoplasty</strong>
                <em>Cosmetic &amp; functional</em>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__anatomy-wrap" aria-hidden="true">
          <HeroAnatomy />
        </div>
      </div>

      {/* marquee strip */}
      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {[
            'Sinusitis','Tonsillitis','Hearing loss','Snoring','Deviated septum',
            'Vertigo','Thyroid surgery','Rhinoplasty','Septoplasty','Ear infections',
            'Voice disorders','Allergic rhinitis'
          ].concat([
            'Sinusitis','Tonsillitis','Hearing loss','Snoring','Deviated septum',
            'Vertigo','Thyroid surgery','Rhinoplasty','Septoplasty','Ear infections',
          ]).map((w, i) => (
            <span key={i}>{w}<span className="hero__marquee-dot">●</span></span>
          ))}
        </div>
      </div>
    </section>
  );
};

const heroStyles = `
.hero {
  position: relative;
  padding: 56px 64px 0;
  max-width: 1320px;
  margin: 0 auto;
  overflow: hidden;
}
.hero__blob {
  position: absolute; border-radius: 50%; filter: blur(0px);
  pointer-events: none; z-index: 0;
}
.hero__blob--1 {
  width: 380px; height: 380px;
  top: -80px; left: -80px;
  background: radial-gradient(circle, rgba(224,122,60,0.18), transparent 65%);
}
.hero__blob--2 {
  width: 480px; height: 480px;
  top: 120px; right: -120px;
  background: radial-gradient(circle, rgba(94,138,107,0.18), transparent 65%);
}
.hero__inner {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 1.1fr 1fr;
  gap: 56px; align-items: center;
  padding-bottom: 64px;
}
.hero__copy { padding-top: 16px; }
.hero__chips { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 24px; }

.hero__headline {
  font-family: var(--ff-display);
  font-size: clamp(46px, 6.4vw, 88px);
  line-height: 0.98;
  letter-spacing: 0.5px;
  color: var(--ink-900);
  margin: 0 0 24px;
}
.hero__word {
  position: relative; display: inline-block;
}
.hero__underline {
  position: absolute; left: -4px; right: -4px; bottom: -8px;
  width: calc(100% + 8px); height: 14px;
}

.hero__lede { margin: 0 0 32px; max-width: 540px; }

.hero__ctas { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 40px; }

.hero__trust {
  display: flex; align-items: stretch; gap: 24px;
  padding: 18px 24px;
  background: var(--paper);
  border: 2.5px solid var(--ink-900);
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-2);
  width: fit-content;
}
.hero__trust-item { display: flex; flex-direction: column; gap: 2px; }
.hero__trust-num {
  font-family: var(--ff-display);
  font-size: 32px; line-height: 1;
  color: var(--accent-deep);
}
.hero__trust-lbl {
  font-family: var(--ff-body); font-weight: 700;
  font-size: 11px; letter-spacing: 0.6px;
  text-transform: uppercase; color: var(--ink-500);
  line-height: 1.25;
}
.hero__trust-divider {
  width: 2px; background: rgba(15,33,56,0.15);
  border-radius: 2px;
}

/* art column */
.hero__art { position: relative; }
.hero__portrait {
  position: relative;
  border-radius: 28px;
  overflow: visible;
  background: transparent;
  width: 100%; max-width: 440px;
  margin: 0 auto;
  padding: 0;
  border: none;
  box-shadow: none;
  aspect-ratio: 4 / 5;
}
.hero__portrait-disc {
  position: absolute;
  inset: 6% 4% 14% 4%;
  background: var(--accent);
  border-radius: 50% 50% 46% 54% / 50% 50% 46% 54%;
  z-index: 0;
  transform: rotate(-3deg);
}
.hero__portrait-ring {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  z-index: 2;
  pointer-events: none;
  transform: rotate(4deg);
}
.hero__portrait-photo {
  position: absolute;
  inset: 8% 6% 8% 6%;
  border-radius: 50% 50% 46% 54% / 52% 52% 48% 48%;
  overflow: hidden;
  border: 3px solid var(--ink-900);
  background: var(--bg-soft);
  box-shadow: 8px 10px 0 var(--ink-900);
  z-index: 1;
}
.hero__portrait-photo img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: 50% 30%;
  display: block;
  filter: saturate(0.92) contrast(1.02);
  mix-blend-mode: normal;
}
.hero__portrait-tint {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 50% 25%, transparent 50%, rgba(15,33,56,0.14) 100%),
    linear-gradient(180deg, rgba(15,33,56,0.05) 0%, transparent 30%, transparent 70%, rgba(251,246,235,0.35) 100%);
  pointer-events: none;
  mix-blend-mode: multiply;
}
.hero__portrait-plate {
  position: absolute;
  bottom: -18px;
  left: 50%;
  transform: translateX(-50%) rotate(-1.5deg);
  background: var(--paper);
  border: 2.5px solid var(--ink-900);
  border-radius: var(--r-pill);
  padding: 8px 18px 9px;
  box-shadow: 4px 5px 0 var(--ink-900);
  text-align: center;
  z-index: 3;
  white-space: nowrap;
}
.hero__portrait-plate strong {
  display: block;
  font-family: var(--ff-display);
  font-size: 18px;
  font-weight: 800;
  color: var(--ink-900);
  letter-spacing: -0.01em;
  line-height: 1;
}
.hero__portrait-plate em {
  display: block;
  font-style: normal;
  font-size: 10px;
  font-weight: 600;
  color: var(--ink-500);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 4px;
}

.hero__chip {
  position: absolute;
  display: flex; align-items: center; gap: 10px;
  padding: 10px 14px 10px 12px;
  background: var(--paper);
  border: 2.5px solid var(--ink-900);
  border-radius: var(--r-pill);
  box-shadow: var(--shadow-2);
  font-family: var(--ff-body);
  animation: float-y 4.5s ease-in-out infinite;
}
.hero__chip > div { display: flex; flex-direction: column; line-height: 1.1; }
.hero__chip strong { font-size: 13px; font-weight: 800; color: var(--ink-900); }
.hero__chip em { font-style: normal; font-size: 11px; color: var(--ink-500); margin-top: 2px; }
.hero__chip--1 { top: 24px; left: -52px; animation-delay: 0s; background: var(--cream); z-index: 4; }
.hero__chip--2 { top: 44%; right: -42px; animation-delay: 1.5s; z-index: 4; }
.hero__chip--3 { bottom: 70px; left: -42px; animation-delay: 3s; background: var(--accent); color: var(--accent-ink); z-index: 4; }
.hero__chip--3 strong, .hero__chip--3 em { color: var(--accent-ink); }

.hero__anatomy-wrap { display: none; } /* reserved if we want second illustration */

.hero__marquee {
  position: relative;
  margin: 0 -64px;
  padding: 14px 0;
  background: var(--ink-900);
  color: var(--cream);
  border-top: 2.5px solid var(--ink-900);
  border-bottom: 2.5px solid var(--ink-900);
  overflow: hidden;
}
.hero__marquee-track {
  display: inline-flex;
  white-space: nowrap;
  animation: marqueeScroll 50s linear infinite;
  font-family: var(--ff-display);
  font-size: 22px; letter-spacing: 0.8px;
}
.hero__marquee-track > span {
  display: inline-flex; align-items: center; gap: 18px;
  padding: 0 18px;
}
.hero__marquee-dot { color: var(--accent); font-size: 14px; }
@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@media (max-width: 980px) {
  .hero { padding: 32px 22px 0; }
  .hero__inner { grid-template-columns: 1fr; gap: 40px; padding-bottom: 40px; }
  .hero__chip--1 { left: 0; }
  .hero__chip--2 { right: 0; }
  .hero__chip--3 { left: 0; }
  .hero__marquee { margin: 0 -22px; }
  .hero__trust { width: 100%; }
}
`;

Object.assign(window, { Hero, heroStyles });
