import React from 'react';
import { Code2, Package, Server, Mail, Phone, Globe, Download, type LucideIcon } from 'lucide-react';

const C = {
  bg:        '#0c0c0c',
  panel:     '#131313',
  panelAlt:  '#181818',
  border:    '#242424',
  text:      '#e8e8e8',
  textSoft:  '#a3a3a3',
  textMuted: '#505050',
  accent:    '#d4ff3a',
  accentDim: '#a3cc1f',
};

interface Service {
  Icon: LucideIcon;
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
}

const SERVICES: Service[] = [
  {
    Icon: Code2,
    num: '01',
    title: 'Desarrollo de Software',
    subtitle: 'Web · Mobile · A medida',
    desc: 'Aplicaciones web y móviles construidas con tecnología moderna. De la idea al producto listo para producción. React, React Native, Angular, Spring Boot y más.',
    tags: ['React', 'React Native', 'Angular', 'Spring Boot', 'Node.js'],
  },
  {
    Icon: Package,
    num: '02',
    title: 'Software de Stock & Productos',
    subtitle: 'Inventario · Catálogo · Reportes',
    desc: 'Sistema propio para controlar tu inventario, gestionar tu catálogo de productos, movimientos de stock y reportes en tiempo real. Adaptado a tu negocio y forma de trabajar.',
    tags: ['Control de stock', 'Catálogo', 'POS', 'Reportes', 'Multi-sucursal'],
  },
  {
    Icon: Server,
    num: '03',
    title: 'Hosting & Alojamiento Web',
    subtitle: 'Rápido · Seguro · 24/7',
    desc: 'Alojamiento en servidores de alto rendimiento. Dominio, SSL, correos corporativos y soporte técnico incluido. Tu sitio web y aplicaciones siempre en línea.',
    tags: ['SSL', 'Dominio', 'Correo corporativo', '99.9% uptime', 'Soporte'],
  },
];

