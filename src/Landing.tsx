import React from 'react';
import {
  Shield, Code2, Cloud, Layers, Users, Lightbulb,
  Calendar, CheckCircle2, Activity, Lock, ShieldCheck, Clock,
  Mail, Phone, MapPin, ExternalLink, Send, Menu, X, ArrowRight,
  type LucideIcon,
} from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────

interface Service {
  code: string;
  name: string;
  desc: string;
  shortDesc: string;
  tags: string[];
  Icon: LucideIcon;
  color: string;
  colorBg: string;
}

interface Tech {
  name: string;
  cat: string;
}

interface Client {
  name: string;
  sector: string;
  years: string;
  note: string;
}

interface TeamMember {
  name: string;
  role: string;
  count: string;
  initials: string;
}

interface Stat {
  val: string;
  label: string;
  Icon: LucideIcon;
}

interface VarConfig {
  bg: string;
  bgSoft: string;
  panel: string;
  border: string;
  borderStrong: string;
  text: string;
  textSoft: string;
  textMuted: string;
  accent: string;
  accentDim: string;
  warn: string;
  danger: string;
  glow: string;
  glowStrong: string;
  scanline: boolean;
  variation: string;
}

interface HeroSlide {
  badge: string;
  headline: string;
  accent: string;
  desc: string;
}

// ── Design tokens ─────────────────────────────────────────────────

const C = {
  bg: '#F8FAFC',
  bgSoft: '#F1F5F9',
  white: '#FFFFFF',
  navy: '#0F172A',
  slate: '#334155',
  muted: '#64748B',
  mutedLight: '#94A3B8',
  border: '#E2E8F0',
  borderStrong: '#CBD5E1',
  blue: '#2563EB',
  blueLight: '#EFF6FF',
  blueDark: '#1D4ED8',
  amber: '#F59E0B',
  amberDark: '#D97706',
  green: '#059669',
  red: '#DC2626',
  sky: '#0284C7',
  purple: '#7C3AED',
  shadow: '0 1px 3px rgba(0,0,0,0.06)',
  shadowMd: '0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.04)',
  shadowLg: '0 10px 25px -5px rgba(0,0,0,0.08)',
  shadowBlue: '0 4px 14px rgba(37,99,235,0.2)',
};

// ── Data ─────────────────────────────────────────────────────────

const SERVICES: Service[] = [
  {
    code: '01',
    name: 'Ciberseguridad',
    desc: 'Protegemos tu empresa de hackers y amenazas digitales. Desde el análisis de vulnerabilidades hasta la respuesta ante incidentes, cuidamos tu negocio.',
    shortDesc: 'Protección digital completa',
    tags: ['Pentesting', 'SOC', 'ISO 27001'],
    Icon: Shield,
    color: C.red,
    colorBg: '#FEF2F2',
  },
  {
    code: '02',
    name: 'Desarrollo a Medida',
    desc: 'Creamos la app o plataforma web que tu negocio necesita. Desde la idea hasta el lanzamiento, con tecnología moderna y diseño cuidado.',
    shortDesc: 'Tu app, hecha para ti',
    tags: ['React', 'React Native', 'Angular'],
    Icon: Code2,
    color: C.blue,
    colorBg: C.blueLight,
  },
  {
    code: '03',
    name: 'Cloud & DevOps',
    desc: 'Tu tecnología en la nube, siempre disponible y sin interrupciones. Migra, escala y optimiza tu infraestructura con expertos certificados.',
    shortDesc: 'Infraestructura que nunca falla',
    tags: ['AWS', 'Kubernetes', 'CI/CD'],
    Icon: Cloud,
    color: C.sky,
    colorBg: '#F0F9FF',
  },
  {
    code: '04',
    name: 'SaaS',
    desc: 'Convertimos tu idea en un producto digital que crece contigo. Plataformas multi-usuario, escalables y listas para el mercado.',
    shortDesc: 'De idea a producto real',
    tags: ['Multi-usuario', 'Escalable', 'Facturación'],
    Icon: Layers,
    color: C.purple,
    colorBg: '#F5F3FF',
  },
  {
    code: '05',
    name: 'Outsourcing',
    desc: 'Ingenieros expertos integrados a tu equipo, cuando los necesitas. Refuerza tu capacidad tecnológica sin los costos de contratar.',
    shortDesc: 'Tu equipo ampliado',
    tags: ['Squads dedicados', 'Nearshore', 'LATAM'],
    Icon: Users,
    color: C.green,
    colorBg: '#ECFDF5',
  },
  {
    code: '06',
    name: 'Consultoría TI',
    desc: 'Te ayudamos a tomar las mejores decisiones tecnológicas para tu empresa. Estrategia clara, implementación efectiva y resultados medibles.',
    shortDesc: 'Decisiones tecnológicas acertadas',
    tags: ['Estrategia', 'Modernización', 'Roadmap'],
    Icon: Lightbulb,
    color: C.amber,
    colorBg: '#FFFBEB',
  },
];

