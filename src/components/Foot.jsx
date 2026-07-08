import React from 'react';

export default function Foot({ go }) {
  return (
    <footer className="foot">
      <div className="foot__inner">
        <div className="foot__grid">
          <div>
            <div className="foot__brand" onClick={() => go('home')} style={{ cursor: 'pointer', marginBottom: '20px' }}>
              <img src="/logo_white.svg" alt="LorVen Systems" style={{ height: '36px', width: 'auto', display: 'block' }} />
            </div>
            <p style={{ fontSize: '.875rem', color: 'rgba(245,244,240,.45)', lineHeight: 1.75, maxWidth: '280px', marginBottom: '28px' }}>
              Safety-critical railway electronics and electrical integration, manufactured in Bengaluru.
            </p>
            {['ISO 9001:2015', 'SIL-2', 'EN 50155', 'IRIS'].map(b => (
              <span key={b} className="foot__badge">{b}</span>
            ))}
          </div>

          <div>
            <span className="foot__col-label">Products</span>
            {[
              ['Signalling & Telecom','products/snt'],
              ['RDPMS','products/snt/rdpms'],
              ['IFD','products/snt/ifd'],
              ['IPS','products/snt/ips'],
              ['Electric Locomotive','products/electric-locomotive'],
              ['Coaches & Wagons','products/wagons']
            ].map(([l,p]) => (
              <span key={p} className="foot__link" onClick={() => go(p)}>{l}</span>
            ))}
          </div>

          <div>
            <span className="foot__col-label">Company</span>
            {[
              ['About','about'],
              ['Design Service','services/design'],
              ['Installation Service','services/installation'],
              ['Projects','projects'],
              ['Careers','careers'],
              ['Contact','contact']
            ].map(([l,p]) => (
              <span key={p} className="foot__link" onClick={() => go(p)}>{l}</span>
            ))}
          </div>

          <div>
            <span className="foot__col-label">Headquarters</span>
            <p style={{ fontSize: '.875rem', lineHeight: 1.9, color: 'rgba(245,244,240,.45)', marginBottom: '16px' }}>
              Plot 14, IDA Mallapur<br/>
              Hyderabad 500076<br/>
              Telangana, India
            </p>
            <p style={{ fontSize: '.875rem', lineHeight: 1.9, color: 'rgba(245,244,240,.45)' }}>
              contact@lorvensystems.com<br/>
              +91 40 2715 0000
            </p>
          </div>
        </div>

        <div className="foot__bottom">
          <span>© 2026 LorVen Systems Pvt. Ltd. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => go('privacy')}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }} onClick={() => go('terms')}>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
