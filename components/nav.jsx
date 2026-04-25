// nav.jsx — Sticky top navigation bar.

const Nav = ({ language, setLanguage }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'About', urdu: 'تعارف' },
    { href: '#services', label: 'Services', urdu: 'خدمات' },
    { href: '#conditions', label: 'Conditions', urdu: 'بیماریاں' },
    { href: '#rhinoplasty', label: 'Rhinoplasty', urdu: 'ناک کی سرجری' },
    { href: '#journey', label: 'Visit', urdu: 'دورہ' },
    { href: '#faq', label: 'FAQ', urdu: 'سوالات' },
  ];

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" width="38" height="38">
              <circle cx="20" cy="20" r="18" fill="var(--ink-900)" />
              <text x="20" y="26" textAnchor="middle"
                    fontFamily="Lilita One" fontSize="18" fill="var(--cream)">A</text>
              <circle cx="32" cy="10" r="4" fill="var(--accent)" stroke="var(--ink-900)" strokeWidth="2" />
            </svg>
          </span>
          <span className="nav__brand-text">
            <strong>Dr. Arshed Ali</strong>
            <em>ENT · Head &amp; Neck Surgeon</em>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map(l => (
            <a key={l.href} href={l.href}>
              {language === 'ur' ? <span className="urdu">{l.urdu}</span> : l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="nav__lang" onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
                  aria-label="Toggle language">
            {language === 'en' ? 'اردو' : 'EN'}
          </button>
          <a href="#book" className="btn btn--accent nav__cta">
            <IconCalendar size={16} sw={2.4} /> Book visit
          </a>
          <button className="nav__menu" onClick={() => setOpen(!open)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && (
        <div className="nav__mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
              <span className="urdu" style={{marginLeft:8}}>{l.urdu}</span>
            </a>
          ))}
          <a href="#book" className="btn btn--accent" onClick={() => setOpen(false)}>Book visit</a>
        </div>
      )}
    </header>
  );
};

const navStyles = `
.nav {
  position: sticky; top: 0; z-index: 50;
  backdrop-filter: blur(6px);
  background: rgba(246, 239, 226, 0.85);
  transition: border-color 200ms ease, background 200ms ease, box-shadow 200ms ease;
  border-bottom: 2.5px solid transparent;
}
.nav.is-scrolled {
  background: rgba(246, 239, 226, 0.94);
  border-bottom-color: var(--ink-900);
  box-shadow: 0 6px 18px rgba(15,33,56,0.06);
}
.nav__inner {
  max-width: 1320px;
  margin: 0 auto;
  padding: 14px 32px;
  display: flex; align-items: center; gap: 24px;
}
.nav__brand {
  display: flex; align-items: center; gap: 12px;
  text-decoration: none; color: var(--ink-900);
}
.nav__brand-mark { display: inline-flex; }
.nav__brand-text { display: flex; flex-direction: column; line-height: 1; }
.nav__brand-text strong {
  font-family: var(--ff-display); font-size: 20px; letter-spacing: 0.4px;
}
.nav__brand-text em {
  font-family: var(--ff-body); font-style: normal;
  font-weight: 700; font-size: 11px;
  color: var(--ink-500); letter-spacing: 1.4px; text-transform: uppercase;
  margin-top: 4px;
}
.nav__links {
  display: flex; gap: 22px; margin-left: auto;
}
.nav__links a {
  font-family: var(--ff-body); font-weight: 800;
  font-size: 14px; color: var(--ink-700); text-decoration: none;
  padding: 6px 4px; position: relative;
  transition: color 150ms ease;
}
.nav__links a::after {
  content: ""; position: absolute; left: 4px; right: 4px; bottom: 0;
  height: 2px; background: var(--accent);
  border-radius: 2px; transform: scaleX(0); transform-origin: left;
  transition: transform 200ms ease;
}
.nav__links a:hover { color: var(--ink-900); }
.nav__links a:hover::after { transform: scaleX(1); }

.nav__actions { display: flex; align-items: center; gap: 12px; }
.nav__lang {
  width: 40px; height: 40px;
  border: 2.5px solid var(--ink-900);
  border-radius: 50%;
  background: var(--paper);
  font-family: var(--ff-body);
  font-weight: 800; font-size: 13px;
  color: var(--ink-900); cursor: pointer;
  box-shadow: var(--shadow-1);
}
.nav__cta { padding: 10px 18px; font-size: 14px; }
.nav__menu {
  display: none; flex-direction: column; gap: 5px;
  width: 40px; height: 40px;
  background: var(--paper);
  border: 2.5px solid var(--ink-900);
  border-radius: 10px; cursor: pointer;
  align-items: center; justify-content: center;
}
.nav__menu span { display: block; width: 18px; height: 2.5px; background: var(--ink-900); border-radius: 2px; }
.nav__mobile {
  display: none; flex-direction: column; gap: 4px;
  padding: 16px 24px; border-top: 2px solid var(--ink-900);
  background: var(--bg-soft);
}
.nav__mobile a {
  font-family: var(--ff-body); font-weight: 800; font-size: 16px;
  color: var(--ink-900); text-decoration: none; padding: 12px 0;
  border-bottom: 1px solid rgba(15,33,56,0.1);
}

@media (max-width: 960px) {
  .nav__links { display: none; }
  .nav__cta { display: none; }
  .nav__menu { display: flex; }
  .nav__mobile { display: flex; }
}
`;

Object.assign(window, { Nav, navStyles });