const TECH: Tech[] = [
  { name: 'AWS', cat: 'cloud' },
  { name: 'React', cat: 'frontend' },
  { name: 'React Native', cat: 'mobile' },
  { name: 'Angular', cat: 'frontend' },
  { name: 'Java', cat: 'backend' },
  { name: 'Spring Boot', cat: 'backend' },
  { name: 'Node.js', cat: 'backend' },
  { name: 'Python', cat: 'backend' },
  { name: 'Kubernetes', cat: 'cloud' },
  { name: 'Docker', cat: 'cloud' },
  { name: 'Terraform', cat: 'cloud' },
  { name: 'PostgreSQL', cat: 'data' },
  { name: 'MongoDB', cat: 'data' },
  { name: 'Redis', cat: 'data' },
  { name: 'GraphQL', cat: 'api' },
  { name: 'TypeScript', cat: 'frontend' },
];

const CLIENTS: Client[] = [
  { name: 'AFP Habitat', sector: 'Pensiones', years: '8+ años', note: 'Outsourcing continuo' },
  { name: 'Seguros SURA', sector: 'Seguros', years: 'Cliente activo', note: 'Plataformas digitales' },
  { name: 'Endura APP', sector: 'Fitness', years: 'Producto', note: 'App fitness multiplataforma' },
  { name: 'GrainLog', sector: 'Logística', years: 'Producto', note: 'Logística de granos' },
  { name: '2EC', sector: 'Ciberseguridad', years: 'Cliente activo', note: 'Integraciones backend' },
];

const TEAM: TeamMember[] = [
  { name: 'Ingeniería', role: 'Desarrollo y Arquitectura de Software', count: '4 ingenieros', initials: 'ING' },
  { name: 'Cloud & Seguridad', role: 'Especialistas certificados AWS e ISO 27001', count: '3 especialistas', initials: 'C&S' },
  { name: 'Producto', role: 'Diseño, Experiencia de Usuario y Gestión', count: '2 personas', initials: 'PRD' },
  { name: 'Squads Dedicados', role: 'Integrados en la operación del cliente', count: '10+ asignados', initials: 'SQD' },
];

const STATS: Stat[] = [
  { val: '12+', label: 'años en la industria', Icon: Calendar },
  { val: '20+', label: 'proyectos entregados', Icon: CheckCircle2 },
  { val: '8+', label: 'años con AFP Habitat', Icon: Clock },
  { val: '99.9%', label: 'uptime promedio', Icon: Activity },
  { val: '24/7', label: 'soporte activo', Icon: ShieldCheck },
  { val: '0', label: 'brechas en clientes 2025', Icon: Lock },
];

const HERO_SLIDES: HeroSlide[] = [
  {
    badge: 'Desarrollo · Web · Móvil',
    headline: 'Software que hace',
    accent: 'crecer tu negocio.',
    desc: 'Construimos aplicaciones web y móviles que transforman la manera en que tu empresa opera. Del prototipo al producto final, con calidad garantizada.',
  },
  {
    badge: 'Redes · Infraestructura',
    headline: 'Redes empresariales',
    accent: 'que nunca se detienen.',
    desc: 'Diseñamos y gestionamos la infraestructura de conectividad de tu empresa. Tu red, siempre operativa, segura y monitoreada.',
  },
  {
    badge: 'Seguridad perimetral',
    headline: 'Blindamos tu empresa',
    accent: 'ante cualquier amenaza.',
    desc: 'Implementamos las mejores barreras de seguridad para proteger los datos y sistemas de tu negocio de ataques externos.',
  },
  {
    badge: 'Ciberseguridad empresarial',
    headline: 'Tu seguridad digital,',
    accent: 'en manos de expertos.',
    desc: 'Auditorías, protección continua y respuesta rápida ante incidentes. Cumplimos los estándares internacionales más exigentes.',
  },
  {
    badge: 'Apps · Web · Móvil',
    headline: 'Aplicaciones que tus',
    accent: 'clientes van a amar.',
    desc: 'Creamos experiencias digitales modernas y atractivas. Diseño cuidado, rendimiento garantizado, entregas puntuales.',
  },
  {
    badge: 'Cloud · AWS',
    headline: 'Tu negocio en la nube,',
    accent: 'sin preocupaciones.',
    desc: 'Migramos y gestionamos tu tecnología en AWS. Escalabilidad, confiabilidad y costos optimizados desde el primer día.',
  },
];

// ── Var configs (kept for API compatibility) ──────────────────────

