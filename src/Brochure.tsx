import React from 'react';
import {
  Shield, Code2, Cloud, Layers, Users, Lightbulb,
  Mail, Phone, MapPin, Download, type LucideIcon,
} from 'lucide-react';

// ── Tokens ────────────────────────────────────────────────────────

const C = {
  bg:          '#0c0c0c',
  panel:       '#131313',
  panelAlt:    '#1a1a1a',
  border:      '#242424',
  borderAccent:'#d4ff3a',
  text:        '#e8e8e8',
  textSoft:    '#a3a3a3',
  textMuted:   '#505050',
  accent:      '#d4ff3a',
  accentDim:   '#a3cc1f',
};

// ── Static data ───────────────────────────────────────────────────

interface Svc { code: string; name: string; desc: string; tags: string[]; Icon: LucideIcon }

const SERVICES: Svc[] = [
  {
    code: '01', name: 'Ciberseguridad', Icon: Shield,
    desc: 'Auditorías, pentesting, hardening y SOC 24/7. Respuesta a incidentes y cumplimiento ISO 27001.',
    tags: ['Pentesting', 'SOC', 'ISO 27001'],
  },
  {
    code: '02', name: 'Desarrollo a Medida', Icon: Code2,
    desc: 'Apps web y móvil con stacks modernos. De MVP a producción crítica con entrega continua.',
    tags: ['React', 'Angular', 'Spring Boot'],
  },
  {
    code: '03', name: 'Cloud & DevOps', Icon: Cloud,
    desc: 'Migraciones, arquitectura cloud-native y automatización de pipelines en AWS.',
    tags: ['AWS', 'Kubernetes', 'Terraform'],
  },
  {
    code: '04', name: 'SaaS', Icon: Layers,
    desc: 'Productos SaaS escalables: multi-tenant, billing, observabilidad y compliance.',
    tags: ['Multi-tenant', 'Billing', 'Observability'],
  },
  {
    code: '05', name: 'Outsourcing', Icon: Users,
    desc: 'Equipos dedicados que se integran a tu operación. Senior, ágiles, en tu zona horaria.',
    tags: ['Squads', 'Staff Aug.', 'Nearshore'],
  },
  {
    code: '06', name: 'Consultoría TI', Icon: Lightbulb,
    desc: 'Estrategia tecnológica, modernización de legacy y transformación digital end-to-end.',
    tags: ['Strategy', 'Legacy', 'Roadmap'],
  },
];

const STATS = [
  { val: '12+',   label: 'años en la industria' },
  { val: '20+',   label: 'proyectos entregados'  },
  { val: '99.9%', label: 'uptime promedio'        },
  { val: '0',     label: 'brechas en clientes 2025' },
];

const CLIENTS = [
  { name: 'AFP Habitat',   sub: 'Pensiones · 8+ años'      },
  { name: 'Seguros SURA',  sub: 'Seguros · Plataformas'     },
  { name: 'Endura APP',    sub: 'Mobile · App fitness'      },
  { name: 'GrainLog',      sub: 'Logística de granos'       },
  { name: 'Bariloche',     sub: 'Food & Coffee · POS'       },
];

const WG_PRODUCTS = ['Firebox NGFW', 'AuthPoint MFA', 'Endpoint Security', 'DNSWatchGO'];

const CONTACT = [
  { Icon: Mail,   label: 'hola@wearesolutions.cl' },
  { Icon: Phone,  label: '+56 9 8978 2283'          },
  { Icon: MapPin, label: 'Santiago, Chile · GMT-4'  },
] as { Icon: LucideIcon; label: string }[];

// ── Print + base styles ───────────────────────────────────────────

