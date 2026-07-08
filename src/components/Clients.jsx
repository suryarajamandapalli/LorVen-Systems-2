import React from 'react';

export default function Clients() {
    const clients = [
        "Indian Railways",
        "BHEL",
        "Alstom",
        "Siemens",
        "ICF Chennai",
        "CLW India"
    ];

    return (
        <section id="clients" className="section-container">
            <div className="section-inner">
                <div className="text-meta" style={{ marginBottom: '32px' }}>// 09 / INDUSTRIAL CLIENTS & PARTNERS</div>
                <h2 className="text-display-2" style={{ marginBottom: '60px' }}>
                    TRUSTED BY LEADING RAIL<br />
                    AUTHORITIES & INTEGRATORS
                </h2>

                <div className="clients-grid">
                    {clients.map((client, idx) => (
                        <div key={idx} className="client-logo-card">
                            <span className="client-logo-text">{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