const VARS: Record<string, Omit<VarConfig, 'variation'>> = {
  mono: {
    bg: C.bg, bgSoft: C.bgSoft, panel: C.white,
    border: C.border, borderStrong: C.borderStrong,
    text: C.navy, textSoft: C.slate, textMuted: C.muted,
    accent: C.blue, accentDim: C.blueDark,
    warn: C.amber, danger: C.red,
    glow: '0 4px 14px rgba(37,99,235,0.12)',
    glowStrong: '0 8px 30px rgba(37,99,235,0.2)',
    scanline: false,
  },
  light: {
    bg: C.white, bgSoft: C.bg, panel: C.white,
    border: C.border, borderStrong: C.borderStrong,
    text: C.navy, textSoft: C.slate, textMuted: C.muted,
    accent: C.blue, accentDim: C.blueDark,
    warn: C.amber, danger: C.red,
    glow: '0 4px 14px rgba(37,99,235,0.12)',
    glowStrong: '0 8px 30px rgba(37,99,235,0.2)',
    scanline: false,
  },
  phosphor: {
    bg: C.bg, bgSoft: C.bgSoft, panel: C.white,
    border: C.border, borderStrong: C.borderStrong,
    text: C.navy, textSoft: C.slate, textMuted: C.muted,
    accent: C.blue, accentDim: C.blueDark,
    warn: C.amber, danger: C.red,
    glow: '0 4px 14px rgba(37,99,235,0.12)',
    glowStrong: '0 8px 30px rgba(37,99,235,0.2)',
    scanline: false,
  },
};

// ── Tech category config ──────────────────────────────────────────

const CAT_CONFIG: Record<string, { label: string; color: string; bg: string }> = {
  cloud:    { label: 'Cloud',    color: C.sky,    bg: '#F0F9FF' },
  backend:  { label: 'Backend',  color: C.green,  bg: '#ECFDF5' },
  frontend: { label: 'Frontend', color: C.blue,   bg: C.blueLight },
  mobile:   { label: 'Móvil',    color: C.purple, bg: '#F5F3FF' },
  data:     { label: 'Datos',    color: C.amber,  bg: '#FFFBEB' },
  api:      { label: 'API',      color: C.red,    bg: '#FEF2F2' },
};

// ── Mobile context ────────────────────────────────────────────────

const MobileCtx = React.createContext(false);

function useIsMobile(breakpoint = 768): boolean {
  const [mobile, setMobile] = React.useState(
    () => typeof window !== 'undefined' && window.innerWidth < breakpoint
  );
  React.useEffect(() => {
    const handler = () => setMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);
  return mobile;
}

// ── Hooks ─────────────────────────────────────────────────────────

function useReveal(threshold = 0.15) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setSeen(true); io.disconnect(); }
      },
      { threshold }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

function useScrollY() {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return y;
}

const NAV_IDS = ['servicios', 'stack', 'clientes', 'equipo', 'contacto'] as const;
type NavId = typeof NAV_IDS[number] | '';

function useActiveSection(): NavId {
  const [active, setActive] = React.useState<NavId>('');
  React.useEffect(() => {
    const observers = NAV_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const io = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-45% 0px -45% 0px' }
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((io) => io?.disconnect());
  }, []);
  return active;
}

// ── Global styles ─────────────────────────────────────────────────