const PRINT_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html, body { background: #080808; }

  .wa-dev-brochure {
    width: 800px;
    margin: 80px auto 40px;
    background: ${C.bg};
    font-family: 'IBM Plex Mono', monospace;
    color: ${C.text};
  }

  .wa-dev-bar {
    position: fixed;
    top: 0; left: 0; right: 0;
    background: #080808;
    border-bottom: 1px solid ${C.border};
    padding: 10px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    color: ${C.textMuted};
    z-index: 50;
  }

  .wa-dev-btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: ${C.accent};
    color: ${C.bg};
    border: none;
    padding: 8px 16px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.05em;
    cursor: pointer;
  }

  .wa-dev-btn-ghost {
    background: transparent;
    color: ${C.textSoft};
    border: 1px solid ${C.border};
  }

  @media print {
    html, body { background: white; }

    .wa-dev-bar { display: none !important; }

    .wa-dev-brochure {
      width: 100%;
      margin: 0;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    @page {
      size: A4 portrait;
      margin: 8mm 10mm;
    }
  }
`;

export default function BrochureDev() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PRINT_STYLES }} />

      <div className="wa-dev-bar">
        <span>we_are_solutions · servicios digitales · 2026</span>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            className="wa-dev-btn wa-dev-btn-ghost"
            onClick={() => { window.location.href = '/'; }}
          >
            ← Volver al sitio
          </button>
          <button className="wa-dev-btn" onClick={() => window.print()}>
            <Download size={13} strokeWidth={2} />
            Exportar PDF / PNG
          </button>
        </div>
      </div>

      <div className="wa-dev-brochure">

        {/* ── Header ── */}
        <div style={{
          padding: '22px 32px',
          borderBottom: `2px solid ${C.accent}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <img
            src="/images/brand.png"
            alt="We Are Solutions"
            style={{ height: 80, objectFit: 'contain', display: 'block' }}
          />
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 9, color: C.accent, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 4 }}>
              // Servicios Digitales
            </div>
            <div style={{ fontSize: 9, color: C.textMuted, letterSpacing: '0.12em' }}>
              2026 · Santiago, Chile
            </div>
          </div>
        </div>

        {/* ── Hero ── */}
        <div style={{
          padding: '36px 32px 30px',
          background: C.panel,
          borderBottom: `1px solid ${C.border}`,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div aria-hidden="true" style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            opacity: 0.35,
            maskImage: 'radial-gradient(ellipse at 0% 50%, black 10%, transparent 65%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 0% 50%, black 10%, transparent 65%)',
          }} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 10, color: C.textMuted, letterSpacing: '0.2em', marginBottom: 18, textTransform: 'uppercase' }}>
              {'// Soluciones tecnológicas para tu empresa'}
            </div>
            <div style={{ fontSize: 50, fontWeight: 600, color: C.text, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 18 }}>
              Software que hace<br />
              <span style={{ color: C.accent }}>crecer</span> tu negocio.
            </div>
            <div style={{ fontSize: 13, color: C.textSoft, lineHeight: 1.75, maxWidth: 560 }}>
              Desarrollo a medida, control de stock e inventario y alojamiento web profesional.
              Todo en un solo equipo, con soporte continuo y sin letra chica.
            </div>
            <div style={{ marginTop: 22, display: 'flex', gap: 8 }}>
              {['Desarrollo', 'Stock & Productos', 'Hosting'].map((tag) => (
                <span key={tag} style={{
                  fontSize: 10, padding: '4px 12px',
                  border: `1px solid ${C.accent}`,
                  color: C.accent, letterSpacing: '0.05em',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Services ── */}
        {SERVICES.map((s, i) => (
          <div key={s.num} style={{
            padding: '26px 32px',
            borderBottom: `1px solid ${C.border}`,
            background: i % 2 === 0 ? C.bg : C.panel,
            display: 'grid',
            gridTemplateColumns: '60px 1fr',
            gap: 20,
            alignItems: 'start',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 48, height: 48,
                border: `1px solid ${C.accent}`,
                background: `${C.accent}12`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <s.Icon size={22} color={C.accent} strokeWidth={1.5} />
              </div>
              <div style={{ fontSize: 9, color: C.textMuted, letterSpacing: '0.1em' }}>
                [{s.num}]
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
                <div style={{ fontSize: 17, fontWeight: 600, color: C.text, letterSpacing: '-0.01em' }}>
                  {s.title}
                </div>
                <div style={{ fontSize: 10, color: C.accent, letterSpacing: '0.06em' }}>
                  {s.subtitle}
                </div>
              </div>
              <p style={{ fontSize: 11, color: C.textSoft, lineHeight: 1.75, marginBottom: 14 }}>
                {s.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {s.tags.map((t) => (
                  <span key={t} style={{
                    fontSize: 9, padding: '3px 8px',
                    border: `1px solid ${C.border}`,
                    color: C.textMuted, letterSpacing: '0.04em',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* ── CTA ── */}
        <div style={{
          padding: '30px 32px',
          background: C.panelAlt,
          borderBottom: `1px solid ${C.border}`,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 32,
          alignItems: 'center',
        }}>
          <div>
            <div style={{ fontSize: 10, color: C.textMuted, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              {'// ¿Tienes un proyecto?'}
            </div>
            <div style={{ fontSize: 28, fontWeight: 600, color: C.text, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 12 }}>
              Conversemos.<br />
              <span style={{ color: C.accent }}>Sin costo.</span>
            </div>
            <div style={{ fontSize: 11, color: C.textSoft, lineHeight: 1.7 }}>
              Cuéntanos qué necesitas resolver.
              Respondemos en menos de 24 horas hábiles.
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {([
              { Icon: Mail,  label: 'hola@wearesolutions.cl' },
              { Icon: Phone, label: '+56 9 77176396' },
              { Icon: Globe, label: 'wearesolutions.cl' },
            ] as { Icon: LucideIcon; label: string }[]).map(({ Icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12, color: C.textSoft }}>
                <div style={{
                  width: 32, height: 32, flexShrink: 0,
                  border: `1px solid ${C.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={13} color={C.accent} strokeWidth={1.5} />
                </div>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div style={{
          padding: '14px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: C.bg,
          borderTop: `1px solid ${C.border}`,
        }}>
          <div style={{ fontSize: 9, color: C.textMuted, letterSpacing: '0.06em' }}>
            © 2026 We Are Solutions · Santiago, Chile · all systems operational
          </div>
          <div style={{ fontSize: 9, color: C.accentDim, letterSpacing: '0.06em' }}>
            <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: C.accentDim, marginRight: 5, verticalAlign: 'middle' }} />
            ONLINE · 99.9% uptime
          </div>
        </div>

      </div>
    </>
  );
}
