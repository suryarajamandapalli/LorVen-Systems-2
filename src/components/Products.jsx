import React from 'react';

export default function Products() {
    const products = [
        {
            category: "SMT ASSEMBLY",
            title: "Safety Signaling PCBs",
            desc: "Custom electronic signaling control boards built in cleanroom environments with zero tolerance for defects.",
            specs: [
                { label: "Compliance", val: "IPC-A-610 Class 3" },
                { label: "Inspection", val: "3D Automated Optical" },
                { label: "Cleanroom", val: "ISO Class 8 (100k)" }
            ]
        },
        {
            category: "TRACTION ELECTRONICS",
            title: "Auxiliary Power Cabinets",
            desc: "On-locomotive auxiliary traction converters and logic control boards for passenger train engines.",
            specs: [
                { label: "Input Voltage", val: "750V DC / 3-Phase 415V" },
                { label: "IP Standard", val: "IP54 Ruggedized" },
                { label: "Cooling", val: "Forced Air / Liquid option" }
            ]
        },
        {
            category: "ROLLING STOCK MECHANICAL",
            title: "Brake Pipe & Valves",
            desc: "Distributor valves, coupling heads, and brake assembly pipes compliant with international railway standards.",
            specs: [
                { label: "Valves Type", val: "UIC Approved Distributor" },
                { label: "Working Pressure", val: "5.0 kg/cm² standard" },
                { label: "Material", val: "Corrosion Resistant Alloy" }
            ]
        },
        {
            category: "ELECTRICAL HARNESS & DESKS",
            title: "Locomotive Driver Desks",
            desc: "Ergonomically designed driver cabin console panels, fully integrated with traction displays and safety toggles.",
            specs: [
                { label: "Wiring Harness", val: "EN 45545 Halogen-Free" },
                { label: "Switches", val: "Heavy Industrial Actuators" },
                { label: "Integration", val: "WAGO / Phoenix terminals" }
            ]
        }
    ];

    return (
        <section id="products" className="section-container">
            <div className="section-inner">
                <div className="text-meta" style={{ marginBottom: '32px' }}>// 03 / PRODUCT PORTFOLIO</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '30px' }}>
                    <h2 className="text-display-2">
                        PRECISION MANUFACTURING,<br />
                        ZERO TOLERANCE.
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', fontSize: '14px', lineHeight: 1.6 }}>
                        All components are rigorously tested in thermal bays, vibration tables, and high-voltage rigs to ensure mission success.
                    </p>
                </div>

                <div className="product-grid">
                    {products.map((prod, idx) => (
                        <div key={idx} className="product-card">
                            <div>
                                <div className="product-tag">{prod.category}</div>
                                <h3 className="product-title">{prod.title}</h3>
                                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '30px' }}>
                                    {prod.desc}
                                </p>
                            </div>
                            
                            <div>
                                <div className="product-specs">
                                    {prod.specs.map((spec, sidx) => (
                                        <div key={sidx} className="product-spec-row">
                                            <span style={{ color: 'var(--text-secondary)' }}>{spec.label}</span>
                                            <span className="product-spec-val">{spec.val}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="btn btn-mini" style={{ width: '100%', textTransform: 'uppercase' }}>
                                    Request Technical Datasheet
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