const PRINT_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html, body { background: #080808; }

  .wa-brochure {
    width: 794px;
    min-height: 1123px;
    margin: 32px auto;
    background: ${C.bg};
    font-family: 'IBM Plex Mono', monospace;
    color: ${C.text};
    position: relative;
  }

  .wa-export-bar {
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

  .wa-btn {
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

  .wa-btn-ghost {
    background: transparent;
    color: ${C.textSoft};
    border: 1px solid ${C.border};
  }

  @media print {
    html, body { background: white; }

    .wa-export-bar { display: none !important; }

    .wa-brochure {
      width: 100%;
      margin: 0;
      min-height: unset;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    @page {
      size: A4 portrait;
      margin: 10mm 12mm;
    }
  }
`;

// ── Component ─────────────────────────────────────────────────────

export default function Brochure() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PRINT_STYLES }} />

      {/* Floating export bar */}
      <div className="wa-export-bar">
        <span>we_are_solutions · brochure 2026</span>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            className="wa-btn wa-btn-ghost"
            onClick={() => { window.location.href = '/'; }}
          >
            ← Volver al sitio
          </button>
          <button className="wa-btn" onClick={() => window.print()}>
            <Download size={13} strokeWidth={2} />
            Exportar PDF / PNG
          </button>
        </div>
      </div>

      {/* A4 page */}
      <div className="wa-brochure" style={{ marginTop: 80 }}>

        {/* ── Header ── */}
        <div style={{
          padding: '28px 32px',
          borderBottom: `2px solid ${C.accent}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
          <div>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <div style={{ fontSize: 10, color: C.textMuted, letterSpacing: '0.22em', marginBottom: 8 }}>
              // COMPANY PROFILE · 2026
            </div>
            <img
              src="/images/brand.png"
              alt="We Are Solutions"
              style={{ height: 80, objectFit: 'contain', display: 'block' }}
            />
            <div style={{ fontSize: 12, color: C.textSoft, marginTop: 6, letterSpacing: '0.02em' }}>
              Ciberseguridad · Desarrollo · Cloud · Consultoría TI
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            {CONTACT.map(({ Icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 6, fontSize: 11, color: C.textSoft, marginBottom: 4 }}>
                <Icon size={11} color={C.accentDim} strokeWidth={1.5} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderBottom: `1px solid ${C.border}` }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: '14px 20px',
              borderRight: i < 3 ? `1px solid ${C.border}` : 'none',
              textAlign: 'center',
              background: C.panelAlt,
            }}>
              <div style={{ fontSize: 28, fontWeight: 500, color: C.accent, letterSpacing: '-0.03em', lineHeight: 1 }}>
                {s.val}
              </div>
              <div style={{ fontSize: 9, color: C.textMuted, marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── WatchGuard Partner ── */}
        <div style={{ padding: '22px 32px 18px' }}>
          <div style={{ fontSize: 9, color: C.accent, letterSpacing: '0.22em', marginBottom: 12, textTransform: 'uppercase' }}>
            // Partner oficial · Tecnología
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', border: `1px solid ${C.border}` }}>
            <div style={{
              background: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '24px 28px',
              borderRight: `1px solid ${C.border}`,
            }}>
              <img src="/img.png" alt="WatchGuard Technologies" style={{ maxWidth: 150, maxHeight: 56, objectFit: 'contain', display: 'block' }} />
            </div>
            <div style={{ padding: '18px 22px', background: C.panel, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, border: `1px solid ${C.accent}`, padding: '2px 8px', fontSize: 9, color: C.accent, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: C.accent, display: 'inline-block' }} />
                  Partner Oficial
                </span>
                <span style={{ fontSize: 9, color: C.textMuted, letterSpacing: '0.1em' }}>[CIBERSEGURIDAD · REDES · ENDPOINTS]</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: C.text, letterSpacing: '-0.01em' }}>WatchGuard Technologies</div>
              <p style={{ fontSize: 10, color: C.textSoft, lineHeight: 1.65 }}>
                Implementamos y gestionamos soluciones de seguridad perimetral certificadas: firewalls de próxima generación, protección de endpoints y autenticación multifactor. Acceso a soporte técnico de nivel 1 y precios exclusivos para proyectos en Chile y LATAM.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {WG_PRODUCTS.map((t) => (
                  <span key={t} style={{ fontSize: 9, padding: '2px 7px', border: `1px solid ${C.border}`, color: C.textMuted, letterSpacing: '0.04em' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Services ── */}
        <div style={{ padding: '0 32px 18px' }}>
          <div style={{ fontSize: 9, color: C.accent, letterSpacing: '0.22em', marginBottom: 14, textTransform: 'uppercase' }}>
            // Servicios · 06
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: `1px solid ${C.border}` }}>
            {SERVICES.map((s, i) => {
              const col = i % 3;
              const row = Math.floor(i / 3);
              return (
                <div key={s.code} style={{
                  padding: '16px 16px 18px',
                  borderRight:  col < 2 ? `1px solid ${C.border}` : 'none',
                  borderBottom: row < 1 ? `1px solid ${C.border}` : 'none',
                  background: C.panel,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
                    <div style={{
                      width: 26, height: 26,
                      border: `1px solid ${C.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <s.Icon size={13} color={C.accent} strokeWidth={1.5} />
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 600, color: C.text, letterSpacing: '-0.01em' }}>
                      {s.name}
                    </span>
                  </div>
                  <p style={{ fontSize: 10, color: C.textSoft, lineHeight: 1.65, marginBottom: 10 }}>
                    {s.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {s.tags.map((t) => (
                      <span key={t} style={{
                        fontSize: 9, padding: '2px 6px',
                        border: `1px solid ${C.border}`,
                        color: C.textMuted, letterSpacing: '0.04em',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Clients ── */}
        <div style={{ padding: '0 32px 18px' }}>
          <div style={{ fontSize: 9, color: C.accent, letterSpacing: '0.22em', marginBottom: 12, textTransform: 'uppercase' }}>
            // Clientes de confianza
          </div>
          <div style={{ display: 'flex', border: `1px solid ${C.border}` }}>
            {CLIENTS.map((c, i) => (
              <div key={c.name} style={{
                flex: 1,
                padding: '12px 10px',
                borderRight: i < CLIENTS.length - 1 ? `1px solid ${C.border}` : 'none',
                textAlign: 'center',
                background: C.panelAlt,
              }}>
                <div style={{ fontSize: 11, color: C.accent, marginBottom: 5 }}>◆</div>
                <div style={{ fontSize: 10, color: C.text, fontWeight: 500, letterSpacing: '0.01em', marginBottom: 3 }}>{c.name}</div>
                <div style={{ fontSize: 8, color: C.textMuted, letterSpacing: '0.04em', lineHeight: 1.4 }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div style={{
          borderTop: `1px solid ${C.border}`,
          padding: '14px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: C.panelAlt,
        }}>
          <div style={{ fontSize: 9, color: C.textMuted, letterSpacing: '0.06em' }}>
            © 2026 We Are Solutions · Santiago, Chile · all systems operational
          </div>
          <div style={{ display: 'flex', gap: 18, fontSize: 9, color: C.textSoft }}>
            <span>hola@wearesolutions.cl</span>
            <span>+56 9 8978 2283</span>
            <span style={{ color: C.accentDim }}>● ONLINE · 99.9%</span>
          </div>
        </div>

      </div>
    </>
  );
}
