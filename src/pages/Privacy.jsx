import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Privacy({ go }) {
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
          <h1 className="t-display ph__title">Privacy Policy &amp; <em>Disclosures</em></h1>
        </div>
      </div>

      {/* ─── CONTENT ─── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap g-up" style={{ maxWidth: '800px' }}>
          <p className="t-body t-body--lg" style={{ marginBottom: '32px' }}>
            LorVen Systems Pvt. Ltd. is committed to protecting corporate data, engineering schematics, and individual communication details shared with us through our website.
          </p>

          <h3 className="t-h3" style={{ fontSize: '1.5rem', marginBottom: '16px', marginTop: '40px' }}>Data Collection &amp; Scope</h3>
          <p className="t-body" style={{ marginBottom: '24px' }}>
            We only collect information voluntarily submitted through our project inquiry and careers forms (e.g. name, email, company, and resume uploads). This data is stored securely and used solely by our engineering and HR teams to handle your request.
          </p>

          <h3 className="t-h3" style={{ fontSize: '1.5rem', marginBottom: '16px', marginTop: '40px' }}>Security &amp; Confidentiality</h3>
          <p className="t-body" style={{ marginBottom: '24px' }}>
            LorVen Systems implements industry-standard data protections. We do not sell, trade, or share any corporate contact details, drawing files, or engineering specifications with third parties unless required by law.
          </p>

          <h3 className="t-h3" style={{ fontSize: '1.5rem', marginBottom: '16px', marginTop: '40px' }}>Contact Information</h3>
          <p className="t-body" style={{ marginBottom: '24px' }}>
            For privacy inquiries or requests regarding stored personal data, please contact us at: <strong style={{ color: 'var(--ink)' }}>legal@lorvensystems.com</strong>.
          </p>

          <div style={{ marginTop: '56px', borderTop: '1px solid var(--rule)', paddingTop: '28px' }}>
            <p className="t-body" style={{ fontSize: '0.75rem', color: 'var(--ash)' }}>
              Last updated: June 25, 2026<br />
              LorVen Systems Pvt. Ltd. · Secunderabad, India
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
