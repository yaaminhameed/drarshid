// icons.jsx — All SVG icons for the site, hand-tuned in the design system style.
// Each icon is a stroke-only line drawing in deep navy unless overridden.

const Stroke = ({ children, size = 28, color = 'currentColor', sw = 2.2 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none"
       stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const IconEar = (p) => (
  <Stroke {...p}>
    <path d="M11 6c4-2 9-1 11 3 2 4 0 7-2 9-2 1-3 2-3 4 0 3-2 4-4 4-3 0-5-2-5-5 0-3 2-4 2-7 0-2-1-3-1-5 0-1 1-3 2-3z" />
    <path d="M14 14c0-2 2-3 4-2 1 1 1 3 0 4-1 1-2 1-2 3" />
  </Stroke>
);

const IconNose = (p) => (
  <Stroke {...p}>
    <path d="M16 4v9c0 3-3 4-4 7 0 2 2 3 4 3s4-1 4-3c-1-3-4-4-4-7" />
    <path d="M12 22c1 1 2 1.5 4 1.5s3-.5 4-1.5" />
    <path d="M14 18c.6 1 3.4 1 4 0" />
  </Stroke>
);

const IconThroat = (p) => (
  <Stroke {...p}>
    <path d="M11 4c2 3 4 5 5 7 1 2 1 5 0 8-1 2-3 4-3 6 0 1 1 3 3 3" />
    <path d="M21 4c-2 3-4 5-5 7" />
    <circle cx="13" cy="16" r="1.4" />
    <circle cx="19" cy="13" r="1.4" />
  </Stroke>
);

const IconScalpel = (p) => (
  <Stroke {...p}>
    <path d="M5 27l9-9" />
    <path d="M14 18l8-12c2-2 5 1 3 3l-12 8z" fill="currentColor" fillOpacity="0.08" />
    <path d="M14 18l-2 2" />
  </Stroke>
);

const IconStethoscope = (p) => (
  <Stroke {...p}>
    <path d="M7 4v8a5 5 0 0 0 10 0V4" />
    <path d="M7 4h2M15 4h2" />
    <path d="M12 17v3a5 5 0 0 0 10 0v-2" />
    <circle cx="22" cy="14" r="2.2" />
  </Stroke>
);

const IconHeartPulse = (p) => (
  <Stroke {...p}>
    <path d="M3 14h5l2-3 3 6 2-4h6" />
    <path d="M19 13c2-1 4-3 4-6 0-3-3-5-5-3-1 1-2 2-2 2s-1-1-2-2c-2-2-5 0-5 3 0 1 0 2 1 3" />
  </Stroke>
);

const IconClock = (p) => (
  <Stroke {...p}>
    <circle cx="16" cy="16" r="11" />
    <path d="M16 9v7l4 3" />
  </Stroke>
);

const IconShield = (p) => (
  <Stroke {...p}>
    <path d="M16 4l10 4v8c0 6-5 11-10 12-5-1-10-6-10-12V8z" />
    <path d="M11 16l3 3 6-7" />
  </Stroke>
);

const IconMortarBoard = (p) => (
  <Stroke {...p}>
    <path d="M2 12l14-6 14 6-14 6z" />
    <path d="M8 14v6c0 2 4 4 8 4s8-2 8-4v-6" />
    <path d="M28 12v8" />
  </Stroke>
);

const IconAward = (p) => (
  <Stroke {...p}>
    <circle cx="16" cy="13" r="7" />
    <path d="M11 18l-2 9 7-4 7 4-2-9" />
  </Stroke>
);

const IconHospital = (p) => (
  <Stroke {...p}>
    <path d="M5 28V10l11-5 11 5v18" />
    <path d="M5 28h22" />
    <path d="M16 16v6M13 19h6" />
    <rect x="10" y="22" width="3" height="6" />
    <rect x="19" y="22" width="3" height="6" />
  </Stroke>
);

const IconMap = (p) => (
  <Stroke {...p}>
    <path d="M16 3c-4 0-7 3-7 7 0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
    <circle cx="16" cy="10" r="2.5" />
  </Stroke>
);

const IconPhone = (p) => (
  <Stroke {...p}>
    <path d="M6 5l4-1 3 6-3 2c1 3 4 6 7 7l2-3 6 3-1 4c0 2-2 4-4 4C10 27 5 22 5 9c0-2 2-4 4-4z" />
  </Stroke>
);

const IconWhatsapp = (p) => (
  <Stroke {...p}>
    <path d="M16 4a12 12 0 0 0-10 18L4 28l6-2a12 12 0 1 0 6-22z" />
    <path d="M11 12c0 5 4 9 9 9l1-3-3-2-1 1c-1 0-3-2-3-3l1-1-2-3z" />
  </Stroke>
);

const IconCalendar = (p) => (
  <Stroke {...p}>
    <rect x="4" y="6" width="24" height="22" rx="3" />
    <path d="M4 12h24" />
    <path d="M10 3v5M22 3v5" />
    <circle cx="12" cy="18" r="1.2" fill="currentColor" />
    <circle cx="16" cy="18" r="1.2" fill="currentColor" />
    <circle cx="20" cy="18" r="1.2" fill="currentColor" />
    <circle cx="12" cy="22" r="1.2" fill="currentColor" />
    <circle cx="16" cy="22" r="1.2" fill="currentColor" />
  </Stroke>
);

const IconArrow = (p) => (
  <Stroke {...p}>
    <path d="M6 16h20" />
    <path d="M20 10l6 6-6 6" />
  </Stroke>
);

const IconChevron = (p) => (
  <Stroke {...p}>
    <path d="M10 12l6 6 6-6" />
  </Stroke>
);

const IconCheck = (p) => (
  <Stroke {...p}>
    <path d="M5 17l6 6 16-16" />
  </Stroke>
);

const IconQuote = (p) => (
  <Stroke {...p}>
    <path d="M8 22V14c0-3 2-5 5-5" fill="currentColor" fillOpacity="0.12"/>
    <path d="M8 22h6V14H8" />
    <path d="M18 22h6V14h-6c0-3 2-5 5-5" fill="currentColor" fillOpacity="0.12"/>
    <path d="M18 22h6V14h-6" />
  </Stroke>
);

const IconBalloon = (p) => (
  <Stroke {...p}>
    <ellipse cx="16" cy="12" rx="8" ry="9" />
    <path d="M14 21l2 3 2-3" />
    <path d="M16 24v4" />
  </Stroke>
);

const IconKid = (p) => (
  <Stroke {...p}>
    <circle cx="16" cy="8" r="4" />
    <path d="M9 28v-7c0-3 3-5 7-5s7 2 7 5v7" />
  </Stroke>
);

const IconWaveform = (p) => (
  <Stroke {...p}>
    <path d="M3 16h3l2-6 4 12 3-9 3 6h11" />
  </Stroke>
);

const IconSparkle = (p) => (
  <Stroke {...p}>
    <path d="M16 4v8M16 20v8M4 16h8M20 16h8" />
    <path d="M9 9l4 4M19 19l4 4M9 23l4-4M19 13l4-4" />
  </Stroke>
);

const IconLeaf = (p) => (
  <Stroke {...p}>
    <path d="M5 27c0-12 8-22 22-22-1 13-9 22-22 22z" />
    <path d="M5 27L20 12" />
  </Stroke>
);

Object.assign(window, {
  IconEar, IconNose, IconThroat, IconScalpel, IconStethoscope, IconHeartPulse,
  IconClock, IconShield, IconMortarBoard, IconAward, IconHospital, IconMap,
  IconPhone, IconWhatsapp, IconCalendar, IconArrow, IconChevron, IconCheck,
  IconQuote, IconBalloon, IconKid, IconWaveform, IconSparkle, IconLeaf
});
