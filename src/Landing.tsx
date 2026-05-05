import React from 'react';

// ── Types ─────────────────────────────────────────────────────────

interface Service {
  code: string;
  name: string;
  desc: string;
  cmd: string;
  tags: string[];
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
}

interface Stat {
  val: string;
  label: string;
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

interface HistoryItem {
  type: 'system' | 'input' | 'out' | 'err';
  text: string;
}

// ── Data ─────────────────────────────────────────────────────────

const SERVICES: Service[] = [
  {
    code: '01',
    name: 'Ciberseguridad',
    desc: 'Auditorías, pentesting, hardening, gestión de vulnerabilidades y respuesta a incidentes.',
    cmd: 'scan --target=infra --depth=full',
    tags: ['Pentesting', 'SOC', 'ISO 27001', 'Hardening'],
  },
  {
    code: '02',
    name: 'Desarrollo a Medida',
    desc: 'Apps web y móviles construidas con stacks modernos. De producto a la entrega.',
    cmd: 'build --type=app --stack=react',
    tags: ['React', 'React Native', 'Spring Boot', 'Angular'],
  },
  {
    code: '03',
    name: 'Cloud & DevOps',
    desc: 'Migraciones, arquitectura cloud-native y automatización de pipelines en AWS.',
    cmd: 'deploy --provider=aws --strategy=blue-green',
    tags: ['AWS', 'IaC', 'Kubernetes', 'CI/CD'],
  },
  {
    code: '04',
    name: 'SaaS',
    desc: 'Productos SaaS escalables: multi-tenant, billing, observabilidad y compliance.',
    cmd: 'init --product=saas --multi-tenant=true',
    tags: ['Multi-tenant', 'Billing', 'Observability'],
  },
  {
    code: '05',
    name: 'Outsourcing',
    desc: 'Equipos dedicados que se integran a tu operación. Senior, ágiles, en tu zona horaria.',
    cmd: 'team --size=flex --timezone=LATAM',
    tags: ['Squads', 'Staff Aug.', 'Nearshore'],
  },
  {
    code: '06',
    name: 'Consultoría TI',
    desc: 'Estrategia tecnológica, modernización de legacy y transformación digital end-to-end.',
    cmd: 'advise --scope=enterprise',
    tags: ['Strategy', 'Legacy', 'Roadmap'],
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
  { name: 'Endura APP', sector: 'Mobile', years: 'Producto', note: 'App fitness multiplataforma' },
  { name: 'GrainLog', sector: 'AgriTech', years: 'Producto', note: 'Logística de granos' },
  { name: '2EC', sector: 'E-commerce', years: 'Cliente activo', note: 'Integraciones backend' },
];

const TEAM: TeamMember[] = [
  { name: 'Equipo Senior', role: '+15 años promedio', count: '12 ingenieros' },
  { name: 'Cloud & SecOps', role: 'Certificados AWS + ISO', count: '6 especialistas' },
  { name: 'Producto', role: 'Diseño + PM', count: '4 personas' },
  { name: 'Outsourcing', role: 'Squads dedicados', count: '20+ asignados' },
];

const STATS: Stat[] = [
  { val: '12+', label: 'años en la industria' },
  { val: '40+', label: 'proyectos entregados' },
  { val: '8', label: 'años con AFP Habitat' },
  { val: '99.9%', label: 'uptime promedio' },
  { val: '24/7', label: 'soporte SOC' },
  { val: '0', label: 'brechas en clientes 2024' },
];

// ── Variation tokens ──────────────────────────────────────────────

const VARS: Record<string, Omit<VarConfig, 'variation'>> = {
  phosphor: {
    bg: '#020a05',
    bgSoft: '#04140a',
    panel: '#06180d',
    border: '#0f3a22',
    borderStrong: '#1a5c34',
    text: '#9dffb0',
    textSoft: '#4a9d68',
    textMuted: '#2d6b42',
    accent: '#00ff88',
    accentDim: '#00cc6a',
    warn: '#ffeb3b',
    danger: '#ff4444',
    glow: '0 0 20px rgba(0,255,136,0.15)',
    glowStrong: '0 0 30px rgba(0,255,136,0.35)',
    scanline: true,
  },
  mono: {
    bg: '#0a0a0a',
    bgSoft: '#111111',
    panel: '#141414',
    border: '#262626',
    borderStrong: '#3a3a3a',
    text: '#e8e8e8',
    textSoft: '#a3a3a3',
    textMuted: '#525252',
    accent: '#d4ff3a',
    accentDim: '#a3cc1f',
    warn: '#ffeb3b',
    danger: '#ff5e3a',
    glow: '0 0 0 1px rgba(212,255,58,0.1)',
    glowStrong: '0 0 0 1px rgba(212,255,58,0.3)',
    scanline: false,
  },
};

// ── Hooks ─────────────────────────────────────────────────────────

function useTyping(text: string, speed = 35, startDelay = 0): [string, boolean] {
  const [out, setOut] = React.useState('');
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    setOut('');
    setDone(false);
    let i = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        i++;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(startId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);
  return [out, done];
}

function useReveal(threshold = 0.15) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

function useTimeNow(): Date {
  const [t, setT] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
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

// ── Primitive components ──────────────────────────────────────────

function Cursor({ v, size = '1em' }: { v: VarConfig; size?: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        width: '0.55em',
        height: size,
        background: v.accent,
        marginLeft: 2,
        verticalAlign: 'text-bottom',
        animation: 'wa-blink 1s steps(2) infinite',
        boxShadow: v.variation === 'phosphor' ? `0 0 8px ${v.accent}` : 'none',
      }}
    />
  );
}

function ChipTag({ children, v }: { children: React.ReactNode; v: VarConfig }) {
  return (
    <span
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 11,
        padding: '3px 8px',
        border: `1px solid ${v.border}`,
        color: v.textSoft,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </span>
  );
}

function Glitch({
  children,
  v,
  as,
  style,
}: {
  children: React.ReactNode;
  v: VarConfig;
  as?: React.ElementType;
  style?: React.CSSProperties;
}) {
  const [hover, setHover] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = as || 'span';
  return (
    <Tag
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', display: 'inline-block', ...style }}
    >
      <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
      {hover && (
        <>
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              color: v.accent,
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
              transform: 'translate(-2px, 0)',
              opacity: 0.85,
              mixBlendMode: 'screen',
              animation: 'wa-glitch1 .35s steps(3) infinite',
              pointerEvents: 'none',
            }}
          >
            {children}
          </span>
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              color: v.danger,
              clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
              transform: 'translate(2px, 0)',
              opacity: 0.7,
              mixBlendMode: 'screen',
              animation: 'wa-glitch2 .35s steps(3) infinite',
              pointerEvents: 'none',
            }}
          >
            {children}
          </span>
        </>
      )}
    </Tag>
  );
}

