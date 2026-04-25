// faq.jsx — FAQ accordion + clinic info + booking form + footer.

const FAQ = ({ language }) => {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: 'Do I need a referral to see Dr. Arshed?', a: 'No — you can book directly via WhatsApp, phone, or the form below. Bring any prior reports, scans, or medications.' },
    { q: 'How long does a first consultation take?', a: 'Usually 20–30 minutes. Rhinoplasty consultations are longer — about 45 minutes — because we discuss goals, take photos, and review your breathing in detail.' },
    { q: 'Will I need surgery?', a: 'Most ENT problems are managed without surgery. We always try medication, lifestyle changes, and conservative care first. Surgery is offered only when it is the right answer.' },
    { q: 'What does rhinoplasty cost?', a: 'It depends on what is needed (cosmetic only, septum work, grafts, revision). After your consultation you receive a clear, itemised estimate before deciding anything.' },
    { q: 'Can children come to the clinic?', a: 'Yes. We treat ear infections, adenoids, tonsils, and hearing concerns in children. The clinic has a quiet child-friendly corner.' },
    { q: 'Do you do telephone consultations?', a: 'For follow-ups and brief questions, yes — over WhatsApp call. First visits and rhinoplasty consultations need to be in person.' },
  ];

  return (
    <section className="section faq" id="faq">
      <div className="faq__head">
        <span className="eyebrow">Common questions · <span className="urdu">سوالات</span></span>
        <h2 className="h-section">Things people often ask before booking.</h2>
      </div>

      <div className="faq__list">
        {items.map((it, i) => (
          <div key={i} className={`faq__item ${open === i ? 'is-open' : ''}`}>
            <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)}>
              <span className="faq__q-num">Q{String(i+1).padStart(2,'0')}</span>
              <span className="faq__q-text">{it.q}</span>
              <span className="faq__q-toggle"><IconChevron size={20} sw={2.4}/></span>
            </button>
            <div className="faq__a"><div><p>{it.a}</p></div></div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Booking = ({ language }) => {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', phone: '', when: '', message: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="section booking" id="book">
      <div className="booking__inner card">
        <div className="booking__left">
          <span className="eyebrow" style={{color:'var(--accent)'}}>Book a visit · <span className="urdu" style={{color:'var(--accent)'}}>اپوائنٹمنٹ</span></span>
          <h2 className="h-section booking__title">Three ways to reach the clinic.</h2>
          <p className="lede" style={{color:'rgba(255,245,218,0.85)'}}>
            Pick whichever feels easiest. WhatsApp is fastest for most people; the form is best if you want to share details before the visit.
          </p>

          <div className="booking__channels">
            <a href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20with%20Dr.%20Arshed%20Ali."
               className="booking__channel">
              <div className="booking__channel-icon" style={{background:'#25D366'}}>
                <IconWhatsapp size={26} sw={2.2} color="white"/>
              </div>
              <div>
                <strong>WhatsApp</strong>
                <span>Reply usually within an hour</span>
              </div>
              <IconArrow size={20} sw={2.4} color="var(--cream)"/>
            </a>

            <a href="tel:+919876543210" className="booking__channel">
              <div className="booking__channel-icon" style={{background:'var(--accent)'}}>
                <IconPhone size={24} sw={2.2} color="var(--accent-ink)"/>
              </div>
              <div>
                <strong>+91 98765 43210</strong>
                <span>Mon–Sat · 10 AM – 7 PM</span>
              </div>
              <IconArrow size={20} sw={2.4} color="var(--cream)"/>
            </a>

            <div className="booking__channel">
              <div className="booking__channel-icon" style={{background:'var(--sage)'}}>
                <IconMap size={24} sw={2.2} color="var(--accent-ink)"/>
              </div>
              <div>
                <strong>Walk in</strong>
                <span>Mornings are usually quieter</span>
              </div>
            </div>
          </div>
        </div>

        <form className="booking__form" onSubmit={onSubmit}>
          <h3>Or send a message</h3>
          <label>
            <span>Your name</span>
            <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="e.g. Yasmeena Bashir"/>
          </label>
          <label>
            <span>Phone / WhatsApp</span>
            <input type="tel" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 ..."/>
          </label>
          <label>
            <span>Preferred date / time</span>
            <input type="text" value={form.when} onChange={e => setForm({...form, when: e.target.value})} placeholder="e.g. Saturday morning"/>
          </label>
          <label>
            <span>What's the concern? (optional)</span>
            <textarea rows="3" value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      placeholder="A short description helps us prepare for your visit."/>
          </label>
          <button type="submit" className="btn btn--accent" style={{width:'100%', justifyContent:'center'}}>
            {sent ? <><IconCheck size={16} sw={3}/> Message sent — we'll be in touch</> : <>Send message <IconArrow size={16} sw={2.4}/></>}
          </button>
        </form>
      </div>
    </section>
  );
};

const Clinic = () => (
  <section className="section clinic">
    <div className="clinic__grid">
      <div className="clinic__info card">
        <span className="eyebrow">The clinic · <span className="urdu">کلینک</span></span>
        <h2 className="h-section" style={{fontSize:'34px'}}>First Aid Pharmacy &amp; Immunization Centre</h2>
        <p className="lede" style={{fontSize:'18px',maxWidth:'none'}}>
          Opposite Dr. Sir Mohammad Iqbal Convention Center, Srinagar.
        </p>
        <div className="clinic__hours">
          <div className="clinic__hours-row">
            <strong>Mon – Fri</strong><span>10:00 AM – 7:00 PM</span>
          </div>
          <div className="clinic__hours-row">
            <strong>Saturday</strong><span>10:00 AM – 5:00 PM</span>
          </div>
          <div className="clinic__hours-row">
            <strong>Sunday</strong><span>By appointment only</span>
          </div>
        </div>
        <a href="https://maps.google.com/?q=34.030018,74.798584" className="btn btn--primary" target="_blank" rel="noreferrer">
          <IconMap size={16} sw={2.4}/> Get directions
        </a>
      </div>

      <div className="clinic__map card">
        <svg viewBox="0 0 600 460" className="clinic__map-svg" aria-hidden>
          <defs>
            <pattern id="mapDots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgba(15,33,56,0.15)"/>
            </pattern>
          </defs>
          <rect width="600" height="460" fill="var(--bg-soft)"/>
          <rect width="600" height="460" fill="url(#mapDots)"/>
          {/* Dal Lake */}
          <path d="M 420 60 C 500 80, 560 140, 560 220 C 560 290, 510 350, 440 360 C 380 365, 350 310, 360 250 C 370 180, 380 100, 420 60 Z"
                fill="#A8C8D8" stroke="var(--ink-900)" strokeWidth="2.5"/>
          <text x="465" y="220" fontFamily="Lilita One" fontSize="20" fill="#2A4D5E" textAnchor="middle">Dal Lake</text>
          {/* Roads */}
          <path d="M 0 240 L 600 240" stroke="var(--ink-900)" strokeWidth="3" strokeDasharray="8 8" opacity="0.4"/>
          <path d="M 240 0 L 240 460" stroke="var(--ink-900)" strokeWidth="3" strokeDasharray="8 8" opacity="0.4"/>
          <path d="M 100 380 Q 200 340 320 360 T 540 320" fill="none" stroke="var(--ink-900)" strokeWidth="3" opacity="0.5"/>
          {/* Buildings */}
          <rect x="80" y="180" width="40" height="40" fill="var(--paper)" stroke="var(--ink-900)" strokeWidth="2"/>
          <rect x="140" y="120" width="60" height="80" fill="var(--paper)" stroke="var(--ink-900)" strokeWidth="2"/>
          <rect x="60" y="290" width="80" height="60" fill="var(--paper)" stroke="var(--ink-900)" strokeWidth="2"/>
          <rect x="280" y="280" width="50" height="40" fill="var(--paper)" stroke="var(--ink-900)" strokeWidth="2"/>
          <text x="170" y="160" fontFamily="Nunito" fontWeight="700" fontSize="11" fill="var(--ink-700)" textAnchor="middle">Iqbal Convention</text>
          <text x="170" y="175" fontFamily="Nunito" fontWeight="700" fontSize="11" fill="var(--ink-700)" textAnchor="middle">Center</text>
          {/* Pin */}
          <g transform="translate(220 200)">
            <circle r="36" fill="var(--accent)" opacity="0.25"/>
            <circle r="20" fill="var(--accent)" opacity="0.4"/>
            <path d="M 0 -28 C -14 -28, -22 -18, -22 -6 C -22 8, 0 26, 0 26 C 0 26, 22 8, 22 -6 C 22 -18, 14 -28, 0 -28 Z"
                  fill="var(--crimson)" stroke="var(--ink-900)" strokeWidth="2.5"/>
            <circle cy="-8" r="6" fill="var(--cream)"/>
          </g>
          <g transform="translate(260 230)">
            <rect x="0" y="0" width="200" height="58" rx="14"
                  fill="var(--paper)" stroke="var(--ink-900)" strokeWidth="2.5"/>
            <text x="14" y="22" fontFamily="Lilita One" fontSize="14" fill="var(--ink-900)">Dr. Arshed Ali</text>
            <text x="14" y="40" fontFamily="Nunito" fontWeight="700" fontSize="11" fill="var(--ink-700)">First Aid Pharmacy</text>
            <text x="14" y="52" fontFamily="Nunito" fontWeight="700" fontSize="10" fill="var(--ink-500)">Opp. Iqbal Convention Center</text>
          </g>
        </svg>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <div className="footer__brand">
        <strong className="display" style={{fontSize:'28px'}}>Dr. Arshed Ali Naqshbandi</strong>
        <em>MBBS, MS ENT (H&amp;NS) GMC Srinagar · Ex-Sr. Resident SKIMS</em>
        <span className="urdu" style={{marginTop:8,display:'block'}}>کان، ناک اور گلے کے سرجن</span>
      </div>
      <div className="footer__cols">
        <div>
          <h6>Care</h6>
          <a href="#services">Services</a>
          <a href="#conditions">Conditions</a>
          <a href="#rhinoplasty">Rhinoplasty</a>
        </div>
        <div>
          <h6>Visit</h6>
          <a href="#journey">What to expect</a>
          <a href="#faq">FAQ</a>
          <a href="#book">Book a visit</a>
        </div>
        <div>
          <h6>Contact</h6>
          <a href="https://wa.me/919876543210">WhatsApp</a>
          <a href="tel:+919876543210">+91 98765 43210</a>
          <a href="https://maps.google.com/?q=34.030018,74.798584">Directions</a>
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <span>© Dr. Arshed Ali Naqshbandi · {new Date().getFullYear()}</span>
      <span style={{opacity:0.6}}>For medical emergencies dial 102</span>
    </div>
  </footer>
);

const faqStyles = `
.faq__head { margin-bottom: 40px; max-width: 720px; }
.faq__list { display: flex; flex-direction: column; gap: 12px; max-width: 920px; }
.faq__item {
  background: var(--paper);
  border: 2.5px solid var(--ink-900);
  border-radius: var(--r-md);
  overflow: hidden;
  transition: box-shadow 200ms ease;
}
.faq__item.is-open { box-shadow: var(--shadow-2); background: var(--cream); }
.faq__q {
  width: 100%; display: flex; align-items: center; gap: 18px;
  padding: 20px 24px;
  background: transparent; border: none; cursor: pointer;
  text-align: left;
  font-family: var(--ff-body);
}
.faq__q-num {
  font-family: var(--ff-display);
  color: var(--accent-deep);
  font-size: 18px;
  flex: 0 0 auto;
}
.faq__q-text {
  flex: 1;
  font-family: var(--ff-display);
  font-size: 19px;
  color: var(--ink-900);
}
.faq__q-toggle {
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px;
  border: 2px solid var(--ink-900);
  border-radius: 50%;
  transition: transform 200ms ease;
  background: var(--paper);
}
.faq__item.is-open .faq__q-toggle { transform: rotate(180deg); background: var(--accent); }
.faq__a {
  display: grid; grid-template-rows: 0fr;
  transition: grid-template-rows 250ms ease;
}
.faq__a > div { overflow: hidden; }
.faq__item.is-open .faq__a { grid-template-rows: 1fr; }
.faq__a p {
  margin: 0; padding: 0 24px 22px 60px;
  font-size: 16px; color: var(--ink-700);
  line-height: 1.55;
}

/* Booking */
.booking__inner {
  display: grid; grid-template-columns: 1fr 1fr;
  background: var(--ink-900);
  color: var(--cream);
  border-radius: var(--r-xl);
  overflow: hidden;
}
.booking__left { padding: 48px 44px; }
.booking__title { color: var(--cream); }
.booking__left .lede { color: rgba(255,245,218,0.85); }

.booking__channels {
  display: flex; flex-direction: column; gap: 12px;
  margin-top: 28px;
}
.booking__channel {
  display: flex; align-items: center; gap: 16px;
  padding: 14px;
  background: rgba(255,245,218,0.06);
  border: 1.5px solid rgba(255,245,218,0.2);
  border-radius: var(--r-md);
  text-decoration: none;
  color: var(--cream);
  transition: background 150ms ease;
}
.booking__channel:hover { background: rgba(255,245,218,0.12); }
.booking__channel-icon {
  width: 52px; height: 52px;
  border: 2.5px solid var(--cream);
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  flex: 0 0 52px;
}
.booking__channel > div:nth-child(2) { flex: 1; }
.booking__channel strong {
  display: block;
  font-family: var(--ff-display);
  font-size: 20px; color: var(--cream);
}
.booking__channel span {
  font-family: var(--ff-body);
  font-weight: 600; font-size: 13px;
  color: rgba(255,245,218,0.7);
  margin-top: 2px;
}

.booking__form {
  padding: 48px 44px;
  background: var(--bg-soft);
  color: var(--ink-900);
  display: flex; flex-direction: column; gap: 14px;
}
.booking__form h3 {
  margin: 0 0 8px;
  font-family: var(--ff-display);
  font-size: 26px; color: var(--ink-900);
}
.booking__form label {
  display: flex; flex-direction: column; gap: 6px;
}
.booking__form label > span {
  font-family: var(--ff-body); font-weight: 700;
  font-size: 12px; color: var(--ink-500);
  letter-spacing: 0.6px; text-transform: uppercase;
}
.booking__form input, .booking__form textarea {
  padding: 12px 16px;
  font-family: var(--ff-body); font-weight: 600;
  font-size: 15px; color: var(--ink-900);
  background: var(--paper);
  border: 2px solid var(--ink-900);
  border-radius: var(--r-md);
  outline: none;
  transition: box-shadow 150ms ease;
}
.booking__form input:focus, .booking__form textarea:focus {
  box-shadow: var(--shadow-1);
}

/* Clinic */
.clinic__grid {
  display: grid; grid-template-columns: 1fr 1.2fr;
  gap: 24px;
}
.clinic__info { padding: 40px 36px; }
.clinic__info .h-section { margin-bottom: 16px; }
.clinic__hours {
  margin: 24px 0 28px;
  background: var(--bg-soft);
  border: 2px dashed rgba(15,33,56,0.25);
  border-radius: var(--r-md);
  padding: 16px 20px;
}
.clinic__hours-row {
  display: flex; justify-content: space-between;
  padding: 8px 0;
  font-family: var(--ff-body);
  border-bottom: 1px dashed rgba(15,33,56,0.15);
}
.clinic__hours-row:last-child { border-bottom: none; }
.clinic__hours-row strong {
  font-weight: 800; color: var(--ink-900);
}
.clinic__hours-row span { color: var(--ink-700); font-weight: 600; }

.clinic__map { padding: 0; overflow: hidden; }
.clinic__map-svg { width: 100%; height: 100%; display: block; }

/* Footer */
.footer {
  background: var(--ink-900);
  color: var(--cream);
  padding: 56px 64px 24px;
}
.footer__inner {
  max-width: 1280px; margin: 0 auto;
  display: grid; grid-template-columns: 1.2fr 2fr;
  gap: 40px; padding-bottom: 32px;
  border-bottom: 1.5px solid rgba(255,245,218,0.15);
}
.footer__brand { display: flex; flex-direction: column; }
.footer__brand strong { color: var(--cream); }
.footer__brand em {
  font-family: var(--ff-body); font-style: normal;
  font-weight: 600; font-size: 14px;
  color: rgba(255,245,218,0.7);
  margin-top: 6px;
}
.footer__cols {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
}
.footer__cols h6 {
  margin: 0 0 12px;
  font-family: var(--ff-body);
  font-weight: 800; font-size: 12px;
  letter-spacing: 1.4px; text-transform: uppercase;
  color: var(--accent);
}
.footer__cols a {
  display: block;
  font-family: var(--ff-body); font-weight: 700;
  font-size: 15px; color: var(--cream);
  text-decoration: none; padding: 6px 0;
  opacity: 0.85;
  transition: opacity 150ms ease;
}
.footer__cols a:hover { opacity: 1; }

.footer__bottom {
  max-width: 1280px; margin: 0 auto;
  padding-top: 18px;
  display: flex; justify-content: space-between;
  font-family: var(--ff-body); font-weight: 600;
  font-size: 13px; color: rgba(255,245,218,0.7);
  flex-wrap: wrap; gap: 8px;
}

@media (max-width: 900px) {
  .booking__inner, .clinic__grid { grid-template-columns: 1fr; }
  .booking__left, .booking__form { padding: 32px 24px; }
  .footer { padding: 40px 22px 20px; }
  .footer__inner { grid-template-columns: 1fr; }
  .footer__cols { grid-template-columns: repeat(3, 1fr); gap: 14px; }
}
@media (max-width: 600px) {
  .footer__cols { grid-template-columns: 1fr; }
}
`;

Object.assign(window, { FAQ, Booking, Clinic, Footer, faqStyles });