function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&display=swap');
      *, *::before, *::after { box-sizing: border-box; }
      @keyframes wa-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      @keyframes wa-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      @keyframes wa-progress { from { width: 0; } to { width: 100%; } }
      @keyframes wa-float-0 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-7px); } }
      @keyframes wa-float-1 { 0%,100% { transform: translateY(-4px); } 50% { transform: translateY(4px); } }
      @keyframes wa-float-2 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
      @keyframes wa-float-3 { 0%,100% { transform: translateY(-6px); } 50% { transform: translateY(2px); } }
      @keyframes wa-float-4 { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
      @keyframes wa-float-5 { 0%,100% { transform: translateY(-3px); } 50% { transform: translateY(5px); } }
    `}</style>
  );
}

// ── Shared components ─────────────────────────────────────────────

function SectionBadge({ children, color = C.blue }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 12,
        fontWeight: 700,
        color,
        background: color + '18',
        padding: '4px 12px',
        borderRadius: 100,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
      {children}
    </span>
  );
}

function SectionHeader({
  kicker,
  title,
  subtitle,
  center = false,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  const [ref, seen] = useReveal();
  const isMobile = React.useContext(MobileCtx);
  return (
    <div
      ref={ref}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity .6s, transform .6s',
        textAlign: center ? 'center' : 'left',
      }}
    >
      <SectionBadge>{kicker}</SectionBadge>
      <h2
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: isMobile ? 28 : 44,
          fontWeight: 800,
          color: C.navy,
          margin: '14px 0 0',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: isMobile ? 15 : 17,
            color: C.muted,
            lineHeight: 1.7,
            marginTop: 12,
            maxWidth: center ? 560 : 600,
            marginLeft: center ? 'auto' : 0,
            marginRight: center ? 'auto' : 0,
            marginBottom: 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ── Nav ───────────────────────────────────────────────────────────

function Nav() {
  const scrollY = useScrollY();
  const activeSection = useActiveSection();
  const isMobile = React.useContext(MobileCtx);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const elevated = scrollY > 20;

  const navLinks: [string, string][] = [
    ['Servicios', '#servicios'],
    ['Tecnología', '#stack'],
    ['Clientes', '#clientes'],
    ['Equipo', '#equipo'],
    ['Contacto', '#contacto'],
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: C.white,
        borderBottom: `1px solid ${elevated ? C.border : 'transparent'}`,
        boxShadow: elevated ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
        transition: 'border-color .2s, box-shadow .2s',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: isMobile ? '14px 16px' : '16px 32px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/images/brand.png"
            alt="We Are Solutions"
            style={{ height: isMobile ? 32 : 48, width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </a>

        {isMobile ? (
          <>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                marginLeft: 'auto',
                background: 'transparent',
                border: `1px solid ${C.border}`,
                color: C.navy,
                cursor: 'pointer',
                padding: '7px 8px',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            {menuOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: C.white,
                  borderBottom: `1px solid ${C.border}`,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                  zIndex: 100,
                  padding: '8px 0 16px',
                }}
              >
                {navLinks.map(([label, href]) => {
                  const isActive = `#${activeSection}` === href;
                  return (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '12px 20px',
                        color: isActive ? C.blue : C.slate,
                        textDecoration: 'none',
                        fontSize: 15,
                        fontWeight: isActive ? 700 : 500,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {label}
                    </a>
                  );
                })}
                <div style={{ padding: '8px 16px 0' }}>
                  <a
                    href="#contacto"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'block',
                      padding: '13px 20px',
                      background: C.blue,
                      color: C.white,
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: 14,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      borderRadius: 10,
                      textAlign: 'center',
                    }}
                  >
                    Habla con nosotros
                  </a>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <nav style={{ display: 'flex', gap: 2, marginLeft: 28 }}>
              {navLinks.map(([label, href]) => {
                const isActive = `#${activeSection}` === href;
                return (
                  <a
                    key={href}
                    href={href}
                    style={{
                      color: isActive ? C.blue : C.muted,
                      textDecoration: 'none',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 14,
                      fontWeight: isActive ? 700 : 500,
                      padding: '6px 12px',
                      borderRadius: 8,
                      background: isActive ? C.blueLight : 'transparent',
                      transition: 'color .15s, background .15s',
                    }}
                    onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.color = C.navy; e.currentTarget.style.background = C.bgSoft; } }}
                    onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.color = C.muted; e.currentTarget.style.background = 'transparent'; } }}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>
            <div style={{ marginLeft: 'auto' }}>
              <a
                href="#contacto"
                style={{
                  padding: '9px 20px',
                  background: C.blue,
                  color: C.white,
                  textDecoration: 'none',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  borderRadius: 10,
                  boxShadow: C.shadowBlue,
                  display: 'inline-block',
                  transition: 'background .15s, transform .15s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = C.blueDark; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = C.blue; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Habla con nosotros
              </a>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

// ── Hero ──────────────────────────────────────────────────────────

function HeroVisual() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
      {SERVICES.map((s, i) => (
        <div
          key={s.code}
          style={{
            background: C.white,
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            padding: '20px 18px',
            boxShadow: C.shadowMd,
            animation: `wa-float-${i} ${3 + i * 0.5}s ease-in-out infinite`,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: s.colorBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
            }}
          >
            <s.Icon size={20} color={s.color} strokeWidth={1.8} />
          </div>
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: C.navy,
              lineHeight: 1.3,
              marginBottom: 3,
            }}
          >
            {s.name}
          </div>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: C.muted }}>
            {s.shortDesc}
          </div>
        </div>
      ))}
    </div>
  );
}