function SectionHeader({
  v,
  kicker,
  title,
  subtitle,
}: {
  v: VarConfig;
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  const [ref, seen] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity .6s, transform .6s',
      }}
    >
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 12,
          color: v.accent,
          letterSpacing: '0.2em',
          marginBottom: 16,
        }}
      >
        {kicker}
      </div>
      <h2
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 48,
          fontWeight: 500,
          color: v.text,
          margin: 0,
          letterSpacing: '-0.02em',
          maxWidth: 800,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 16,
            color: v.textSoft,
            lineHeight: 1.6,
            marginTop: 16,
            maxWidth: 640,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ── Nav ───────────────────────────────────────────────────────────

function Nav({ v }: { v: VarConfig }) {
  const t = useTimeNow();
  const time = t.toTimeString().slice(0, 8);
  const activeSection = useActiveSection();
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(8px)',
        background: v.bg + 'ee',
        borderBottom: `1px solid ${v.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '14px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 13,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              width: 10,
              height: 10,
              background: v.accent,
              borderRadius: '50%',
              boxShadow: v.variation === 'phosphor' ? `0 0 10px ${v.accent}` : 'none',
              animation: 'wa-pulse 2s ease-in-out infinite',
            }}
          />
          <span style={{ color: v.text, fontWeight: 600, letterSpacing: '0.02em' }}>
            we_are_solutions
          </span>
          <span style={{ color: v.textMuted }}>v.2026</span>
        </div>
        <nav style={{ display: 'flex', gap: 24, marginLeft: 32 }}>
          {(
            [
              ['servicios', '#servicios'],
              ['stack', '#stack'],
              ['clientes', '#clientes'],
              ['equipo', '#equipo'],
              ['contacto', '#contacto'],
            ] as [string, string][]
          ).map(([label, href]) => {
            const isActive = `#${activeSection}` === href;
            return (
              <a
                key={href}
                href={href}
                style={{
                  color: isActive ? v.accent : v.textSoft,
                  textDecoration: 'none',
                  transition: 'color .15s',
                  position: 'relative',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = v.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? v.accent : v.textSoft)}
              >
                ./{label}
                {isActive && (
                  <span style={{ position: 'absolute', bottom: -4, left: 0, right: 0, height: 1, background: v.accent }} />
                )}
              </a>
            );
          })}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ color: v.textMuted }}>SCL · {time}</span>
          <a
            href="#contacto"
            style={{
              padding: '8px 14px',
              border: `1px solid ${v.accent}`,
              color: v.accent,
              textDecoration: 'none',
              fontSize: 12,
              letterSpacing: '0.05em',
              transition: 'all .15s',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = v.accent;
              e.currentTarget.style.color = v.bg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = v.accent;
            }}
          >
            [ INICIAR_CONTACTO ]
          </a>
        </div>
      </div>
    </header>
  );
}

