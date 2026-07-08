import React, { useEffect, useState } from 'react';

function Counter({ end, duration = 2000 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const totalMiliseconds = duration;
        const incrementTime = Math.floor(totalMiliseconds / end);
        
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count}</span>;
}

export default function Stats() {
    return (
        <section id="stats" className="section-container" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="section-inner">
                <div className="text-meta" style={{ marginBottom: '32px' }}>// 06 / MANUFACTURING NUMBERS</div>
                <h2 className="text-display-2" style={{ marginBottom: '60px' }}>
                    ENGINEERED CAPACITY<br />
                    IN NUMBERS
                </h2>

                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-number">
                            <Counter end={25} />+
                        </div>
                        <span className="stat-label">Years of Engineering Legacy</span>
                    </div>

                    <div className="stat-card">
                        <div className="stat-number">
                            <Counter end={500} />+
                        </div>
                        <span className="stat-label">Locomotive Traction Cab Cabinets</span>
                    </div>

                    <div className="stat-card">
                        <div className="stat-number">
                            <Counter end={1200} />+
                        </div>
                        <span className="stat-label">Brake Integration Coach Installations</span>
                    </div>

                    <div className="stat-card">
                        <div className="stat-number">
                            SIL-4
                        </div>
                        <span className="stat-label">Safety Integrity Level Certification</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
