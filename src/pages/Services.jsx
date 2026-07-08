import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage({ go }) {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.g-up', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      {/* ─── PAGE HERO ─── */}
      <div className="ph">
        <div className="ph__inner">
          <div className="ph__eyebrow"><span className="t-label">Services</span></div>
          <h1 className="t-display ph__title">End-to-end engineering <em>lifecycle</em> support</h1>
        </div>
      </div>

      {/* ─── MAIN OVERVIEW ─── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="g-up" style={{ marginBottom: '72px', maxWidth: '800px' }}>
            <h2 className="t-h2" style={{ marginBottom: '24px' }}>From drawing board to <em>maintenance sheds</em></h2>
            <p className="t-body t-body--lg">
              LorVen Systems doesn't just manufacture hardware. We partner with railway authorities and locomotive builders from the initial design and simulation stages, through Class-3 cleanroom SMT production, and all the way to physical field commissioning.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            {SERVICES.map((s, idx) => (
              <div key={s.slug} className="g-up" style={{ padding: '48px', background: 'var(--paper)', borderTop: '1px solid var(--rule)' }}>
                <span className="t-label" style={{ display: 'block', marginBottom: '24px' }}>0{idx + 1} — Division</span>
                <h3 className="t-h3" style={{ marginBottom: '16px' }}>{s.title}</h3>
                <p className="t-body" style={{ marginBottom: '32px' }}>{s.description}</p>
                <button className="btn btn--primary" onClick={() => go(`services/${s.slug}`)}>Explore Service →</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