// ── Hero ──────────────────────────────────────────────────────────

function TerminalPanel({ v }: { v: VarConfig }) {
  const [history, setHistory] = React.useState<HistoryItem[]>([
    { type: 'system', text: 'we_are_solutions terminal · v2.0.26' },
    { type: 'system', text: 'type `help` for available commands.' },
    { type: 'system', text: '' },
  ]);
  const [input, setInput] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const commands: Record<string, (() => string[]) | 'CLEAR'> = {
    help: () => [
      'available commands:',
      '  about        →  who we are',
      '  services     →  list of services',
      '  stack        →  technologies',
      '  clients      →  client portfolio',
      '  contact      →  get in touch',
      '  whoami       →  visitor info',
      '  clear        →  clear screen',
    ],
    about: () => [
      'We Are Solutions — Consultora TI & Ciberseguridad',
      '12+ años entregando software crítico en producción.',
      'HQ: Santiago, Chile  ·  Equipos: LATAM',
    ],
    services: () => SERVICES.map((s) => `  [${s.code}] ${s.name.padEnd(24)} ${s.tags[0]}`),
    stack: () => [
      'primary stack:',
      '  cloud      →  aws · k8s · terraform · docker',
      '  backend    →  java · spring boot · node · python',
      '  frontend   →  react · angular · typescript',
      '  mobile     →  react native',
    ],
    clients: () => CLIENTS.map((c) => `  ${c.name.padEnd(18)} ${c.sector.padEnd(12)} ${c.years}`),
    contact: () => ['📧 hola@wearesolutions.cl', '📞 +56 2 0000 0000', '🌐 wearesolutions.cl'],
    whoami: () => [
      `visitor@${window.location.hostname || 'localhost'}`,
      `session: ${Math.random().toString(36).slice(2, 10)}`,
      `permissions: read · explore`,
    ],
    clear: 'CLEAR',
  };

  const submit = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const next: HistoryItem[] = [...history, { type: 'input', text: raw }];
    if (!cmd) { setHistory(next); return; }
    const handler = commands[cmd];
    if (handler === 'CLEAR') { setHistory([{ type: 'system', text: '' }]); return; }
    if (typeof handler === 'function') {
      handler().forEach((l) => next.push({ type: 'out', text: l }));
    } else {
      next.push({ type: 'err', text: `command not found: ${cmd}` });
      next.push({ type: 'out', text: 'type `help` for available commands.' });
    }
    next.push({ type: 'out', text: '' });
    setHistory(next);
  };

  return (
    <div
      style={{
        background: v.panel,
        border: `1px solid ${v.borderStrong}`,
        boxShadow: v.glow,
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 13,
        height: 460,
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={() => inputRef.current?.focus()}
    >
      <div
        style={{
          padding: '10px 14px',
          borderBottom: `1px solid ${v.border}`,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontSize: 11,
          color: v.textMuted,
        }}
      >
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: v.danger }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: v.warn }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: v.accent }} />
        </div>
        <span style={{ marginLeft: 'auto', letterSpacing: '0.1em' }}>
          ~/wearesolutions — bash — 80×24
        </span>
      </div>
      <div
        ref={scrollRef}
        style={{ flex: 1, padding: '14px', overflowY: 'auto', color: v.textSoft, lineHeight: 1.55 }}
      >
        {history.map((h, i) => {
          if (h.type === 'input')
            return (
              <div key={i} style={{ color: v.text }}>
                <span style={{ color: v.accent }}>$</span> {h.text}
              </div>
            );
          if (h.type === 'err')
            return <div key={i} style={{ color: v.danger }}>{h.text}</div>;
          if (h.type === 'system')
            return <div key={i} style={{ color: v.textMuted }}>{h.text}</div>;
          return <div key={i} style={{ whiteSpace: 'pre' }}>{h.text}</div>;
        })}
        <div style={{ display: 'flex', alignItems: 'center', color: v.text }}>
          <span style={{ color: v.accent, marginRight: 8 }}>$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') { submit(input); setInput(''); }
            }}
            placeholder="type a command..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: v.text,
              fontFamily: 'inherit',
              fontSize: 'inherit',
              caretColor: v.accent,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Hero({ v }: { v: VarConfig }) {
  const [line1] = useTyping('> initializing we_are_solutions...', 28, 200);
  const [line2] = useTyping('> auth: client@root  status: AUTHENTICATED', 22, 1200);
  const [line3] = useTyping('> loading consultoria/cyber/dev...', 24, 2400);
  const [line4, line4Done] = useTyping('> READY.', 50, 3400);
  const scrollY = useScrollY();

  return (
    <section
      style={{
        position: 'relative',
        padding: '80px 32px 120px',
        borderBottom: `1px solid ${v.border}`,
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-80px',
          left: 0,
          right: 0,
          bottom: '-80px',
          backgroundImage: `linear-gradient(${v.border} 1px, transparent 1px), linear-gradient(90deg, ${v.border} 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          opacity: 0.4,
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          transform: `translateY(${scrollY * 0.3}px)`,
          willChange: 'transform',
        }}
      />
      {v.scanline && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(0,255,136,0.025) 0, rgba(0,255,136,0.025) 1px, transparent 1px, transparent 3px)',
            pointerEvents: 'none',
          }}
        />
      )}
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 13,
            color: v.textSoft,
            marginBottom: 48,
            lineHeight: 1.9,
          }}
        >
          <div>{line1}</div>
          <div>{line2}</div>
          <div>{line3}</div>
          <div style={{ color: v.accent }}>
            {line4}
            {line4Done && <Cursor v={v} />}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12,
                color: v.textMuted,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: 24,
              }}
            >
              [ consultora · ciberseguridad · ingeniería ]
            </div>
            <h1
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 72,
                lineHeight: 1.05,
                fontWeight: 500,
                color: v.text,
                margin: 0,
                letterSpacing: '-0.02em',
                textShadow: v.variation === 'phosphor' ? '0 0 30px rgba(0,255,136,0.25)' : 'none',
              }}
            >
              Construimos
              <br />
              <Glitch v={v} as="span" style={{ color: v.accent }}>
                software seguro
              </Glitch>
              <br />
              que no se cae.
            </h1>
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 16,
                color: v.textSoft,
                lineHeight: 1.7,
                marginTop: 32,
                maxWidth: 520,
              }}
            >
              Somos una consultora de tecnología y ciberseguridad. Desarrollamos productos,
              blindamos infraestructura y operamos squads dedicados para empresas que no pueden
              permitirse fallar.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 40 }}>
              <a
                href="#contacto"
                style={{
                  padding: '14px 24px',
                  background: v.accent,
                  color: v.bg,
                  textDecoration: 'none',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  border: `1px solid ${v.accent}`,
                  boxShadow: v.glowStrong,
                }}
              >
                ./agendar_reunion.sh →
              </a>
              <a
                href="#servicios"
                style={{
                  padding: '14px 24px',
                  background: 'transparent',
                  color: v.text,
                  textDecoration: 'none',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 13,
                  letterSpacing: '0.05em',
                  border: `1px solid ${v.borderStrong}`,
                }}
              >
                cat servicios.md
              </a>
            </div>
          </div>
          <TerminalPanel v={v} />
        </div>
      </div>
    </section>
  );
}

// ── Servicios ─────────────────────────────────────────────────────

function ServiceCard({ v, s, index, seen }: { v: VarConfig; s: Service; index: number; seen: boolean }) {
  const [hover, setHover] = React.useState(false);
  const col = index % 3;
  const row = Math.floor(index / 3);
  const delay = index * 80;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '32px 28px 36px',
        borderRight: col < 2 ? `1px solid ${v.border}` : 'none',
        borderBottom: row === 0 ? `1px solid ${v.border}` : 'none',
        background: hover ? v.bgSoft : 'transparent',
        position: 'relative',
        cursor: 'pointer',
        transition: `background .2s, opacity .6s ${delay}ms, transform .6s ${delay}ms`,
        minHeight: 320,
        display: 'flex',
        flexDirection: 'column',
        opacity: seen ? 1 : 0,
        transform: seen ? 'translateY(0)' : 'translateY(32px)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: v.textMuted, letterSpacing: '0.1em' }}>
          [{s.code}]
        </span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: hover ? v.accent : v.textMuted, transition: 'color .15s' }}>
          {hover ? '→ explore' : '·····'}
        </span>
      </div>
      <h3 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 26, fontWeight: 500, color: v.text, margin: '0 0 16px', letterSpacing: '-0.01em' }}>
        {s.name}
      </h3>
      <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 14, color: v.textSoft, lineHeight: 1.65, margin: '0 0 24px', flex: 1 }}>
        {s.desc}
      </p>
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11,
          color: hover ? v.accent : v.textMuted,
          marginBottom: 16,
          padding: '8px 10px',
          background: v.bg,
          border: `1px dashed ${hover ? v.accent : v.border}`,
          transition: 'all .15s',
        }}
      >
        $ {s.cmd}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {s.tags.map((tag) => (
          <ChipTag key={tag} v={v}>{tag}</ChipTag>
        ))}
      </div>
    </div>
  );
}

function Servicios({ v }: { v: VarConfig }) {
  const [gridRef, gridSeen] = useReveal(0.05);
  return (
    <section id="servicios" style={{ padding: '100px 32px', borderBottom: `1px solid ${v.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          v={v}
          kicker="// SERVICIOS · 06"
          title="Lo que hacemos"
          subtitle="Servicios end-to-end. Desde la primera línea de código hasta el incidente de las 3 AM."
        />
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            border: `1px solid ${v.border}`,
            marginTop: 60,
          }}
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.code} v={v} s={s} index={i} seen={gridSeen} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Stack ─────────────────────────────────────────────────────────

function TechCell({ v, t, i, total, seen }: { v: VarConfig; t: Tech; i: number; total: number; seen: boolean }) {
  const [hover, setHover] = React.useState(false);
  const col = i % 4;
  const row = Math.floor(i / 4);
  const lastRow = row === Math.floor((total - 1) / 4);
  const delay = i * 40;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '28px 20px',
        borderRight: col < 3 ? `1px solid ${v.border}` : 'none',
        borderBottom: !lastRow ? `1px solid ${v.border}` : 'none',
        background: hover ? v.bg : 'transparent',
        position: 'relative',
        cursor: 'default',
        minHeight: 110,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: `background .15s, opacity .5s ${delay}ms, transform .5s ${delay}ms`,
        opacity: seen ? 1 : 0,
        transform: seen ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 18, color: hover ? v.accent : v.text, fontWeight: 500, transition: 'color .15s' }}>
        {t.name}
      </div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: v.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 8 }}>
        ./{t.cat}
      </div>
      {hover && (
        <span style={{ position: 'absolute', top: 12, right: 12, fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: v.accent }}>
          ●
        </span>
      )}
    </div>
  );
}

