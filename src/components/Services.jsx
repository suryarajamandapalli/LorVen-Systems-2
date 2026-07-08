import React, { useEffect, useRef, useState } from 'react';

export default function Services() {
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef([]);

    const steps = [
        {
            title: "Engineering Design",
            subtitle: "3D CAD Modeling & Circuit Prototyping",
            desc: "Our engineering division utilizes state-of-the-art simulation software to model mechanical fitment, heat dissipation cycles, and trace signaling layouts before manufacturing starts.",
            meta: "SOLIDWORKS / Altium Designer / Ansys Simulation"
        },
        {
            title: "Advanced Manufacturing",
            subtitle: "ISO Cleanroom Assembly & Automated Pick-and-Place",
            desc: "Production takes place in controlled class 100k cleanrooms. Dual SMT pick-and-place lines populate boards with high precision, followed by automated convection reflow soldering.",
            meta: "Automated SMT Lines / Selective Wave Soldering"
        },
        {
            title: "Rigorous Testing",
            subtitle: "SIL-4 Safety Level Compliance & Environmental Stress Screening",
            desc: "Every PCB and assembly undergoes Automated Optical Inspection (AOI), flying probe testing, and high-voltage simulation. We subject boards to thermal cycles and vibration tables.",
            meta: "IEC 61373 Vibration / IEC 60068 Thermal Bays"
        },
        {
            title: "Installation & Cabling",
            subtitle: "Locomotive Cabin Harnessing & Console Assembly",
            desc: "Our field engineering team executes structural integration directly inside locomotive cabs, passenger coaches, or signaling bunkers, using flame-retardant routing blocks.",
            meta: "EN 45545 Cabin Harnessing / Driver Desk Consolidation"
        },
        {
            title: "Commissioning & Support",
            subtitle: "SIL-4 Certification & 24/7 Field Maintenance support",
            desc: "We assist national inspectors and engineering supervisors during full commission runs. LorVen provides dedicated spares support and field technicians throughout the system's operational lifecycle.",
            meta: "On-site Signalling Commission / Lifecycle Maintenance"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 2;
            
            stepRefs.current.forEach((el, index) => {
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveStep(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="services" className="section-container" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="section-inner">
                <div className="text-meta" style={{ marginBottom: '32px' }}>// 04 / SERVICE PROCESS</div>
                <h2 className="text-display-2" style={{ marginBottom: '60px' }}>
                    END-TO-END PROJECT<br />
                    EXECUTION LIFECYCLE
                </h2>

                <div className="timeline-journey">
                    <div className="timeline-line" />
                    
                    {steps.map((step, idx) => (
                        <div 
                            key={idx} 
                            ref={el => stepRefs.current[idx] = el}
                            className={`timeline-step ${activeStep === idx ? 'active' : ''}`}
                        >
                            <div className="timeline-node" />
                            
                            <div className="timeline-content">
                                <div className="timeline-title-block">
                                    <div className="timeline-step-index">STEP 0{idx + 1}</div>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: 500, textTransform: 'uppercase', marginTop: '10px', marginBottom: '8px' }}>
                                        {step.title}
                                    </h3>
                                    <span style={{ fontSize: '13px', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                                        {step.subtitle}
                                    </span>
                                </div>
                                
                                <div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
                                        {step.desc}
                                    </p>
                                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-dark)' }}>
                                        // METHODOLOGY: {step.meta}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
