import React from 'react';

export default function Timeline() {
    const milestones = [
        {
            year: "1999",
            title: "Company Inception",
            desc: "LorVen Systems was established in Secunderabad, India, to supply high-reliability wiring assemblies and electrical cables to regional railway divisions."
        },
        {
            year: "2005",
            title: "SMT cleanroom facility",
            desc: "Commissioned our first ISO Class 8 cleanroom electronics facility. Upgraded capabilities to populating surface-mount components on signal repeaters."
        },
        {
            year: "2012",
            title: "Electric Locomotive Contract",
            desc: "Awarded contract for locomotive driver desks and cabin controls. Integrated traction interlock boards on mainline passenger engines."
        },
        {
            year: "2018",
            title: "SIL-4 Certification",
            desc: "Successfully achieved SIL-4 level certification on our safety-critical signaling repeaters and distribution blocks, verifying fail-safe operations."
        },
        {
            year: "2024",
            title: "Urban Metro Deployments",
            desc: "Expanded integration designs to major city metro projects (Mumbai, Pune metro corridors), delivering compact sub-rack panels and distribution boxes."
        }
    ];

    return (
        <section id="timeline" className="section-container">
            <div className="section-inner">
                <div className="text-meta" style={{ marginBottom: '32px' }}>// 07 / HISTORY & MILESTONES</div>
                <h2 className="text-display-2" style={{ marginBottom: '60px' }}>
                    DECADES OF RAILWAY<br />
                    ENGINEERING PROGRESS
                </h2>

                <div className="projects-slider">
                    {milestones.map((ms, idx) => (
                        <div key={idx} className="project-slide" style={{ minHeight: '320px', aspectRatio: '1.2 / 1' }}>
                            <div>
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '48px', fontWeight: 600, color: 'var(--accent)', marginBottom: '12px' }}>
                                    {ms.year}
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '16px' }}>
                                    {ms.title}
                                </h3>
                            </div>
                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                {ms.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
