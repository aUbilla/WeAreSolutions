import React from 'react';
import {
  Shield, Code2, Cloud, Layers, Users, Lightbulb,
  Calendar, CheckCircle2, Activity, Lock, ShieldCheck, Clock,
  Mail, Phone, MapPin, ExternalLink, Send, User, Menu, X,
  type LucideIcon,
} from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────

interface Service {
  code: string;
  name: string;
  desc: string;
  cmd: string;
  tags: string[];
  Icon: LucideIcon;
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

interface DemoScene {
  cmd: string;
  output: string[];
}

interface HeroSlide {
  badge: string;
  line1: string;
  line2: string;
  line3: string;
  desc: string;
}

// ── Data ─────────────────────────────────────────────────────────

const SERVICES: Service[] = [
  {
    code: '01',
    name: 'Ciberseguridad',
    desc: 'Auditorías, pentesting, hardening, gestión de vulnerabilidades y respuesta a incidentes.',
    cmd: 'scan --target=infra --depth=full',
    tags: ['Pentesting', 'SOC', 'ISO 27001', 'Hardening'],
    Icon: Shield,
  },
  {
    code: '02',
    name: 'Desarrollo a Medida',
    desc: 'Apps web y móviles construidas con stacks modernos. De producto a la entrega.',
    cmd: 'build --type=app --stack=react',
    tags: ['React', 'React Native', 'Spring Boot', 'Angular'],
    Icon: Code2,
  },
  {
    code: '03',
    name: 'Cloud & DevOps',
    desc: 'Migraciones, arquitectura cloud-native y automatización de pipelines en AWS.',
    cmd: 'deploy --provider=aws --strategy=blue-green',
    tags: ['AWS', 'IaC', 'Kubernetes', 'CI/CD'],
    Icon: Cloud,
  },
  {
    code: '04',
    name: 'SaaS',
    desc: 'Productos SaaS escalables: multi-tenant, billing, observabilidad y compliance.',
    cmd: 'init --product=saas --multi-tenant=true',
    tags: ['Multi-tenant', 'Billing', 'Observability'],
    Icon: Layers,
  },
  {
    code: '05',
    name: 'Outsourcing',
    desc: 'Equipos dedicados que se integran a tu operación. Senior, ágiles, en tu zona horaria.',
    cmd: 'team --size=flex --timezone=LATAM',
    tags: ['Squads', 'Staff Aug.', 'Nearshore'],
    Icon: Users,
  },
  {
    code: '06',
    name: 'Consultoría TI',
    desc: 'Estrategia tecnológica, modernización de legacy y transformación digital end-to-end.',
    cmd: 'advise --scope=enterprise',
    tags: ['Strategy', 'Legacy', 'Roadmap'],
    Icon: Lightbulb,
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
  { name: 'GrainLog', sector: 'App React Native', years: 'Producto', note: 'Logística de granos' },
  { name: '2EC', sector: 'Ciberseguridad', years: 'Cliente activo', note: 'Integraciones backend' },
];

const TEAM: TeamMember[] = [
  { name: 'Ingeniería', role: 'Desarrollo & Arquitectura', count: '4 ingenieros' },
  { name: 'Cloud & Seguridad', role: 'Certificados AWS + ISO 27001', count: '3 especialistas' },
  { name: 'Producto', role: 'Diseño, UX & PM', count: '2 personas' },
  { name: 'Squads Dedicados', role: 'Integrados en tu operación', count: '10+ asignados' },
];

const STATS: Stat[] = [
  { val: '12+', label: 'años en la industria', Icon: Calendar },
  { val: '20+', label: 'proyectos entregados', Icon: CheckCircle2 },
  { val: '8+', label: 'años con AFP Habitat', Icon: Clock },
  { val: '99.9%', label: 'uptime promedio', Icon: Activity },
  { val: '24/7', label: 'soporte SOC', Icon: ShieldCheck },
  { val: '0', label: 'brechas en clientes 2025', Icon: Lock },
];

const HERO_SLIDES: HeroSlide[] = [
  {
    badge: '[ software · desarrollo · producto ]',
    line1: 'Construimos',
    line2: 'software seguro',
    line3: 'que no se cae.',
    desc: 'Desarrollamos productos web y móviles con stacks modernos. De la primera línea de código a producción crítica, entregamos software que aguanta.',
  },
  {
    badge: '[ redes · infraestructura · conectividad ]',
    line1: 'Diseñamos redes',
    line2: 'que resisten',
    line3: 'cualquier carga.',
    desc: 'Arquitectura de redes empresariales, segmentación, VPNs, SD-WAN y monitoreo 24/7. Tu infraestructura de conectividad, siempre operativa.',
  },
  {
    badge: '[ firewall · perímetro · IDS/IPS ]',
    line1: 'Blindamos',
    line2: 'tu perímetro',
    line3: 'antes del breach.',
    desc: 'Seguridad perimetral con firewalls de próxima generación, IDS/IPS, segmentación de red y detección de amenazas en tiempo real.',
  },
  {
    badge: '[ pentesting · SOC · ISO 27001 ]',
    line1: 'Ciberseguridad',
    line2: 'de nivel',
    line3: 'empresarial.',
    desc: 'Auditorías, pentesting, hardening y SOC 24/7. Gestión de vulnerabilidades y respuesta a incidentes. Cumplimiento ISO 27001 para entornos regulados.',
  },
  {
    badge: '[ react · react native · angular ]',
    line1: 'Apps móviles',
    line2: 'y web que',
    line3: 'escalan.',
    desc: 'Desarrollo con React, React Native y Angular. De MVP a millones de usuarios. Entrega continua, tests y arquitectura lista para producción crítica.',
  },
  {
    badge: '[ aws · kubernetes · terraform ]',
    line1: 'Cloud nativo',
    line2: 'desde el',
    line3: 'primer día.',
    desc: 'Migraciones, arquitectura cloud-native y automatización en AWS. Kubernetes, Terraform e IaC para infraestructura reproducible que no falla.',
  },
];

const DEMO_SCENES: DemoScene[] = [
  {
    cmd: 'nmap -sV --script vuln 192.168.1.0/24',
    output: [
      '[*] Scanning 256 hosts...',
      '[+] 192.168.1.12  ssh/22     OpenSSH 8.9p1',
      '[+] 192.168.1.18  https/443  nginx/1.24.0',
      '[!] CVE-2023-44487 detected on 192.168.1.18',
      '[✓] Report → /reports/vuln_20260506.pdf',
    ],
  },
  {
    cmd: 'kubectl get pods -n production',
    output: [
      'NAME                   READY   STATUS',
      'api-gateway-7d4f-xk9   1/1     Running',
      'auth-svc-6c8d-m3n7     1/1     Running',
      'workers-9b2a-r8s1      3/3     Running',
      '[✓] All pods healthy · uptime 99.9%',
    ],
  },
  {
    cmd: 'git push origin main && ./deploy.sh',
    output: [
      'Enumerating objects: 47, done.',
      'Building weare/api:v2.0.26... ✓',
      'Running 38 tests... all passed ✓',
      'Pushing to registry... ✓',
      '[✓] Deployed to prod · zero downtime',
    ],
  },
  {
    cmd: './pentest.sh --target=app.cliente.cl',
    output: [
      '[*] Running OWASP Top 10 checks...',
      '[✓] A01 Injection        PASSED',
      '[✓] A02 Broken Auth      PASSED',
      '[✓] A03 XSS / CSRF       PASSED',
      '[✓] 0 critical findings',
    ],
  },
  {
    cmd: 'terraform apply -auto-approve',
    output: [
      'aws_security_group.waf: Creating...',
      'aws_security_group.waf: Creation complete ✓',
      'aws_wafv2_web_acl.main: Creating...',
      'aws_wafv2_web_acl.main: Creation complete ✓',
      '[✓] Apply complete · 2 added, 0 changed',
    ],
  },
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

function cellBorders(i: number, total: number, cols: number, v: VarConfig) {
  const col = i % cols;
  const row = Math.floor(i / cols);
  const totalRows = Math.ceil(total / cols);
  return {
    borderRight: col < cols - 1 ? `1px solid ${v.border}` : 'none',
    borderBottom: row < totalRows - 1 ? `1px solid ${v.border}` : 'none',
  };
}

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
  const isMobile = React.useContext(MobileCtx);
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
          fontSize: isMobile ? 28 : 48,
          fontWeight: 500,
          color: v.text,
          margin: 0,
          letterSpacing: '-0.02em',
          maxWidth: 800,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: isMobile ? 13 : 16,
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
  const isMobile = React.useContext(MobileCtx);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks: [string, string][] = [
    ['Servicios', '#servicios'],
    ['Stack', '#stack'],
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
        backdropFilter: 'blur(8px)',
        background: v.bg + 'ee',
        borderBottom: `1px solid ${v.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: isMobile ? '12px 16px' : '14px 32px',
          display: 'flex',
          alignItems: 'center',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 13,
          position: 'relative',
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
              flexShrink: 0,
            }}
          />
          <span style={{ color: v.text, fontWeight: 600, letterSpacing: '0.02em', fontSize: isMobile ? 12 : 13 }}>
            we_are_solutions
          </span>
          {!isMobile && <span style={{ color: v.textMuted }}>v.2026</span>}
        </div>

        {isMobile ? (
          <>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                marginLeft: 'auto',
                background: 'transparent',
                border: `1px solid ${v.border}`,
                color: v.accent,
                cursor: 'pointer',
                padding: '6px 8px',
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
                  background: v.bg,
                  borderBottom: `1px solid ${v.border}`,
                  zIndex: 100,
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
                        padding: '14px 16px',
                        color: isActive ? v.accent : v.textSoft,
                        textDecoration: 'none',
                        borderBottom: `1px solid ${v.border}`,
                        fontSize: 14,
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                    >
                      ./{label}
                    </a>
                  );
                })}
                <a
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '14px 16px',
                    color: v.accent,
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: 14,
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  → Contactar
                </a>
              </div>
            )}
          </>
        ) : (
          <>
            <nav style={{ display: 'flex', gap: 24, marginLeft: 32 }}>
              {navLinks.map(([label, href]) => {
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
                Contactar
              </a>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

// ── Hero ──────────────────────────────────────────────────────────

function AutoTerminal({ v }: { v: VarConfig }) {
  const [sceneIdx, setSceneIdx] = React.useState(0);
  const [phase, setPhase] = React.useState<'typing' | 'output' | 'waiting'>('typing');
  const [charIdx, setCharIdx] = React.useState(0);
  const [outputIdx, setOutputIdx] = React.useState(0);
  const [history, setHistory] = React.useState<Array<{ type: 'cmd' | 'out' | 'gap'; text: string }>>([]);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history, charIdx]);

  const scene = DEMO_SCENES[sceneIdx];

  React.useEffect(() => {
    if (phase === 'typing') {
      if (charIdx < scene.cmd.length) {
        const id = setTimeout(
          () => setCharIdx((c) => c + 1),
          35 + Math.random() * 45,
        );
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => {
        setHistory((h) => [...h, { type: 'cmd', text: scene.cmd }]);
        setOutputIdx(0);
        setPhase('output');
      }, 480);
      return () => clearTimeout(id);
    }

    if (phase === 'output') {
      if (outputIdx < scene.output.length) {
        const id = setTimeout(() => {
          setHistory((h) => [...h, { type: 'out', text: scene.output[outputIdx] }]);
          setOutputIdx((i) => i + 1);
        }, 140 + Math.random() * 80);
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => setPhase('waiting'), 1800);
      return () => clearTimeout(id);
    }

    if (phase === 'waiting') {
      const next = (sceneIdx + 1) % DEMO_SCENES.length;
      setHistory((h) => [
        ...(h.length > 80 ? h.slice(-80) : h),
        { type: 'gap', text: '' },
      ]);
      setSceneIdx(next);
      setCharIdx(0);
      setOutputIdx(0);
      setPhase('typing');
    }
  }, [phase, charIdx, outputIdx, sceneIdx, scene]);

  const lineColor = (text: string): string => {
    if (text.startsWith('[✓]')) return v.accent;
    if (text.startsWith('[!]')) return v.warn;
    return v.textSoft;
  };

  return (
    <div
      style={{
        background: v.panel,
        border: `1px solid ${v.borderStrong}`,
        boxShadow: v.glow,
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 13,
        height: 440,
        display: 'flex',
        flexDirection: 'column',
      }}
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
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: v.danger }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: v.warn }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: v.accent }} />
        </div>
        <span style={{ marginLeft: 'auto', letterSpacing: '0.1em' }}>
          ~/wearesolutions — bash
        </span>
      </div>
      <div
        ref={scrollRef}
        style={{ flex: 1, padding: '14px', overflowY: 'auto', lineHeight: 1.65 }}
      >
        {history.map((h, i) => {
          if (h.type === 'gap') return <div key={i} style={{ height: '0.8em' }} />;
          if (h.type === 'cmd')
            return (
              <div key={i} style={{ color: v.text }}>
                <span style={{ color: v.accent }}>$ </span>
                {h.text}
              </div>
            );
          return (
            <div key={i} style={{ color: lineColor(h.text), paddingLeft: 14 }}>
              {h.text}
            </div>
          );
        })}
        <div style={{ color: v.text }}>
          <span style={{ color: v.accent }}>$ </span>
          {phase === 'typing' ? scene.cmd.slice(0, charIdx) : ''}
          {phase === 'typing' && <Cursor v={v} size="0.9em" />}
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
  const isMobile = React.useContext(MobileCtx);
  const [current, setCurrent] = React.useState(0);
  const [entering, setEntering] = React.useState(true);

  const changeTo = React.useCallback(
    (next: number) => {
      if (next === current) return;
      setEntering(false);
      setTimeout(() => {
        setCurrent(next);
        setEntering(true);
      }, 320);
    },
    [current],
  );

  React.useEffect(() => {
    const id = setTimeout(() => {
      changeTo((current + 1) % HERO_SLIDES.length);
    }, 4800);
    return () => clearTimeout(id);
  }, [current, changeTo]);

  const slide = HERO_SLIDES[current];

  return (
    <section
      style={{
        position: 'relative',
        padding: isMobile ? '48px 16px 64px' : '80px 32px 120px',
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
        {!isMobile && (
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
        )}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 80, alignItems: 'start' }}>
          <div>
          {/* Animated slide content */}
            <div
              style={{
                opacity: entering ? 1 : 0,
                transform: entering ? 'translateY(0)' : 'translateY(14px)',
                transition: 'opacity 0.32s ease, transform 0.32s ease',
                minHeight: isMobile ? 200 : 260,
              }}
            >
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: isMobile ? 10 : 12,
                  color: v.textMuted,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: 24,
                }}
              >
                {slide.badge}
              </div>
              <h1
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: isMobile ? 38 : 72,
                  lineHeight: 1.05,
                  fontWeight: 500,
                  color: v.text,
                  margin: 0,
                  letterSpacing: '-0.02em',
                  textShadow:
                    v.variation === 'phosphor'
                      ? '0 0 30px rgba(0,255,136,0.25)'
                      : 'none',
                }}
              >
                {slide.line1}
                <br />
                <Glitch v={v} as="span" style={{ color: v.accent }}>
                  {slide.line2}
                </Glitch>
                <br />
                {slide.line3}
              </h1>
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: isMobile ? 13 : 15,
                  color: v.textSoft,
                  lineHeight: 1.7,
                  marginTop: 28,
                  maxWidth: 640,
                }}
              >
                {slide.desc}
              </p>
            </div>

            {/* Progress bar */}
            <div
              style={{ height: 1, background: v.border, marginTop: 28, overflow: 'hidden' }}
            >
              <div
                key={`prog-${current}`}
                style={{
                  height: '100%',
                  background: v.accent,
                  animation: 'wa-progress 4.8s linear forwards',
                }}
              />
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              <a
                href="#contacto"
                style={{
                  padding: isMobile ? '12px 18px' : '14px 24px',
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
                Agendar reunión →
              </a>
              <a
                href="#servicios"
                style={{
                  padding: isMobile ? '12px 18px' : '14px 24px',
                  background: 'transparent',
                  color: v.text,
                  textDecoration: 'none',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 13,
                  letterSpacing: '0.05em',
                  border: `1px solid ${v.borderStrong}`,
                }}
              >
                Ver servicios
              </a>
            </div>

            {/* Slide navigation dots */}
            <div style={{ display: 'flex', gap: 8, marginTop: 24, alignItems: 'center' }}>
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => changeTo(i)}
                  style={{
                    width: i === current ? 20 : 6,
                    height: 6,
                    background: i === current ? v.accent : v.border,
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'width 0.3s, background 0.3s',
                    outline: 'none',
                  }}
                />
              ))}
              <span
                style={{
                  marginLeft: 8,
                  fontSize: 11,
                  color: v.textMuted,
                  fontFamily: "'IBM Plex Mono', monospace",
                  letterSpacing: '0.1em',
                }}
              >
                {String(current + 1).padStart(2, '0')}/{String(HERO_SLIDES.length).padStart(2, '0')}
              </span>
            </div>
          </div>
          {!isMobile && <AutoTerminal v={v} />}
        </div>
      </div>
    </section>
  );
}

// ── Servicios ─────────────────────────────────────────────────────

function ServiceCard({ v, s, index, seen, cols }: { v: VarConfig; s: Service; index: number; seen: boolean; cols: number }) {
  const [hover, setHover] = React.useState(false);
  const delay = index * 80;
  const { borderRight, borderBottom } = cellBorders(index, SERVICES.length, cols, v);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '32px 28px 36px',
        borderRight,
        borderBottom,
        background: hover ? v.bgSoft : 'transparent',
        position: 'relative',
        cursor: 'pointer',
        transition: `background .2s, opacity .6s ${delay}ms, transform .6s ${delay}ms`,
        minHeight: 280,
        display: 'flex',
        flexDirection: 'column',
        opacity: seen ? 1 : 0,
        transform: seen ? 'translateY(0)' : 'translateY(32px)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <div
          style={{
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid ${hover ? v.accent : v.border}`,
            background: hover ? `${v.accent}18` : v.bg,
            transition: 'all .2s',
          }}
        >
          <s.Icon size={22} color={hover ? v.accent : v.textSoft} strokeWidth={1.5} />
        </div>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: v.textMuted, letterSpacing: '0.1em', marginTop: 4 }}>
          [{s.code}]
        </span>
      </div>
      <h3 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 22, fontWeight: 500, color: v.text, margin: '0 0 16px', letterSpacing: '-0.01em' }}>
        {s.name}
      </h3>
      <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 14, color: v.textSoft, lineHeight: 1.65, margin: '0 0 24px', flex: 1 }}>
        {s.desc}
      </p>
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
  const isMobile = React.useContext(MobileCtx);
  const cols = isMobile ? 1 : 3;
  return (
    <section id="servicios" style={{ padding: isMobile ? '60px 16px' : '100px 32px', borderBottom: `1px solid ${v.border}` }}>
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
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: 0,
            border: `1px solid ${v.border}`,
            marginTop: isMobile ? 40 : 60,
          }}
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.code} v={v} s={s} index={i} seen={gridSeen} cols={cols} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Stack ─────────────────────────────────────────────────────────

