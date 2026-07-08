import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Terms({ go }) {
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
          <div className="ph__eyebrow"><span className="t-label">Legal</span></div>
          <h1 className="t-display ph__title">Terms of <em>Use</em></h1>
        </div>
      </div>

      {/* ─── CONTENT ─── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap g-up" style={{ maxWidth: '800px' }}>
          <p className="t-body t-body--lg" style={{ marginBottom: '32px' }}>
            LorVen Systems Pvt. Ltd. provides this website for informational purposes regarding our safety-critical railway systems, design services, and manufacturing capabilities.
          </p>

          <h3 className="t-h3" style={{ fontSize: '1.5rem', marginBottom: '16px', marginTop: '40px' }}>Intellectual Property</h3>
          <p className="t-body" style={{ marginBottom: '24px' }}>
            All product specifications, schematics, engineering descriptions, trademark logos, vector graphics, and media assets displayed on this site are the exclusive intellectual property of LorVen Systems Pvt. Ltd. and are protected under Indian and international copyright laws.
          </p>

          <h3 className="t-h3" style={{ fontSize: '1.5rem', marginBottom: '16px', marginTop: '40px' }}>Warranty Disclaimer</h3>
          <p className="t-body" style={{ marginBottom: '24px' }}>
            While we strive to maintain accurate product descriptions, documentation details, and standards compliance parameters, all content on this site is provided "as is" without representation or warranty of any kind. Official system configurations, certifications, and project deliveries are subject to contract-specific terms.
          </p>

          <h3 className="t-h3" style={{ fontSize: '1.5rem', marginBottom: '16px', marginTop: '40px' }}>Governing Law</h3>
          <p className="t-body" style={{ marginBottom: '24px' }}>
            Any disputes arising from the use of this website or reliance on its contents shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts of Hyderabad/Secunderabad, Telangana.
          </p>

          <div style={{ marginTop: '56px', borderTop: '1px solid var(--rule)', paddingTop: '28px' }}>
            <p className="t-body" style={{ fontSize: '0.75rem', color: 'var(--ash)' }}>
              © 2026 LorVen Systems Pvt. Ltd. All rights reserved.<br />
              Plot 14, IDA Mallapur, Hyderabad 500076, Telangana, India
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
