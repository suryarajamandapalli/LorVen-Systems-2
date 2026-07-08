import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Careers({ go }) {
  const root = useRef(null);
  const [activeRole, setActiveRole] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.g-up', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  const roles = [
    {
      id: 'embedded',
      title: 'Senior Firmware Engineer (Rail Signalling)',
      dept: 'Embedded Systems / RDPMS',
      exp: '5-8 Years',
      desc: 'Design and develop SIL-4 compliant firmware for railway remote diagnostic and parameter monitoring systems. Expertise in C/C++, RTOS, and safety-critical coding standards is required.',
      req: ['B.Tech/M.Tech in Electronics or Computer Science', 'Experience with EN 50128 safety standards', 'Strong debugging skills with logic analyzers and oscilloscopes'],
      email: 'support@lorvensystems.com'
    },
    {
      id: 'smt-operator',
      title: 'SMT Placement Line Supervisor',
      dept: 'Electronics Assembly Division',
      exp: '3-5 Years',
      desc: 'Supervise automated SMT placement lines. Program Yamaha pick-and-place equipment, configure stencil printers, optimize reflow oven profiles, and conduct 3D AOI quality verification.',
      req: ['Diploma/Degree in Electronics/Mechanical Engineering', 'Experience with IPC-A-610 Class 3 specifications', 'Troubleshooting automated pick-and-place lines'],
      email: 'support@lorvensystems.com'
    },
    {
      id: 'mechanical-designer',
      title: 'Mechanical Design Engineer (Pneumatics)',
      dept: 'Coaches & Wagons Division',
      exp: '4-7 Years',
      desc: 'Design twin-pipe graduated release air brake systems and distributor valves using SolidWorks. Create manufacturing drawings, perform tolerance stack-up analysis, and coordinate with casting suppliers.',
      req: ['B.Tech in Mechanical Engineering', 'Experience designing high-pressure pneumatic/hydraulic valves', 'Knowledge of UIC 540 rail specifications is a plus'],
      email: 'support@lorvensystems.com'
    }
  ];

  return (
    <div ref={root}>
      {/* ─── PAGE HERO ─── */}
      <div className="ph">
        <div className="ph__inner">
          <div className="ph__eyebrow"><span className="t-label">Careers</span></div>
          <h1 className="t-display ph__title">Slow work. Long careers.</h1>
        </div>
      </div>

      {/* ─── CULTURE SECTION ─── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap split split--60-40" style={{ gap: '80px', alignItems: 'center' }}>
          <div className="g-up">
            <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>Work with us</span>
            <h2 className="t-h2" style={{ marginBottom: '24px' }}>Engineering systems that protect <em>human lives</em></h2>
            <p className="t-body t-body--lg" style={{ marginBottom: '20px' }}>
              At LorVen Systems, we don't build apps. We build heavy-duty industrial systems, high-speed SMT boards, and high-voltage cabinets that run India's critical rail infrastructure.
            </p>
            <p className="t-body">
              Operating out of our integrated Secunderabad headquarters, our developers, designers, and manufacturing specialists collaborate directly to bring SIL-4 electronics and UIC-certified mechanics to national rail systems.
            </p>
          </div>
          <div className="img-wrap g-clip" style={{ height: '400px' }}>
            <img className="img-fill" src="/engineers.jpg" alt="SMT engineering team" />
          </div>
        </div>
      </section>

      {/* ─── ROLES SECTION ─── */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="g-up" style={{ marginBottom: '56px' }}>
            <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>Current Openings</span>
            <h2 className="t-h2">Opportunities in Secunderabad</h2>
          </div>

          <div className="g-up" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {roles.map(r => (
              <div key={r.id} style={{ 
                background: '#fff', 
                border: '1px solid var(--rule)', 
                padding: '32px 40px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <span className="t-label" style={{ color: 'var(--steel)', display: 'block', marginBottom: '8px' }}>{r.dept} · Exp: {r.exp}</span>
                    <h3 className="t-h3" style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{r.title}</h3>
                  </div>
                  <button 
                    className="btn btn--outline" 
                    onClick={() => setActiveRole(activeRole === r.id ? null : r.id)}
                  >
                    {activeRole === r.id ? 'Close Details' : 'View Details'}
                  </button>
                </div>

                {activeRole === r.id && (
                  <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--rule-light)' }}>
                    <p className="t-body" style={{ color: 'var(--ink)', marginBottom: '20px' }}>{r.desc}</p>
                    <h4 className="t-label" style={{ marginBottom: '12px', color: 'var(--ink)' }}>Requirements:</h4>
                    <ul style={{ listStyle: 'square', paddingLeft: '20px', marginBottom: '32px' }}>
                      {r.req.map((reqItem, index) => (
                        <li key={index} className="t-body" style={{ fontSize: '0.9375rem', marginBottom: '6px' }}>{reqItem}</li>
                      ))}
                    </ul>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <a href={`mailto:${r.email}?subject=Application for ${r.title}`} className="btn btn--primary">Submit Resume</a>
                      <p className="t-body" style={{ fontSize: '0.8125rem' }}>Or email CV to <strong style={{ color: 'var(--ink)' }}>{r.email}</strong></p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
