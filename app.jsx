// app.jsx — Main composition.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#E07A3C",
  "language": "en",
  "showUrduGreeting": true,
  "density": "normal"
}/*EDITMODE-END*/;

const App = () => {
  const [tweaks, setTweaks] = useTweaks(TWEAK_DEFAULTS);
  const [language, setLanguage] = React.useState(tweaks.language || 'en');

  // Apply accent
  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accent);
    // derive deep
    const a = tweaks.accent;
    document.documentElement.style.setProperty('--accent-deep', shade(a, -0.18));
  }, [tweaks.accent]);

  // sync language tweak <-> state
  React.useEffect(() => { setTweaks({ language }); }, [language]);

  // Reveal-on-scroll
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    // First, mark anything currently in viewport as visible immediately
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add('is-in');
    });
    const io = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-in'); });
    }, { threshold: 0.05, rootMargin: '0px 0px -10% 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav language={language} setLanguage={setLanguage}/>
      <main>
        <Hero language={language}/>
        <div className="section" style={{paddingTop:64, paddingBottom:0}}>
          <Stats/>
        </div>
        <div className="reveal"><About language={language}/></div>
        <div className="reveal"><Services language={language}/></div>
        <div className="reveal"><Conditions language={language}/></div>
        <div className="reveal"><Rhinoplasty language={language}/></div>
        <div className="reveal"><Journey language={language}/></div>
        <div className="reveal"><Clinic/></div>
        <div className="reveal"><FAQ language={language}/></div>
        <div className="reveal"><Booking language={language}/></div>
      </main>
      <Footer/>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Brand">
          <TweakColor label="Accent color" value={tweaks.accent}
                      onChange={v => setTweaks({ accent: v })}/>
          <TweakRadio label="Language" value={tweaks.language}
                      options={[{value:'en',label:'English'},{value:'ur',label:'اردو'}]}
                      onChange={v => { setTweaks({language: v}); setLanguage(v); }}/>
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

// utility: lighten/darken hex by amount in [-1, 1]
function shade(hex, p) {
  let c = hex.replace('#','');
  if (c.length === 3) c = c.split('').map(x=>x+x).join('');
  const r = parseInt(c.slice(0,2),16), g = parseInt(c.slice(2,4),16), b = parseInt(c.slice(4,6),16);
  const adj = v => Math.max(0, Math.min(255, Math.round(v + (p < 0 ? v : 255 - v) * p)));
  const toHex = v => v.toString(16).padStart(2,'0');
  return '#' + toHex(adj(r)) + toHex(adj(g)) + toHex(adj(b));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
