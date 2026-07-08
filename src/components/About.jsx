import React from 'react';

export default function About() {
    return (
        <section id="about" className="section-container">
            <div className="section-inner">
                <div className="text-meta" style={{ marginBottom: '32px' }}>// 01 / COMPANY MISSION</div>
                <div className="about-grid">
                    <div>
                        <h2 className="text-display-2" style={{ marginBottom: '40px' }}>
                            Delivering<br />
                            Uncompromised<br />
                            Reliability Since 1999
                        </h2>
                        <div className="about-editorial-text">
                            <p>
                                LorVen Systems is a premier engineering, industrial electronics, and manufacturing partner trusted by national rail administrations and global mobility leaders. We specialize in producing safety-critical systems that form the backbone of modern railway infrastructure.
                            </p>
                            <p>
                                With decades of specialized design and assembly experience, we execute projects with the extreme precision required for high-speed rail, suburban corridors, and heavy freight networks.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="text-meta" style={{ marginBottom: '24px', color: 'var(--text-primary)' }}>CORE CAPABILITIES</div>
                        <div className="about-features-list">
                            <div className="about-feature-item">
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: 'var(--accent)' }}>[01]</div>
                                <div>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>SIL-4 Safety Integrity Systems</h3>
                                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>We design and manufacture signaling and interlocking systems that meet the rigorous SIL-4 international safety integrity levels.</p>
                                </div>
                            </div>
                            
                            <div className="about-feature-item">
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: 'var(--accent)' }}>[02]</div>
                                <div>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>Automated SMT Assembly</h3>
                                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>In-house class-100k cleanroom facilities housing automated surface-mount assembly lines for high-volume, defect-free PCB manufacturing.</p>
                                </div>
                            </div>

                            <div className="about-feature-item">
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: 'var(--accent)' }}>[03]</div>
                                <div>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>Turnkey Electrical Integration</h3>
                                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Complete locomotive and coach integration, from driver desk consoles and distribution panels to harness routing and testing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