function Hero() {
  const isMobile = React.useContext(MobileCtx);
  const [current, setCurrent] = React.useState(0);
  const [entering, setEntering] = React.useState(true);

  const changeTo = React.useCallback(
    (next: number) => {
      if (next === current) return;
      setEntering(false);
      setTimeout(() => { setCurrent(next); setEntering(true); }, 320);
    },
    [current],
  );

  React.useEffect(() => {
    const id = setTimeout(() => changeTo((current + 1) % HERO_SLIDES.length), 5000);
    return () => clearTimeout(id);
  }, [current, changeTo]);

  const slide = HERO_SLIDES[current];

  return (
    <section
      style={{
        position: 'relative',
        padding: isMobile ? '56px 16px 64px' : '88px 32px 104px',
        background: `linear-gradient(140deg, ${C.white} 0%, #F0F4FF 60%, #E8EEFF 100%)`,
        borderBottom: `1px solid ${C.border}`,
        overflow: 'hidden',
      }}
    >
      <div aria-hidden="true" style={{ position: 'absolute', top: -160, right: -160, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', bottom: -100, left: -100, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 48 : 80,
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div>
          <div
            style={{
              opacity: entering ? 1 : 0,
              transform: entering ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity .35s ease, transform .35s ease',
            }}
          >
            <SectionBadge color={C.blue}>{slide.badge}</SectionBadge>
            <h1
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: isMobile ? 38 : 64,
                fontWeight: 800,
                color: C.navy,
                margin: '20px 0 0',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
              }}
            >
              {slide.headline}
              <br />
              <span
                style={{
                  background: `linear-gradient(135deg, ${C.blue} 0%, #4F46E5 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {slide.accent}
              </span>
            </h1>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: isMobile ? 15 : 17,
                color: C.muted,
                lineHeight: 1.7,
                marginTop: 20,
                maxWidth: 520,
              }}
            >
              {slide.desc}
            </p>
          </div>

          <div style={{ height: 2, background: C.border, borderRadius: 1, marginTop: 32, overflow: 'hidden' }}>
            <div
              key={`prog-${current}`}
              style={{
                height: '100%',
                background: `linear-gradient(90deg, ${C.blue}, #4F46E5)`,
                borderRadius: 1,
                animation: 'wa-progress 5s linear forwards',
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <a
              href="#contacto"
              style={{
                padding: isMobile ? '13px 22px' : '14px 28px',
                background: C.blue,
                color: C.white,
                textDecoration: 'none',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 15,
                fontWeight: 700,
                borderRadius: 12,
                boxShadow: C.shadowBlue,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                transition: 'background .15s, transform .15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = C.blueDark; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = C.blue; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Agendar reunión <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#servicios"
              style={{
                padding: isMobile ? '13px 22px' : '14px 28px',
                background: C.white,
                color: C.navy,
                textDecoration: 'none',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                borderRadius: 12,
                border: `1.5px solid ${C.borderStrong}`,
                transition: 'border-color .15s, transform .15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.borderStrong; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Ver servicios
            </a>
          </div>

          <div style={{ display: 'flex', gap: 8, marginTop: 28, alignItems: 'center' }}>
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => changeTo(i)}
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === current ? C.blue : C.borderStrong,
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'width .3s, background .3s',
                  outline: 'none',
                }}
              />
            ))}
            <span style={{ marginLeft: 4, fontSize: 12, color: C.mutedLight, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
              {current + 1}/{HERO_SLIDES.length}
            </span>
          </div>
        </div>

        {!isMobile && <HeroVisual />}
      </div>
    </section>
  );
}

// ── Partners ──────────────────────────────────────────────────────

function Partners() {
  const [ref, seen] = useReveal();
  const isMobile = React.useContext(MobileCtx);

  return (
    <section style={{ padding: isMobile ? '48px 16px' : '80px 32px', background: C.white, borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          kicker="Partners Tecnológicos"
          title="Partners oficiales de los mejores fabricantes"
          subtitle="Acceso directo a las marcas líderes de la industria. Soporte de primer nivel, certificaciones activas y precios exclusivos para nuestros clientes."
        />
        <div
          ref={ref}
          style={{
            marginTop: isMobile ? 32 : 48,
            background: C.white,
            border: `1px solid ${C.border}`,
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: C.shadowMd,
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '220px 1fr',
            opacity: seen ? 1 : 0,
            transform: seen ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity .6s, transform .6s',
          }}
        >
          <div
            style={{
              background: C.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 36px',
              borderRight: isMobile ? 'none' : `1px solid ${C.border}`,
              borderBottom: isMobile ? `1px solid ${C.border}` : 'none',
            }}
          >
            <img src="/img.png" alt="WatchGuard Technologies" style={{ maxWidth: 160, maxHeight: 64, objectFit: 'contain' }} />
          </div>
          <div style={{ padding: isMobile ? '28px 24px' : '40px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 700, color: C.blue, background: C.blueLight, padding: '4px 12px', borderRadius: 100, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                ● Partner Oficial
              </span>
              <span style={{ fontSize: 12, color: C.muted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Ciberseguridad · Redes</span>
            </div>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: isMobile ? 20 : 26, fontWeight: 800, color: C.navy, margin: 0 }}>
              WatchGuard Technologies
            </h3>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: isMobile ? 14 : 15, color: C.muted, lineHeight: 1.65, margin: 0, maxWidth: 540 }}>
              Como partners oficiales de WatchGuard, implementamos y gestionamos sus soluciones de seguridad perimetral: firewalls, protección de endpoints y detección de amenazas avanzadas. Acceso a soporte técnico de primer nivel y precios exclusivos para proyectos en Chile y LATAM.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Firebox', 'Endpoint Security', 'AuthPoint MFA', 'DNSWatchGO'].map((tag) => (
                <span key={tag} style={{ fontSize: 12, fontWeight: 600, color: C.slate, background: C.bgSoft, padding: '4px 10px', borderRadius: 6, border: `1px solid ${C.border}`, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Servicios ─────────────────────────────────────────────────────

function ServiceCard({ s, index, seen }: { s: Service; index: number; seen: boolean }) {
  const [hover, setHover] = React.useState(false);
  const isMobile = React.useContext(MobileCtx);
  const delay = index * 80;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: C.white,
        border: `1.5px solid ${hover ? s.color + '50' : C.border}`,
        borderRadius: 16,
        padding: isMobile ? '24px 20px' : '32px 28px',
        cursor: 'pointer',
        transition: `all .2s, opacity .6s ${delay}ms, transform .6s ${delay}ms`,
        opacity: seen ? 1 : 0,
        transform: seen ? 'translateY(0)' : 'translateY(24px)',
        boxShadow: hover ? `0 8px 28px ${s.color}18, ${C.shadowMd}` : C.shadow,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          background: hover ? s.colorBg : C.bgSoft,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
          transition: 'background .2s',
          flexShrink: 0,
        }}
      >
        <s.Icon size={26} color={hover ? s.color : C.muted} strokeWidth={1.8} />
      </div>
      <h3
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: isMobile ? 19 : 21,
          fontWeight: 800,
          color: C.navy,
          margin: '0 0 10px',
          letterSpacing: '-0.01em',
        }}
      >
        {s.name}
      </h3>
      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 14,
          color: C.muted,
          lineHeight: 1.7,
          margin: '0 0 20px',
          flex: 1,
        }}
      >
        {s.desc}
      </p>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          fontSize: 13,
          fontWeight: 700,
          color: hover ? s.color : C.mutedLight,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          transition: 'color .2s',
        }}
      >
        Saber más <ArrowRight size={14} strokeWidth={2.5} />
      </div>
    </div>
  );
}