function TechCell({ v, t, i, total, seen, cols }: { v: VarConfig; t: Tech; i: number; total: number; seen: boolean; cols: number }) {
  const [hover, setHover] = React.useState(false);
  const delay = i * 40;
  const { borderRight, borderBottom } = cellBorders(i, total, cols, v);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '28px 20px',
        borderRight,
        borderBottom,
        background: hover ? v.bg : 'transparent',
        position: 'relative',
        cursor: 'default',
        minHeight: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: `background .15s, opacity .5s ${delay}ms, transform .5s ${delay}ms`,
        opacity: seen ? 1 : 0,
        transform: seen ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 16, color: hover ? v.accent : v.text, fontWeight: 500, transition: 'color .15s' }}>
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
  const isMobile = React.useContext(MobileCtx);
  const techCols = isMobile ? 2 : 4;
  const cats: Record<string, string> = {
    cloud: '/cloud', backend: '/backend', frontend: '/frontend',
    mobile: '/mobile', data: '/data', api: '/api',
  };
  return (
    <section id="stack" style={{ padding: isMobile ? '60px 16px' : '100px 32px', borderBottom: `1px solid ${v.border}`, background: v.bgSoft }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          v={v}
          kicker="// STACK · TECH"
          title="Tecnologías de batalla"
          subtitle="No usamos lo que está de moda. Usamos lo que aguanta producción."
        />
        <div
          style={{
            marginTop: isMobile ? 40 : 60,
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '240px 1fr',
            gap: 0,
            border: `1px solid ${v.border}`,
            background: v.panel,
          }}
        >
          {!isMobile && (
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
          )}
          <div ref={techRef} style={{ display: 'grid', gridTemplateColumns: `repeat(${techCols}, 1fr)`, gap: 0 }}>
            {TECH.map((t, i) => (
              <TechCell key={t.name} v={v} t={t} i={i} total={TECH.length} seen={techSeen} cols={techCols} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Clientes ──────────────────────────────────────────────────────

function ClientCell({ v, c, i, seen, cols }: { v: VarConfig; c: Client; i: number; seen: boolean; cols: number }) {
  const [hover, setHover] = React.useState(false);
  const delay = i * 80;
  const { borderRight, borderBottom } = cellBorders(i, CLIENTS.length, cols, v);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '32px 24px',
        borderRight,
        borderBottom,
        background: hover ? v.bgSoft : 'transparent',
        transition: `background .2s, opacity .6s ${delay}ms, transform .6s ${delay}ms`,
        minHeight: 180,
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
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 16, color: v.text, fontWeight: 600, marginBottom: 6, letterSpacing: '-0.01em' }}
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
  const isMobile = React.useContext(MobileCtx);
  const cols = isMobile ? 2 : 5;
  const all = [...CLIENTS, ...CLIENTS];
  return (
    <section id="clientes" style={{ padding: isMobile ? '60px 0' : '100px 0', borderBottom: `1px solid ${v.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 16px' : '0 32px' }}>
        <SectionHeader
          v={v}
          kicker="// CLIENTES · 5"
          title="Quienes confían en nosotros"
          subtitle="Empresas con cero margen para errores. Algunos llevan más de una década con nosotros."
        />
      </div>
      <div
        style={{
          marginTop: isMobile ? 40 : 60,
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
              <span style={{ color: v.text, fontSize: isMobile ? 16 : 22, fontWeight: 500, letterSpacing: '0.02em' }}>{c.name}</span>
              <span style={{ color: v.textMuted, fontSize: 12 }}>· {c.sector}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        ref={clientsRef}
        style={{
          maxWidth: 1280,
          margin: isMobile ? '40px auto 0' : '60px auto 0',
          padding: isMobile ? '0 16px' : '0 32px',
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          border: `1px solid ${v.border}`,
        }}
      >
        {CLIENTS.map((c, i) => (
          <ClientCell key={c.name} v={v} c={c} i={i} seen={clientsSeen} cols={cols} />
        ))}
      </div>
    </section>
  );
}

// ── Stats ─────────────────────────────────────────────────────────

function Stats({ v }: { v: VarConfig }) {
  const [statsRef, statsSeen] = useReveal(0.1);
  const isMobile = React.useContext(MobileCtx);
  const cols = isMobile ? 2 : 3;
  return (
    <section style={{ padding: isMobile ? '60px 16px' : '100px 32px', borderBottom: `1px solid ${v.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={statsRef} style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 0, border: `1px solid ${v.border}` }}>
          {STATS.map((s, i) => {
            const delay = i * 80;
            const { borderRight, borderBottom } = cellBorders(i, STATS.length, cols, v);
            return (
              <div
                key={i}
                style={{
                  padding: isMobile ? '32px 20px' : '48px 36px',
                  borderRight,
                  borderBottom,
                  opacity: statsSeen ? 1 : 0,
                  transform: statsSeen ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity .6s ${delay}ms, transform .6s ${delay}ms`,
                }}
              >
                <div style={{ marginBottom: 16 }}>
                  <s.Icon size={isMobile ? 16 : 20} color={v.accent} strokeWidth={1.5} />
                </div>
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: isMobile ? 40 : 56,
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
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: isMobile ? 11 : 13, color: v.textSoft, letterSpacing: '0.05em' }}>
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

function Equipo({ v }: { v: VarConfig }) {
  const [teamRef, teamSeen] = useReveal(0.05);
  const isMobile = React.useContext(MobileCtx);
  const cols = isMobile ? 2 : 4;
  return (
    <section id="equipo" style={{ padding: isMobile ? '60px 16px' : '100px 32px', borderBottom: `1px solid ${v.border}`, background: v.bgSoft }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          v={v}
          kicker="// EQUIPO"
          title="Un equipo que se queda"
          subtitle="No entregamos proyectos y desaparecemos. Nos integramos a tu operación, aprendemos tu negocio y crecemos contigo. AFP Habitat lleva 8 años con nosotros — eso lo dice todo."
        />
        <div
          ref={teamRef}
          style={{
            marginTop: isMobile ? 40 : 60,
            display: 'grid',
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: 0,
            border: `1px solid ${v.border}`,
            background: v.panel,
          }}
        >
          {TEAM.map((t, i) => {
            const { borderRight, borderBottom } = cellBorders(i, TEAM.length, cols, v);
            return (
              <div
                key={i}
                style={{
                  padding: isMobile ? '28px 20px' : '40px 28px',
                  borderRight,
                  borderBottom,
                  position: 'relative',
                  minHeight: isMobile ? 180 : 240,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  opacity: teamSeen ? 1 : 0,
                  transform: teamSeen ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity .6s ${i * 100}ms, transform .6s ${i * 100}ms`,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    border: `1px solid ${v.border}`,
                    background: v.bgSoft,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <User size={22} color={v.textMuted} strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: isMobile ? 15 : 18, color: v.text, fontWeight: 500, marginBottom: 6 }}>
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
            );
          })}
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
      <label style={{ display: 'block', fontSize: 11, color: v.accent, marginBottom: 6, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {label}
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

  return (
    <section id="contacto" style={{ padding: isMobile ? '60px 16px' : '100px 32px', borderBottom: `1px solid ${v.border}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 48 : 80 }}>
        <div>
          <SectionHeader
            v={v}
            kicker="// CONTACTO · v1.0"
            title="¿Conversamos?"
            subtitle="Cuéntanos qué necesitas resolver. Respondemos en menos de 24 horas hábiles."
          />
          <div style={{ marginTop: 48, fontFamily: "'IBM Plex Mono', monospace", fontSize: 14, color: v.textSoft, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {([
              { Icon: Mail, label: 'hola@wearesolutions.cl' },
              { Icon: Phone, label: '+56 9 77176396' },
              { Icon: MapPin, label: 'Santiago, Chile · GMT-4' },
              { Icon: ExternalLink, label: 'LinkedIn · /we-are-solutions' },
            ] as { Icon: LucideIcon; label: string }[]).map(({ Icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    border: `1px solid ${v.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} color={v.accent} strokeWidth={1.5} />
                </div>
                <span style={{ color: v.text, fontSize: isMobile ? 13 : 14 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            background: v.panel,
            border: `1px solid ${v.borderStrong}`,
            padding: '32px',
            fontFamily: "'IBM Plex Mono', monospace",
            boxShadow: v.glow,
          }}
        >
          <div style={{ fontSize: 13, color: v.textSoft, marginBottom: 24, letterSpacing: '0.05em', borderBottom: `1px solid ${v.border}`, paddingBottom: 16 }}>
            Formulario de contacto
          </div>
          {sent ? (
            <div style={{ padding: '40px 0', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <CheckCircle2 size={28} color={v.accent} strokeWidth={1.5} />
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 20, color: v.accent }}>¡Mensaje enviado!</span>
              </div>
              <div style={{ fontSize: 13, color: v.textSoft, lineHeight: 1.9 }}>
                Recibimos tu consulta.<br />
                Te contactamos en menos de 24 horas hábiles.
              </div>
            </div>
          ) : (
            <>
              <Field v={v} label="Nombre" value={name} onChange={setName} placeholder="Juan Pérez" />
              <Field v={v} label="Email" value={email} onChange={setEmail} placeholder="juan@empresa.com" />
              <Field v={v} label="Mensaje" value={msg} onChange={setMsg} placeholder="Cuéntanos qué necesitas..." multiline />
              {error && (
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: v.danger, marginBottom: 12, lineHeight: 1.5 }}>
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: loading ? v.accentDim : v.accent,
                  color: v.bg,
                  border: 'none',
                  fontFamily: 'inherit',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  marginTop: 8,
                  boxShadow: v.glow,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  opacity: loading ? 0.7 : 1,
                  transition: 'opacity .15s, background .15s',
                }}
              >
                <Send size={15} strokeWidth={2} />
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

function Footer({ v }: { v: VarConfig }) {
  const isMobile = React.useContext(MobileCtx);
  return (
    <footer style={{ padding: isMobile ? '40px 16px 32px' : '60px 32px 40px' }}>
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
          <div style={{ fontSize: isMobile ? 18 : 24, color: v.text, fontWeight: 500, marginBottom: 8, letterSpacing: '-0.01em' }}>
            we_are_solutions
          </div>
          <div>{'// © 2026 · all systems operational'}</div>
        </div>
        {!isMobile && (
          <pre style={{ margin: 0, fontSize: 10, color: v.textMuted, lineHeight: 1.2, letterSpacing: 0 }}>
            {`  ╔═══════════════════════════════╗\n  ║  WE ARE SOLUTIONS · SCL · CL  ║\n  ║  build: stable · v.2026.01    ║\n  ╚═══════════════════════════════╝`}
          </pre>
        )}
        <div style={{ textAlign: isMobile ? 'left' : 'right' }}>
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
  const isMobile = useIsMobile();
  return (
    <MobileCtx.Provider value={isMobile}>
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
    </MobileCtx.Provider>
  );
}
