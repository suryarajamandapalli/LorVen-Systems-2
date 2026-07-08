import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CATEGORIES } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Arr = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Products({ go }) {
  const root = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.g-up').forEach(el => gsap.fromTo(el, { y: 56, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 84%' } }));
      gsap.utils.toArray('.g-clip').forEach(el => gsap.fromTo(el, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1.3, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 82%' } }));
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      <div className="ph">
        <div className="ph__inner">
          <div className="ph__eyebrow"><span className="t-label">Product Portfolio</span></div>
          <h1 className="t-display ph__title">Three divisions.<br /><em>One standard of excellence.</em></h1>
        </div>
      </div>

      <section style={{ background: '#fff' }}>
        {CATEGORIES.map((cat, idx) => (
          <div key={cat.slug}>
            <div className="g-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '480px' }}>
              {idx % 2 === 0 ? (
                <>
                  <div className="img-wrap g-clip">
                    <img className="img-fill" src={`/${cat.heroImage}`} alt={cat.title} onError={(e) => { e.target.src = '/railway_hero_bg.png'; }} />
                  </div>
                  <div style={{ padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff' }}>
                    <span className="t-label" style={{ display: 'block', marginBottom: '18px', color: 'var(--ash)' }}>DIVISION 0{idx + 1}</span>
                    <h3 className="t-h3" style={{ marginBottom: '16px', color: 'var(--ink)' }}>{cat.title}</h3>
                    <p className="t-body" style={{ marginBottom: '28px' }}>{cat.description}</p>
                    <button className="btn btn--primary" onClick={() => go(`products/${cat.slug}`)}>Explore Category <Arr /></button>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--ink-2)' }}>
                    <span className="t-label" style={{ display: 'block', marginBottom: '18px', color: 'rgba(245,244,240,.35)' }}>DIVISION 0{idx + 1}</span>
                    <h3 className="t-h3" style={{ marginBottom: '16px', color: '#F5F4F0' }}>{cat.title}</h3>
                    <p className="t-body" style={{ marginBottom: '28px', color: 'rgba(245,244,240,.5)' }}>{cat.description}</p>
                    <button className="btn btn--primary" onClick={() => go(`products/${cat.slug}`)}>Explore Category <Arr /></button>
                  </div>
                  <div className="img-wrap g-clip">
                    <img className="img-fill" src={`/${cat.heroImage}`} alt={cat.title} onError={(e) => { e.target.src = '/railway_hero_bg.png'; }} />
                  </div>
                </>
              )}
            </div>
            {idx < CATEGORIES.length - 1 && <div className="rule-h" />}
          </div>
        ))}
      </section>

      <section className="band section">
        <div className="wrap g-up">
          <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>Quality assurance</span>
          <h2 className="t-h2" style={{ color: '#fff', marginBottom: '56px' }}>Tested to exceed the harshest standards</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '40px' }}>
            {[
              ['EN 50155','Electronic equipment in railway rolling stock — onboard qualification standard.'],
              ['IEC 61373','Vibration and shock testing for equipment installed on railway vehicles.'],
              ['IPC-A-610 Class 3','Highest acceptability class for electronic assemblies — mission-critical hardware.']
            ].map(([s,d], i) => (
              <div key={s} style={{ paddingTop: '32px', borderTop: '1px solid rgba(245,244,240,.2)', paddingLeft: i > 0 ? '40px' : 0, borderLeft: i > 0 ? '1px solid rgba(245,244,240,.12)' : 'none' }}>
                <h3 className="t-h3" style={{ color: '#F5F4F0', marginBottom: '10px' }}>{s}</h3>
                <p className="t-body" style={{ color: 'rgba(245,244,240,.55)' }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
