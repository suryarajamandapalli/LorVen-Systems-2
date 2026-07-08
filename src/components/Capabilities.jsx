import React from 'react';

export default function Capabilities() {
    return (
        <section id="capabilities" className="section-container">
            <div className="section-inner">
                <div className="text-meta" style={{ marginBottom: '32px' }}>// 05 / ENGINEERING CAPABILITIES</div>
                <h2 className="text-display-2" style={{ marginBottom: '60px' }}>
                    STATE-OF-THE-ART<br />
                    MANUFACTURING COMPLEX
                </h2>

                <div className="capabilities-grid">
                    {/* Visual cleanroom asset container */}
                    <div className="capabilities-visual">
                        <img src="/cleanroom_visual.png" alt="LorVen SMT cleanroom facility" />
                        <div className="capabilities-labels">
                            <span className="btn-mini">// ISO CLASS 8 CLEANROOM</span>
                            <span className="btn-mini">// Yamaha SMT Line</span>
                        </div>
                    </div>

                    {/* Technical details column */}
                    <div>
                        <div className="capabilities-feature-card">
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
                                Automated SMT Assembly Lines
                            </h3>
                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                High-speed Yamaha automated placement systems populating complex multi-layered PCBs. Incorporates 3D Automated Optical Inspection (AOI) to eliminate defect chances before reflow.
                            </p>
                        </div>

                        <div className="capabilities-feature-card">
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
                                Environmentally Controlled Bays
                            </h3>
                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                Dust-free positive pressure cleanrooms with advanced HEPA filtration. Electrostatic discharge (ESD) flooring and active humidity control protect safety-critical electronics during assembly.
                            </p>
                        </div>

                        <div className="capabilities-feature-card">
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
                                High-Voltage Simulation Labs
                            </h3>
                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                Dedicated test bays equipped with variable load banks to simulate electric locomotive traction environments. Features insulation testers, dielectric stress rigs, and logic analyzer arrays.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
