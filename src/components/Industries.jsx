import React, { useState } from 'react';

export default function Industries() {
    const [activeIdx, setActiveIdx] = useState(0);

    const industries = [
        {
            title: "Railways",
            summary: "High-speed and mainline national railway infrastructure signaling and power solutions.",
            details: "LorVen provides SIL-4 certified signaling electronics and high-capacity electrical distribution systems engineered for extensive mainline networks. Our systems operate under extreme environmental stress and ensure safe passenger and freight transit.",
            specs: [
                { label: "Compliance", val: "EN 50155 / EN 50126" },
                { label: "Safety Level", val: "SIL-4 Certified" },
                { label: "Application", val: "Mainline Signalling & Power" }
            ]
        },
        {
            title: "Metro & Transit",
            summary: "Rapid urban transit and metro signaling assemblies and onboard power controls.",
            details: "Urban rapid transit systems require ultra-precise signaling and compact auxiliary power systems. We manufacture specialized Driver Desk panels and distribution blocks compliant with tight metro corridor spacing.",
            specs: [
                { label: "Form Factor", val: "Sub-rack / Custom Enclosures" },
                { label: "IP Rating", val: "IP65 Rated Cabinets" },
                { label: "Corridors", val: "Delhi Metro, Mumbai Metro partners" }
            ]
        },
        {
            title: "Locomotives",
            summary: "Traction converters, cabin electronics, and high-voltage integrations.",
            details: "We manufacture the high-voltage cabinets, driver consoles, and traction control electronics that power electric locomotives. Our wiring integrations withstand vibration and extreme heat cycles.",
            specs: [
                { label: "Voltage Level", val: "Up to 25kV Systems" },
                { label: "Vibration Standard", val: "IEC 61373 Class B" },
                { label: "Components", val: "Traction & Brake Interlocks" }
            ]
        },
        {
            title: "Rolling Stock",
            summary: "Passenger coach electrical panels, HVAC control distribution, and couplers.",
            details: "Ensuring passenger comfort and coach safety, our rolling stock components include distribution control boards, HVAC electrical harnesses, brake coupling systems, and distributor valves.",
            specs: [
                { label: "Harness standard", val: "EN 45545-2 (Fire Safety)" },
                { label: "Brake standard", val: "UIC Approved Valves" },
                { label: "Life expectancy", val: "30+ Years Design Life" }
            ]
        },
        {
            title: "Industrial Electronics",
            summary: "Sensing electronics, tracking modules, and telemetry systems.",
            details: "LorVen's micro-electronic division designs telemetry boards, signaling repeaters, and high-frequency communication modules on our state-of-the-art SMT lines.",
            specs: [
                { label: "Technology", val: "Automated SMT Assemblies" },
                { label: "AOI Inspection", val: "100% 3D Automated Optical" },
                { label: "PCB Layers", val: "Up to 12 Layer HDI Boards" }
            ]
        }
    ];

    return (
        <section id="industries" className="section-container" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="section-inner">
                <div className="text-meta" style={{ marginBottom: '32px' }}>// 02 / INDUSTRIES SERVED</div>
                <h2 className="text-display-2" style={{ marginBottom: '60px' }}>
                    ENGINEERED FOR THE MOST<br />
                    DEMANDING CORRIDORS
                </h2>
                
                <div className="industry-accordion">
                    {industries.map((ind, idx) => (
                        <div 
                            key={idx} 
                            className={`industry-card ${activeIdx === idx ? 'active' : ''}`}
                            onClick={() => setActiveIdx(idx)}
                        >
                            <div className="industry-card-header">
                                <div className="industry-index">[{String(idx + 1).padStart(2, '0')}]</div>
                                <div className="industry-name">{ind.title}</div>
                                <div className="industry-summary">{ind.summary}</div>
                                <div className="industry-icon-spin">{activeIdx === idx ? '—' : '+'}</div>
                            </div>
                            
                            <div className="industry-details">
                                <div className="industry-details-grid">
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
                                            {ind.details}
                                        </p>
                                    </div>
                                    <div className="industry-spec-list">
                                        <div className="text-meta" style={{ marginBottom: '10px', fontSize: '10px' }}>TECHNICAL METRICS</div>
                                        {ind.specs.map((spec, sidx) => (
                                            <div key={sidx} className="industry-spec-item">
                                                <span style={{ color: 'var(--text-secondary)' }}>{spec.label}</span>
                                                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{spec.val}</span>
                                            </div>
                                        ))}
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