function Stack({ v }: { v: VarConfig }) {
  const [techRef, techSeen] = useReveal(0.05);
  const cats: Record<string, string> = {
    cloud: '/cloud', backend: '/backend', frontend: '/frontend',
    mobile: '/mobile', data: '/data', api: '/api',
  };
  return (
    <section id="stack" style={{ padding: '100px 32px', borderBottom: `1px solid ${v.border}`, background: v.bgSoft }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          v={v}
          kicker="// STACK · TECH"
          title="Tecnologías de batalla"
          subtitle="No usamos lo que está de moda. Usamos lo que aguanta producción."
        />
        <div
          style={{
            marginTop: 60,
            display: 'grid',
            gridTemplateColumns: '240px 1fr',
            gap: 0,
            border: `1px solid ${v.border}`,
            background: v.panel,
          }}
        >
          <div style={{ padding: '24px 20px', borderRight: `1px solid ${v.border}`, fontFamily: "'IBM Plex Mono', monospace", fontSize: 13 }}>
            <div style={{ color: v.textMuted, fontSize: 11, marginBottom: 16, letterSpacing: '0.1em' }}>~/stack</div>
            {Object.entries(cats).map(([key, path]) => {
              const count = TECH.filter((t) => t.cat === key).length;
              return (
                <div key={key} style={{ color: v.textSoft, padding: '6px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span>
                    <span style={{ color: v.accent, marginRight: 6 }}>▸</span>
                    {path}
                  </span>
                  <span style={{ color: v.textMuted }}>{count}</span>
                </div>
              );
            })}
          </div>
          <div ref={techRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {TECH.map((t, i) => (
              <TechCell key={t.name} v={v} t={t} i={i} total={TECH.length} seen={techSeen} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Clientes ──────────────────────────────────────────────────────

function ClientCell({ v, c, i, seen }: { v: VarConfig; c: Client; i: number; seen: boolean }) {
  const [hover, setHover] = React.useState(false);
  const delay = i * 80;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '32px 24px',
        borderRight: i < CLIENTS.length - 1 ? `1px solid ${v.border}` : 'none',
        background: hover ? v.bgSoft : 'transparent',
        transition: `background .2s, opacity .6s ${delay}ms, transform .6s ${delay}ms`,
        minHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'default',
        opacity: seen ? 1 : 0,
        transform: seen ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      <div>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: v.textMuted, marginBottom: 12, letterSpacing: '0.1em' }}>
          [0{i + 1}/05]
        </div>
        <Glitch
          v={v}
          as="div"
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 17, color: v.text, fontWeight: 600, marginBottom: 6, letterSpacing: '-0.01em' }}
        >
          {c.name}
        </Glitch>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: v.accent, marginBottom: 16, letterSpacing: '0.05em' }}>
          {c.sector}
        </div>
      </div>
      <div>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: v.textSoft, marginBottom: 6, lineHeight: 1.5 }}>
          {c.note}
        </div>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: v.textMuted }}>
          ▸ {c.years}
        </div>
      </div>
    </div>
  );
}

