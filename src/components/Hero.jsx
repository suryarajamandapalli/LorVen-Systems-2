import React from 'react';

export default function Hero() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-stage">
            <img 
                className="hero-bg-media" 
                src="/railway_hero_bg.png" 
                alt="Railway Industrial Manufacturing" 
            />
            <div className="hero-overlay" />
            
            <div className="hero-inner">
                <div className="text-meta" style={{ marginBottom: '24px', opacity: 0.8 }}>
                    // SECUNDERABAD, INDIA — ESTD 1999
                </div>
                
                <h1 className="text-display-1 hero-headline">
                    Engineering<br />
                    Tomorrow's Rail<br />
                    Infrastructure
                </h1>
                
                <p className="hero-subtitle">
                    Delivering precision-engineered railway electronics, electrical integration, and manufacturing solutions built for tomorrow's mission-critical transportation systems.
                </p>
                
                <div className="hero-actions">
                    <button 
                        onClick={() => scrollToSection('products')} 
                        className="btn btn-solid"
                    >
                        Explore Solutions
                    </button>
                    <button 
                        onClick={() => scrollToSection('about')} 
                        className="btn btn-outline"
                    >
                        Learn More
                    </button>
                </div>
                
                <div className="hero-technical-row">
                    <div style={{ display: 'flex', gap: '48px' }}>
                        <div>
                            <div className="text-meta" style={{ color: 'var(--text-secondary)' }}>INTEGRITY LEVEL</div>
                            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 600, marginTop: '4px' }}>SIL-4 CERTIFIED</div>
                        </div>
                        <div>
                            <div className="text-meta" style={{ color: 'var(--text-secondary)' }}>COMPLIANCE</div>
                            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 600, marginTop: '4px' }}>EN 50155 STANDARDS</div>
                        </div>
                        <div>
                            <div className="text-meta" style={{ color: 'var(--text-secondary)' }}>QUALITY SYSTEM</div>
                            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 600, marginTop: '4px' }}>ISO 9001:2015</div>
                        </div>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', cursor: 'pointer' }} onClick={() => scrollToSection('about')}>
                        <span className="text-meta" style={{ fontSize: '10px', marginBottom: '8px' }}>SCROLL TO DEPLOY</span>
                        <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent)' }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
