import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetail({ serviceSlug, go }) {
  const root = useRef(null);

  const service = SERVICES.find(s => s.slug === serviceSlug);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.g-up', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 }
      );
    }, [serviceSlug]);
    return () => ctx.revert();
  }, [serviceSlug]);

  if (!service) {
    return (
      <div style={{ padding: '180px 56px 100px', textAlign: 'center' }}>
        <h1 className="t-h2">Service Not Found</h1>
        <button className="btn btn--primary" style={{ marginTop: '24px' }} onClick={() => go('services')}>Back to Services</button>
      </div>
    );
  }

  return (
    <div ref={root}>
      {/* ─── PAGE HERO ─── */}
      <div className="ph">
        <div className="ph__inner">
          <div className="ph__eyebrow">
            <span className="t-label" style={{ cursor: 'pointer' }} onClick={() => go('services')}>Services</span> · <span className="t-label">{service.title}</span>
          </div>
          <h1 className="t-display ph__title">{service.title}</h1>
        </div>
      </div>

      <div style={{ height: '50vh', minHeight: '300px', overflow: 'hidden', position: 'relative' }}>
        <img src={`/${service.images.hero}`} alt={service.title} className="img-fill" onError={(e) => { e.target.src = '/railway_hero_bg.png'; }} />
      </div>

      {/* ─── MAIN INFO ─── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap split split--60-40" style={{ gap: '80px', alignItems: 'center' }}>
          <div className="g-up">
            <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>{service.category}</span>
            <h2 className="t-h2" style={{ marginBottom: '24px' }}>{service.overviewTitle}</h2>
            {service.paragraphs.map((p, i) => (
              <p key={i} className="t-body" style={{ marginBottom: '20px' }}>{p}</p>
            ))}
            <button className="btn btn--primary" style={{ marginTop: '16px' }} onClick={() => go('contact')}>Consult Our Engineers →</button>
          </div>
          <div className="img-wrap g-clip" style={{ height: '400px' }}>
            <img className="img-fill" src={`/${service.images.overview}`} alt={service.title} onError={(e) => { e.target.src = '/pcb-macro.jpg'; }} />
          </div>
        </div>
      </section>

      {/* ─── FEATURES / CAPABILITIES ─── */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="wrap">
          <h2 className="t-h3" style={{ marginBottom: '48px' }}>Capabilities</h2>
          <div className="g-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {service.features.map((feat, idx) => (
              <div key={idx} style={{ padding: '32px', background: '#fff', border: '1px solid var(--rule)' }}>
                <span className="t-label" style={{ color: 'var(--steel)' }}>CAPABILITY 0{idx + 1}</span>
                <h3 className="t-h3" style={{ fontSize: '1.25rem', margin: '12px 0' }}>{feat.title}</h3>
                <p className="t-body" style={{ fontSize: '0.875rem' }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECHNICAL STANDARDS / SPECS ─── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <h2 className="t-h3" style={{ marginBottom: '32px' }}>Division Specifications</h2>
          <div className="g-up" style={{ maxWidth: '800px' }}>
            <table className="spec">
              <tbody>
                {service.specs.map((sp, idx) => (
                  <tr key={idx}>
                    <td>{sp.name}</td>
                    <td>{sp.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── DOWNLOADS ─── */}
      {service.downloads && service.downloads.length > 0 && (
        <section className="section" style={{ background: 'var(--paper)', borderTop: '1px solid var(--rule)' }}>
          <div className="wrap">
            <h2 className="t-h3" style={{ marginBottom: '32px' }}>Division Profiles &amp; References</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="g-up">
              {service.downloads.map((doc, idx) => (
                <a key={idx} href={doc.url} className="btn btn--outline" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '24px', background: '#fff', gap: '8px' }}>
                  <span className="t-label" style={{ fontSize: '0.55rem', color: 'var(--steel)' }}>{doc.type}</span>
                  <span style={{ fontSize: '0.9375rem', fontWeight: '500', color: 'var(--ink)' }}>{doc.name}</span>
                  <span className="t-body" style={{ fontSize: '0.75rem' }}>Size: {doc.size}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
