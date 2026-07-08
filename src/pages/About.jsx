import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function About({ go }) {
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
      {/* Section 1: Hero */}
      <div className="ph">
        <div className="ph__inner">
          <div className="ph__eyebrow"><span className="t-label">ABOUT</span></div>
          <h1 className="t-display ph__title">Engineering Confidence.</h1>
          <p className="t-body t-body--lg" style={{ marginTop: '16px', maxWidth: '800px' }}>
            Delivering mission-critical electronics and electrical integration for industries where failure is not an option.
          </p>
        </div>
      </div>

      <div style={{ height: '60vh', minHeight: '380px', overflow: 'hidden', position: 'relative' }} className="g-clip">
        <img className="img-fill" src="/loco-hero-real.jpg" alt="Locomotive inside service shed" onError={(e) => { e.target.src = '/railway_hero_bg.png'; }} />
      </div>

      {/* Section 2: Page Index Links */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--rule)', padding: '24px 0' }}>
        <div className="wrap" style={{ display: 'flex', gap: '40px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div>
            <strong className="t-label" style={{ display: 'block', marginBottom: '8px' }}>Corporate Overview</strong>
            <span className="t-body--sm" style={{ color: 'var(--steel)' }}>Company Overview · Vision, Mission &amp; Purpose</span>
          </div>
          <div>
            <strong className="t-label" style={{ display: 'block', marginBottom: '8px' }}>Operations &amp; Facilities</strong>
            <span className="t-body--sm" style={{ color: 'var(--steel)' }}>Manufacturing &amp; Quality · Infrastructure Profile</span>
          </div>
          <div>
            <strong className="t-label" style={{ display: 'block', marginBottom: '8px' }}>Governance</strong>
            <span className="t-body--sm" style={{ color: 'var(--steel)' }}>Certifications · Leadership Message</span>
          </div>
        </div>
      </section>

      {/* Section 3: Company Overview */}
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="wrap split split--60-40" style={{ gap: '80px', alignItems: 'center' }}>
          <div className="g-up">
            <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>Corporate Overview</span>
            <h2 className="t-h2" style={{ marginBottom: '28px' }}>A quiet practice in mission-critical engineering.</h2>
            <p className="t-body t-body--lg" style={{ marginBottom: '20px' }}>
              For over fifteen years, LorVen Systems has built the unseen layer of India's rolling stock — circuit boards that survive a million cycles, cabinets that earn certification on the first attempt, and installations that hand over on time.
            </p>
            <p className="t-body">
              We work with national operators, OEMs and integrators across mainline, metro, and freight. Our discipline is patience: every assembly is engineered for the operating envelope it will actually serve.
            </p>
          </div>
          <div className="img-wrap g-clip" style={{ height: '400px' }}>
            <img className="img-fill" src="/pcb-macro.jpg" alt="PCB Macro trace lines" />
          </div>
        </div>
      </section>

      {/* Section 4: Vision, Mission & Purpose */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
            <div className="g-up" style={{ borderTop: '1px solid var(--rule)', paddingTop: '24px' }}>
              <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>The Vision</span>
              <h3 className="t-h3" style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Safety-Critical Tech</h3>
              <p className="t-body">To build a globally respected technology company delivering world-class systems for safety-critical and mission-critical industries.</p>
            </div>
            <div className="g-up" style={{ borderTop: '1px solid var(--rule)', paddingTop: '24px' }}>
              <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>The Mission</span>
              <h3 className="t-h3" style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Disciplined Execution</h3>
              <p className="t-body">To create reliable, innovative, and high-performance products that advance transportation, infrastructure, aerospace, and defence through engineering excellence and disciplined execution.</p>
            </div>
            <div className="g-up" style={{ borderTop: '1px solid var(--rule)', paddingTop: '24px' }}>
              <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>The Purpose</span>
              <h3 className="t-h3" style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Absolute Reliability</h3>
              <p className="t-body">Engineering technology that improves safety, reliability, and performance where failure is not an option in active daily operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 & 6: Manufacturing & Infrastructure Profile */}
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="wrap">
          <div className="split split--60-40" style={{ gap: '80px', alignItems: 'center', marginBottom: '64px' }}>
            <div className="g-up">
              <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>Operations &amp; Facilities</span>
              <h2 className="t-h2" style={{ marginBottom: '28px' }}>End-to-end capability. Absolute control.</h2>
              <p className="t-body" style={{ marginBottom: '16px' }}>
                LorVen operates dual facilities to separate R&D from high-volume production. Our Hyderabad hub focuses on design engineering, rapid prototyping, and environmental stress testing.
              </p>
              <p className="t-body">
                Our Bengaluru plant is a dedicated high-mix manufacturing center featuring IPC-A-610 Class 3 qualified SMT lines, cleanroom assembly, and comprehensive end-of-line functional validation bays.
              </p>
            </div>
            <div className="img-wrap g-clip" style={{ height: '320px' }}>
              <img className="img-fill" src="/smt-line.jpg" alt="SMT robotic assembly line" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }} className="g-up">
            {[
              { val: '40,000 SQ. FT.', detail: 'Manufacturing and assembly floor space.', label: 'Facility Size' },
              { val: 'Class 3', detail: 'IPC-A-610 certified assembly lines.', label: 'Standard Compliance' },
              { val: 'Hyderabad', detail: 'Rapid prototyping & environmental testing center.', label: 'R&D Core' }
            ].map((infra, idx) => (
              <div key={idx} style={{ background: '#fff', padding: '32px', border: '1px solid var(--rule)' }}>
                <span className="t-label" style={{ color: 'var(--steel)' }}>{infra.label}</span>
                <h3 className="t-display" style={{ fontSize: '2.5rem', fontWeight: '400', margin: '16px 0 8px' }}>{infra.val}</h3>
                <p className="t-body" style={{ fontSize: '0.875rem' }}>{infra.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Quality & Certifications */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="g-up" style={{ marginBottom: '56px' }}>
            <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>Quality &amp; Standards</span>
            <h2 className="t-h2">Certified for the mainline.</h2>
            <p className="t-body" style={{ marginTop: '16px', maxWidth: '800px' }}>
              Quality is a documentation practice as much as a manufacturing one. Every assembly carries a route card and a paper trail that outlives the warranty.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="g-up">
            {[
              { label: 'Management', title: 'ISO 9001:2015', desc: 'Certified quality management systems for design, manufacturing and service.' },
              { label: 'Rail Industry', title: 'IRIS Rev. 03', desc: 'Compliance with the International Railway Industry Standard for rolling stock.' },
              { label: 'Environment', title: 'ISO 14001:2015', desc: 'Environmental management standards actively governing our production facilities.' },
              { label: 'Approval', title: 'RDSO', desc: 'Approved vendor for Indian Railways Research Designs & Standards Organisation.' }
            ].map((card, idx) => (
              <div key={idx} style={{ padding: '24px', borderTop: '1px solid var(--rule)' }}>
                <span className="t-label" style={{ color: 'var(--steel)' }}>{card.label}</span>
                <h3 className="t-h3" style={{ fontSize: '1.25rem', margin: '12px 0' }}>{card.title}</h3>
                <p className="t-body" style={{ fontSize: '0.875rem' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Leadership Message */}
      <section className="panorama g-clip" style={{ height: '50vh' }}>
        <img className="img-fill" src="/depot.jpg" alt="Locomotive service depot background" />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(13,13,13,.8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '56px'
        }}>
          <div className="wrap g-up" style={{ maxWidth: '800px' }}>
            <span className="t-label" style={{ color: 'rgba(245,244,240,.6)', display: 'block', marginBottom: '24px' }}>Leadership Message</span>
            <blockquote className="t-quote" style={{ color: '#F5F4F0', fontSize: '1.75rem', marginBottom: '20px', lineHeight: 1.4 }}>
              "When an operator deploys our system on the mainline, they are purchasing peace of mind. Our responsibility is to ensure that trust is never broken."
            </blockquote>
            <cite style={{ fontStyle: 'normal', color: 'rgba(245,244,240,.7)' }}>
              <strong style={{ display: 'block', fontSize: '1rem', color: '#F5F4F0' }}>A. Ramaswamy</strong>
              <span className="t-label" style={{ fontSize: '0.625rem' }}>Managing Director</span>
            </cite>
          </div>
        </div>
      </section>

      {/* Section 9: CTA Section */}
      <section className="section" style={{ background: 'var(--paper)', borderTop: '1px solid var(--rule)' }}>
        <div className="wrap g-up" style={{ textAlign: 'center' }}>
          <h2 className="t-h2" style={{ marginBottom: '16px' }}>Let's engineer the future together.</h2>
          <p className="t-body" style={{ marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Whether your project demands signalling systems, locomotive technologies or mission-critical engineering solutions, LorVen Systems is ready to collaborate.
          </p>
          <button className="btn btn--primary" onClick={() => go('contact')}>Contact Our Engineering Team →</button>
        </div>
      </section>
    </div>
  );
}
