import React from 'react';

export default function Projects() {
    const projects = [
        {
            title: "WAG-9 Traction Cabinets",
            client: "Indian Railways",
            desc: "Complete electrical panel integration and traction cabinets for WAG-9 electric heavy-haul freight locomotives, designed for high-temperature and high-humidity corridors.",
            image: "/locomotive_visual.png"
        },
        {
            title: "Vande Bharat Harnesses",
            client: "Integral Coach Factory",
            desc: "Flame-retardant low-smoke zero-halogen (LSZH) passenger coach electrical distribution harnesses and coupler brake pipes.",
            image: "/railway_hero_bg.png"
        },
        {
            title: "Metro Cabin Desks",
            client: "Urban Transit Authority",
            desc: "Custom ergonomic driver cabin consoles, fully pre-wired and tested to withstand IEC 61373 railway cabin vibrations.",
            image: "/cleanroom_visual.png"
        }
    ];

    return (
        <section id="projects" className="section-container" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="section-inner">
                <div className="text-meta" style={{ marginBottom: '32px' }}>// 08 / DEPLOYMENT GALLERY</div>
                <h2 className="text-display-2" style={{ marginBottom: '60px' }}>
                    MISSION-CRITICAL SYSTEMS<br />
                    IN OPERATION
                </h2>

                <div className="projects-slider">
                    {projects.map((proj, idx) => (
                        <div key={idx} className="project-slide">
                            <div>
                                <div className="project-visual">
                                    <img src={proj.image} alt={proj.title} />
                                </div>
                                <div className="text-meta" style={{ marginBottom: '10px', fontSize: '10px' }}>
                                    CLIENT: {proj.client}
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '14px' }}>
                                    {proj.title}
                                </h3>
                            </div>
                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                {proj.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