function Servicios() {
  const [gridRef, gridSeen] = useReveal(0.05);
  const isMobile = React.useContext(MobileCtx);

  return (
    <section id="servicios" style={{ padding: isMobile ? '60px 16px' : '100px 32px', background: C.bg, borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          kicker="Servicios"
          title="Lo que hacemos por tu empresa"
          subtitle="Soluciones tecnológicas completas. Desde proteger tu empresa hasta construir el software que la hace crecer."
        />
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: 20,
            marginTop: isMobile ? 36 : 56,
          }}
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.code} s={s} index={i} seen={gridSeen} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Stack ─────────────────────────────────────────────────────────

function Stack() {
  const [ref, seen] = useReveal(0.05);
  const isMobile = React.useContext(MobileCtx);

  const grouped = Object.entries(CAT_CONFIG).map(([key, cfg]) => ({
    key,
    ...cfg,
    techs: TECH.filter((t) => t.cat === key),
  }));

  return (
    <section id="stack" style={{ padding: isMobile ? '60px 16px' : '100px 32px', background: C.white, borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          kicker="Tecnología"
          title="Herramientas que usamos cada día"
          subtitle="Trabajamos con las tecnologías más sólidas y confiables del mercado. Sin modas pasajeras, solo lo que funciona de verdad."
        />
        <div
          ref={ref}
          style={{
            marginTop: isMobile ? 36 : 56,
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)',
            gap: 20,
            opacity: seen ? 1 : 0,
            transform: seen ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity .6s, transform .6s',
          }}
        >
          {grouped.map(({ key, label, color, bg, techs }) => (
            <div
              key={key}
              style={{
                background: C.white,
                border: `1px solid ${C.border}`,
                borderRadius: 16,
                padding: '22px 20px',
                boxShadow: C.shadow,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: color, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700, color: C.slate, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                  {label}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {techs.map((t) => (
                  <span
                    key={t.name}
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color,
                      background: bg,
                      padding: '5px 12px',
                      borderRadius: 8,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Clientes ──────────────────────────────────────────────────────

function Clientes() {
  const [ref, seen] = useReveal(0.05);
  const isMobile = React.useContext(MobileCtx);
  const all = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clientes" style={{ padding: isMobile ? '60px 0' : '100px 0', background: C.bg, borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 16px' : '0 32px' }}>
        <SectionHeader
          kicker="Clientes"
          title="Empresas que confían en nosotros"
          subtitle="Trabajamos con empresas que no pueden darse el lujo de fallar. Algunos clientes llevan más de una década eligiéndonos."
        />
      </div>

      <div
        style={{
          marginTop: isMobile ? 36 : 56,
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
          padding: '22px 0',
          overflow: 'hidden',
          background: C.white,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 60,
            animation: 'wa-marquee 28s linear infinite',
            whiteSpace: 'nowrap',
            width: 'max-content',
          }}
        >
          {all.map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: C.blue, flexShrink: 0 }} />
              <span style={{ color: C.navy, fontSize: isMobile ? 16 : 20, fontWeight: 800 }}>{c.name}</span>
              <span style={{ color: C.mutedLight, fontSize: 13 }}>· {c.sector}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={ref}
        style={{
          maxWidth: 1280,
          margin: isMobile ? '32px auto 0' : '48px auto 0',
          padding: isMobile ? '0 16px' : '0 32px',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(5, 1fr)',
          gap: 16,
        }}
      >
        {CLIENTS.map((c, i) => (
          <div
            key={c.name}
            style={{
              background: C.white,
              border: `1px solid ${C.border}`,
              borderRadius: 16,
              padding: '24px 18px',
              boxShadow: C.shadow,
              opacity: seen ? 1 : 0,
              transform: seen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity .6s ${i * 80}ms, transform .6s ${i * 80}ms`,
            }}
          >
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 16, fontWeight: 800, color: C.navy, marginBottom: 4 }}>
              {c.name}
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.blue, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 10 }}>
              {c.sector}
            </div>
            <div style={{ fontSize: 12, color: C.muted, fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.5, marginBottom: 10 }}>
              {c.note}
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.green, background: '#ECFDF5', padding: '3px 8px', borderRadius: 6, fontFamily: "'Plus Jakarta Sans', sans-serif", display: 'inline-block' }}>
              {c.years}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Stats ─────────────────────────────────────────────────────────

function Stats() {
  const [ref, seen] = useReveal(0.1);
  const isMobile = React.useContext(MobileCtx);

  const statGradients = [
    ['#2563EB', '#4F46E5'],
    ['#059669', '#0284C7'],
    ['#7C3AED', '#2563EB'],
    ['#0284C7', '#059669'],
    ['#D97706', '#DC2626'],
    ['#059669', '#4F46E5'],
  ];

  return (
    <section style={{ padding: isMobile ? '60px 16px' : '100px 32px', background: C.navy, borderBottom: `1px solid rgba(255,255,255,0.08)` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 36 : 56 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#93C5FD', background: 'rgba(147,197,253,0.12)', padding: '4px 12px', borderRadius: 100, letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#93C5FD' }} />
            Nuestros números
          </span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: isMobile ? 28 : 44, fontWeight: 800, color: C.white, margin: '14px 0 0', letterSpacing: '-0.02em' }}>
            Resultados que hablan por sí solos
          </h2>
        </div>
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {STATS.map((s, i) => {
            const [from, to] = statGradients[i % statGradients.length];
            return (
              <div
                key={i}
                style={{
                  background: `linear-gradient(135deg, ${from}25 0%, ${to}12 100%)`,
                  border: `1px solid ${from}35`,
                  borderRadius: 16,
                  padding: isMobile ? '28px 20px' : '40px 32px',
                  opacity: seen ? 1 : 0,
                  transform: seen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity .6s ${i * 80}ms, transform .6s ${i * 80}ms`,
                }}
              >
                <s.Icon size={isMobile ? 18 : 22} color={from} strokeWidth={1.8} style={{ marginBottom: 12, display: 'block' }} />
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: isMobile ? 44 : 58, color: C.white, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 8 }}>
                  {s.val}
                </div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: isMobile ? 12 : 14, color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Equipo ────────────────────────────────────────────────────────

function Equipo() {
  const [ref, seen] = useReveal(0.05);
  const isMobile = React.useContext(MobileCtx);
  const avatarColors = [C.blue, C.green, C.purple, C.amber];

  return (
    <section id="equipo" style={{ padding: isMobile ? '60px 16px' : '100px 32px', background: C.white, borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          kicker="Equipo"
          title="Un equipo que se queda contigo"
          subtitle="No entregamos proyectos y desaparecemos. Nos integramos a tu operación, aprendemos tu negocio y crecemos juntos. AFP Habitat lleva 8 años eligiéndonos."
        />
        <div
          ref={ref}
          style={{
            marginTop: isMobile ? 36 : 56,
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: 20,
          }}
        >
          {TEAM.map((t, i) => {
            const color = avatarColors[i % avatarColors.length];
            return (
              <div
                key={i}
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  padding: isMobile ? '24px 18px' : '32px 24px',
                  boxShadow: C.shadow,
                  opacity: seen ? 1 : 0,
                  transform: seen ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity .6s ${i * 100}ms, transform .6s ${i * 100}ms`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: color + '18',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 800,
                    color,
                    letterSpacing: '0.02em',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: isMobile ? 15 : 18, fontWeight: 800, color: C.navy, marginBottom: 5 }}>
                    {t.name}
                  </div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: C.muted, lineHeight: 1.5, marginBottom: 10 }}>
                    {t.role}
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color, background: color + '15', padding: '3px 10px', borderRadius: 6, fontFamily: "'Plus Jakarta Sans', sans-serif", display: 'inline-block' }}>
                    {t.count}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Contacto ──────────────────────────────────────────────────────

function Field({
  label, value, onChange, placeholder, multiline = false, type = 'text',
}: {
  label: string; value: string; onChange: (val: string) => void;
  placeholder: string; multiline?: boolean; type?: string;
}) {
  const [focus, setFocus] = React.useState(false);
  const sharedStyle: React.CSSProperties = {
    width: '100%',
    background: C.bg,
    border: `1.5px solid ${focus ? C.blue : C.border}`,
    borderRadius: 10,
    color: C.navy,
    padding: '12px 14px',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 14,
    outline: 'none',
    transition: 'border-color .15s, box-shadow .15s',
    resize: 'vertical',
    boxSizing: 'border-box',
    boxShadow: focus ? `0 0 0 3px ${C.blue}18` : 'none',
  };
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: C.slate, marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {label}
      </label>
      {multiline ? (
        <textarea rows={4} value={value} onChange={(e) => onChange(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} placeholder={placeholder} style={sharedStyle} />
      ) : (
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} placeholder={placeholder} style={sharedStyle} />
      )}
    </div>
  );
}

function Contacto() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const isMobile = React.useContext(MobileCtx);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ name, email, message: msg }).toString(),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al enviar');
      setSent(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'No pudimos enviar el mensaje. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { Icon: Mail,        label: 'hola@wearesolutions.cl', color: C.blue },
    { Icon: Phone,       label: '+56 9 77176396',          color: C.green },
    { Icon: MapPin,      label: 'Santiago, Chile',          color: C.red },
    { Icon: ExternalLink, label: 'LinkedIn · /we-are-solutions', color: C.purple },
  ] as { Icon: LucideIcon; label: string; color: string }[];

  return (
    <section id="contacto" style={{ padding: isMobile ? '60px 16px' : '100px 32px', background: C.bg, borderBottom: `1px solid ${C.border}` }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 48 : 80,
          alignItems: 'start',
        }}
      >
        <div>
          <SectionHeader
            kicker="Contacto"
            title="¿Conversamos sobre tu proyecto?"
            subtitle="Cuéntanos qué necesitas resolver. Respondemos en menos de 24 horas hábiles."
          />
          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {contactInfo.map(({ Icon, label, color }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={18} color={color} strokeWidth={1.8} />
                </div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: C.slate, fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            background: C.white,
            border: `1.5px solid ${C.border}`,
            borderRadius: 20,
            padding: isMobile ? '28px 24px' : '40px 36px',
            boxShadow: C.shadowLg,
          }}
        >
          <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 22, fontWeight: 800, color: C.navy, marginBottom: 24 }}>
            Escríbenos
          </div>

          {sent ? (
            <div style={{ padding: '32px 0', textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <CheckCircle2 size={32} color={C.green} strokeWidth={1.8} />
              </div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 22, fontWeight: 800, color: C.navy, marginBottom: 8 }}>¡Mensaje enviado!</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: C.muted, lineHeight: 1.6 }}>
                Recibimos tu consulta.<br />Te contactamos en menos de 24 horas hábiles.
              </div>
            </div>
          ) : (
            <>
              <Field label="Tu nombre" value={name} onChange={setName} placeholder="Juan Pérez" />
              <Field label="Correo electrónico" value={email} onChange={setEmail} placeholder="juan@empresa.com" type="email" />
              <Field label="¿En qué te podemos ayudar?" value={msg} onChange={setMsg} placeholder="Cuéntanos qué necesitas..." multiline />
              {error && (
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: C.red, marginBottom: 12, padding: '10px 14px', background: '#FEF2F2', borderRadius: 8, border: '1px solid #FCA5A5' }}>
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: loading ? C.blueDark : C.blue,
                  color: C.white,
                  border: 'none',
                  borderRadius: 12,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  marginTop: 8,
                  boxShadow: loading ? 'none' : C.shadowBlue,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  opacity: loading ? 0.7 : 1,
                  transition: 'opacity .15s, background .15s',
                }}
              >
                <Send size={16} strokeWidth={2} />
                {loading ? 'Enviando…' : 'Enviar mensaje'}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────

function Footer() {
  const isMobile = React.useContext(MobileCtx);
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: C.navy, padding: isMobile ? '48px 16px 32px' : '64px 32px 40px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr',
            gap: isMobile ? 36 : 60,
            marginBottom: 48,
          }}
        >
          <div>
            <div style={{ marginBottom: 14 }}>
              <div style={{ display: 'inline-block', background: C.white, borderRadius: 12, padding: '10px 18px' }}>
                <img
                  src="/images/brand.png"
                  alt="We Are Solutions"
                  style={{ height: isMobile ? 64 : 128, width: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: 320, margin: 0 }}>
              Empresa de tecnología chilena especializada en desarrollo de software, ciberseguridad y consultoría TI para empresas que quieren crecer.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 16 }}>
              Servicios
            </div>
            {SERVICES.map((s) => (
              <a key={s.code} href="#servicios" style={{ display: 'block', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: 10, transition: 'color .15s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                {s.name}
              </a>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 16 }}>
              Contacto
            </div>
            {['hola@wearesolutions.cl', '+56 9 77176396', 'Santiago, Chile'].map((item) => (
              <div key={item} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 10 }}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            © {year} We Are Solutions · Todos los derechos reservados
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: C.green, display: 'inline-block', animation: 'wa-pulse 2s ease-in-out infinite' }} />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
              Todos los sistemas operativos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Landing ───────────────────────────────────────────────────────

export default function Landing({ variation = 'mono' }: { variation?: string }) {
  void (VARS[variation] ?? VARS.mono);
  const isMobile = useIsMobile();
  return (
    <MobileCtx.Provider value={isMobile}>
      <GlobalStyles />
      <div style={{ background: C.bg, color: C.navy, fontFamily: "'Plus Jakarta Sans', sans-serif", minHeight: '100%' }}>
        <Nav />
        <Hero />
        <Partners />
        <Servicios />
        <Stack />
        <Clientes />
        <Stats />
        <Equipo />
        <Contacto />
        <Footer />
      </div>
    </MobileCtx.Provider>
  );
}
