import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact({ go }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you. Your consultation form has been submitted to LorVen Systems.');
  };

  return (
    <div ref={root}>
      {/* ─── PAGE HERO ─── */}
      <div className="ph">
        <div className="ph__inner">
          <div className="ph__eyebrow"><span className="t-label">Contact Us</span></div>
          <h1 className="t-display ph__title">Connect with our <em>engineering</em> teams</h1>
        </div>
      </div>

      {/* ─── CONTACT SECTION ─── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="split split--60-40" style={{ gap: '80px' }}>
            {/* Consultation Form */}
            <div className="g-up">
              <h2 className="t-h3" style={{ marginBottom: '32px' }}>Submit Consultation Form</h2>
              <form onSubmit={handleSubmit} className="form">
                <div className="form__group">
                  <label className="form__label">Full Name</label>
                  <input type="text" className="form__input" required placeholder="Full Name" />
                </div>
                <div className="form__group">
                  <label className="form__label">Company</label>
                  <input type="text" className="form__input" required placeholder="Company Name" />
                </div>
                <div className="form__group">
                  <label className="form__label">Email Address</label>
                  <input type="email" className="form__input" required placeholder="Email Address" />
                </div>
                <div className="form__group">
                  <label className="form__label">Phone Number</label>
                  <input type="tel" className="form__input" required placeholder="Phone Number" />
                </div>
                <div className="form__group">
                  <label className="form__label">Country / Region</label>
                  <input type="text" className="form__input" required placeholder="Country / Region" />
                </div>
                <div className="form__group">
                  <label className="form__label">Subject / Division</label>
                  <select className="form__select" defaultValue="snt">
                    <option value="snt">Signalling &amp; Telecom</option>
                    <option value="electric-locomotive">Electric Locomotive</option>
                    <option value="wagons">Coaches &amp; Wagons</option>
                    <option value="services">Engineering Services</option>
                  </select>
                </div>
                <div className="form__group">
                  <label className="form__label">Message / Requirements Description</label>
                  <textarea className="form__textarea" required placeholder="Requirements Description"></textarea>
                </div>
                <div className="form__group" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <input type="checkbox" id="consent" required style={{ marginTop: '4px' }} />
                  <label htmlFor="consent" className="t-body" style={{ fontSize: '0.8125rem', userSelect: 'none' }}>
                    I consent to sharing this project data. LorVen Systems protects personal data and engineering schematics under strict confidentiality agreements.
                  </label>
                </div>
                <button type="submit" className="btn btn--primary" style={{ marginTop: '12px' }}>Submit Consultation Form</button>
              </form>
            </div>

            {/* Office Locations & Visitors */}
            <div className="g-up">
              <h2 className="t-h3" style={{ marginBottom: '32px' }}>Office Locations &amp; Facilities</h2>
              
              <div style={{ marginBottom: '32px' }}>
                <span className="t-label" style={{ display: 'block', marginBottom: '8px', color: 'var(--steel)' }}>Registered &amp; Corporate HQ</span>
                <p className="t-body" style={{ color: 'var(--ink)' }}>
                  Plot 14, IDA Mallapur, Hyderabad 500076, Telangana, India<br />
                  <strong>Phone:</strong> +91 40 2715 0000<br />
                  <strong>Email:</strong> contact@lorvensystems.com
                </p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <span className="t-label" style={{ display: 'block', marginBottom: '8px', color: 'var(--steel)' }}>Corporate HQ (Specific)</span>
                <p className="t-body" style={{ color: 'var(--ink)' }}>
                  Block B, Industrial Integration Hub, Outer Ring Road, Bengaluru, KA<br />
                  <strong>Phone:</strong> +91 80 4912 3000
                </p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <span className="t-label" style={{ display: 'block', marginBottom: '8px', color: 'var(--steel)' }}>Manufacturing Plant</span>
                <p className="t-body" style={{ color: 'var(--ink)' }}>
                  Industrial Estate Phase II, Peenya, Bengaluru 560058<br />
                  <span style={{ fontSize: '0.875rem', color: 'var(--ash)' }}>Facility (Specific): Plot 24, Electronics City Phase II, Bengaluru, KA</span>
                </p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <span className="t-label" style={{ display: 'block', marginBottom: '8px', color: 'var(--steel)' }}>Regional Office</span>
                <p className="t-body" style={{ color: 'var(--ink)' }}>
                  Sector V, Salt Lake, Kolkata, West Bengal
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '28px', marginBottom: '32px' }}>
                <span className="t-label" style={{ display: 'block', marginBottom: '12px' }}>Communication Channels</span>
                <p className="t-body" style={{ fontSize: '0.875rem', lineHeight: 1.8 }}>
                  <strong>Engineering Support Hotline (24/7 Priority):</strong> +91 80 4912 3099<br />
                  <strong>Engineering Support Email:</strong> support@lorvensystems.com<br />
                  <strong>Bids &amp; Tenders:</strong> bids@lorvensystems.com<br />
                  <strong>Partnership Enquiries:</strong> partner@lorvensystems.com<br />
                  <strong>Project Planning:</strong> design@lorvensystems.com
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '28px' }}>
                <span className="t-label" style={{ display: 'block', marginBottom: '12px' }}>Visitor Information</span>
                <p className="t-body" style={{ fontSize: '0.875rem', lineHeight: 1.8 }}>
                  <strong>Office Hours:</strong> Mon - Fri | 09:00 - 18:00 IST (Closed on national holidays)<br />
                  <strong>Engineering Support Hours:</strong> Mon - Sat | 08:00 - 20:00 IST<br />
                  <strong>Security Access:</strong> Visitor badge registration required at the reception desk.<br />
                  <strong>Parking:</strong> Allocated visitor parking spaces available in Block B garage.<br />
                  <strong>Transit Routes:</strong> 10 minutes drive from Outer Ring road metro station access.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