function Clientes({ v }: { v: VarConfig }) {
  const [clientsRef, clientsSeen] = useReveal(0.05);
  const all = [...CLIENTS, ...CLIENTS];
  return (
    <section id="clientes" style={{ padding: '100px 0', borderBottom: `1px solid ${v.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <SectionHeader
          v={v}
          kicker="// CLIENTES · 5"
          title="Quienes confían en nosotros"
          subtitle="Empresas con cero margen para errores. Algunos llevan más de una década con nosotros."
        />
      </div>
      <div
        style={{
          marginTop: 60,
          borderTop: `1px solid ${v.border}`,
          borderBottom: `1px solid ${v.border}`,
          padding: '28px 0',
          overflow: 'hidden',
          position: 'relative',
          background: v.bgSoft,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 64,
            animation: 'wa-marquee 28s linear infinite',
            whiteSpace: 'nowrap',
            width: 'max-content',
          }}
        >
          {all.map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, fontFamily: "'IBM Plex Mono', monospace" }}>
              <span style={{ color: v.accent, fontSize: 18 }}>◆</span>
              <span style={{ color: v.text, fontSize: 22, fontWeight: 500, letterSpacing: '0.02em' }}>{c.name}</span>
              <span style={{ color: v.textMuted, fontSize: 12 }}>· {c.sector}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        ref={clientsRef}
        style={{
          maxWidth: 1280,
          margin: '60px auto 0',
          padding: '0 32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          border: `1px solid ${v.border}`,
        }}
      >
        {CLIENTS.map((c, i) => (
          <ClientCell key={c.name} v={v} c={c} i={i} seen={clientsSeen} />
        ))}
      </div>
    </section>
  );
}

// ── Stats ─────────────────────────────────────────────────────────

function Stats({ v }: { v: VarConfig }) {
  const [statsRef, statsSeen] = useReveal(0.1);
  return (
    <section style={{ padding: '100px 32px', borderBottom: `1px solid ${v.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={statsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1px solid ${v.border}` }}>
          {STATS.map((s, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const delay = i * 80;
            return (
              <div
                key={i}
                style={{
                  padding: '48px 36px',
                  borderRight: col < 2 ? `1px solid ${v.border}` : 'none',
                  borderBottom: row === 0 ? `1px solid ${v.border}` : 'none',
                  opacity: statsSeen ? 1 : 0,
                  transform: statsSeen ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity .6s ${delay}ms, transform .6s ${delay}ms`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 56,
                    color: v.accent,
                    fontWeight: 500,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: 12,
                    textShadow: v.variation === 'phosphor' ? '0 0 20px rgba(0,255,136,0.3)' : 'none',
                  }}
                >
                  {s.val}
                </div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: v.textSoft, letterSpacing: '0.05em' }}>
                  {'// '}{s.label}
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

function Equipo({ v }: { v: VarConfig }) {
  const [teamRef, teamSeen] = useReveal(0.05);
  return (
    <section id="equipo" style={{ padding: '100px 32px', borderBottom: `1px solid ${v.border}`, background: v.bgSoft }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          v={v}
          kicker="// EQUIPO"
          title="Senior, sin filler"
          subtitle="Nada de bait-and-switch con juniors. El equipo que ves es el que ejecuta."
        />
        <div
          ref={teamRef}
          style={{
            marginTop: 60,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            border: `1px solid ${v.border}`,
            background: v.panel,
          }}
        >
          {TEAM.map((t, i) => (
            <div
              key={i}
              style={{
                padding: '40px 28px',
                borderRight: i < TEAM.length - 1 ? `1px solid ${v.border}` : 'none',
                position: 'relative',
                minHeight: 240,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                opacity: teamSeen ? 1 : 0,
                transform: teamSeen ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity .6s ${i * 100}ms, transform .6s ${i * 100}ms`,
              }}
            >
              <pre
                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: v.textMuted, margin: 0, lineHeight: 1.1, letterSpacing: 0 }}
              >{`  ┌─────┐\n  │ ◉ ◉ │\n  │  ▽  │\n  │ ─── │\n  └─────┘`}</pre>
              <div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 18, color: v.text, fontWeight: 500, marginBottom: 6 }}>
                  {t.name}
                </div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: v.textSoft, marginBottom: 10 }}>
                  {t.role}
                </div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: v.accent, letterSpacing: '0.05em' }}>
                  ▸ {t.count}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contacto ──────────────────────────────────────────────────────

function Field({
  v, label, value, onChange, placeholder, multiline = false,
}: {
  v: VarConfig;
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  multiline?: boolean;
}) {
  const [focus, setFocus] = React.useState(false);
  const sharedStyle: React.CSSProperties = {
    width: '100%',
    background: v.bg,
    border: `1px solid ${focus ? v.accent : v.border}`,
    color: v.text,
    padding: '12px 14px',
    fontFamily: 'inherit',
    fontSize: 13,
    outline: 'none',
    transition: 'border-color .15s',
    resize: 'vertical',
    boxSizing: 'border-box',
  };
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{ display: 'block', fontSize: 11, color: v.accent, marginBottom: 6, letterSpacing: '0.05em' }}>
        $ {label} =
      </label>
      {multiline ? (
        <textarea
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          style={sharedStyle}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          style={sharedStyle}
        />
      )}
    </div>
  );
}

function Contacto({ v }: { v: VarConfig }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [sent, setSent] = React.useState(false);

  return (
    <section id="contacto" style={{ padding: '100px 32px', borderBottom: `1px solid ${v.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          <SectionHeader
            v={v}
            kicker="// CONTACTO · v1.0"
            title="¿Conversamos?"
            subtitle="Cuéntanos qué necesitas resolver. Respondemos en menos de 24 horas hábiles."
          />
          <div style={{ marginTop: 48, fontFamily: "'IBM Plex Mono', monospace", fontSize: 14, color: v.textSoft, lineHeight: 2 }}>
            <div><span style={{ color: v.textMuted }}>email   →</span> <span style={{ color: v.text }}>hola@wearesolutions.cl</span></div>
            <div><span style={{ color: v.textMuted }}>fono    →</span> <span style={{ color: v.text }}>+56 2 0000 0000</span></div>
            <div><span style={{ color: v.textMuted }}>oficina →</span> <span style={{ color: v.text }}>Santiago, Chile · GMT-4</span></div>
            <div><span style={{ color: v.textMuted }}>linkedin→</span> <span style={{ color: v.text }}>/we-are-solutions</span></div>
          </div>
          <div
            style={{
              marginTop: 48,
              padding: '20px 24px',
              border: `1px dashed ${v.border}`,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              color: v.textSoft,
              lineHeight: 1.7,
            }}
          >
            <div style={{ color: v.accent, marginBottom: 8 }}>{'// PGP fingerprint'}</div>
            <div style={{ wordBreak: 'break-all' }}>
              4F8A 9B12 D3E4 F567 8901<br />
              2345 6789 ABCD EF01 2345
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          style={{
            background: v.panel,
            border: `1px solid ${v.borderStrong}`,
            padding: '32px',
            fontFamily: "'IBM Plex Mono', monospace",
            boxShadow: v.glow,
          }}
        >
          <div style={{ fontSize: 11, color: v.textMuted, marginBottom: 24, letterSpacing: '0.1em', borderBottom: `1px solid ${v.border}`, paddingBottom: 16 }}>
            ~/contact_form.exe
          </div>
          {sent ? (
            <div style={{ padding: '40px 0', textAlign: 'left' }}>
              <div style={{ fontSize: 24, color: v.accent, marginBottom: 16 }}>✓ MENSAJE_ENVIADO</div>
              <div style={{ fontSize: 13, color: v.textSoft, lineHeight: 1.7 }}>
                Tu mensaje quedó en cola.<br />
                Te contactamos en {'<'} 24h hábiles.<br /><br />
                <span style={{ color: v.accent }}>$</span> exit 0<Cursor v={v} />
              </div>
            </div>
          ) : (
            <>
              <Field v={v} label="nombre" value={name} onChange={setName} placeholder="Juan Pérez" />
              <Field v={v} label="email" value={email} onChange={setEmail} placeholder="juan@empresa.com" />
              <Field v={v} label="mensaje" value={msg} onChange={setMsg} placeholder="Necesitamos auditar nuestra infraestructura..." multiline />
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '14px',
                  background: v.accent,
                  color: v.bg,
                  border: 'none',
                  fontFamily: 'inherit',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  marginTop: 8,
                  boxShadow: v.glow,
                }}
              >
                ./send_message.sh →
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────

function Footer({ v }: { v: VarConfig }) {
  return (
    <footer style={{ padding: '60px 32px 40px' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: 32,
          flexWrap: 'wrap',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 12,
          color: v.textMuted,
        }}
      >
        <div>
          <div style={{ fontSize: 24, color: v.text, fontWeight: 500, marginBottom: 8, letterSpacing: '-0.01em' }}>
            we_are_solutions
          </div>
          <div>{'// © 2026 · all systems operational'}</div>
        </div>
        <pre style={{ margin: 0, fontSize: 10, color: v.textMuted, lineHeight: 1.2, letterSpacing: 0 }}>
          {`  ╔═══════════════════════════════╗\n  ║  WE ARE SOLUTIONS · SCL · CL  ║\n  ║  build: stable · v.2026.01    ║\n  ╚═══════════════════════════════╝`}
        </pre>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: v.accent, marginBottom: 4 }}>
            <span
              style={{
                display: 'inline-block',
                width: 8,
                height: 8,
                background: v.accent,
                borderRadius: '50%',
                marginRight: 6,
                animation: 'wa-pulse 2s ease-in-out infinite',
                boxShadow: v.variation === 'phosphor' ? `0 0 8px ${v.accent}` : 'none',
              }}
            />
            ONLINE · 99.9% uptime
          </div>
          <div>SCL · 33.4°S 70.6°W</div>
        </div>
      </div>
    </footer>
  );
}

// ── Landing ───────────────────────────────────────────────────────

export default function Landing({ variation = 'mono' }: { variation?: string }) {
  const v: VarConfig = { ...VARS[variation], variation };
  return (
    <div style={{ background: v.bg, color: v.text, fontFamily: "'IBM Plex Mono', monospace", minHeight: '100%', position: 'relative' }}>
      <Nav v={v} />
      <Hero v={v} />
      <Servicios v={v} />
      <Stack v={v} />
      <Clientes v={v} />
      <Stats v={v} />
      <Equipo v={v} />
      <Contacto v={v} />
      <Footer v={v} />
    </div>
  );
}
