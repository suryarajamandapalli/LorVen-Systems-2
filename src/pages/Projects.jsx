import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage({ go }) {
  const root = useRef(null);
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.g-up', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 }
      );
    }, root);
    return () => ctx.revert();
  }, [selectedSector, selectedRegion]);

  const sectors = ['All', 'Mainline', 'Metro', 'Freight', 'Manufacturing'];
  const regions = ['All', 'North', 'South', 'East', 'West'];

  // Filter project entries based on chosen filters
  const filteredProjects = PROJECTS.filter(p => {
    const sectorMatch = selectedSector === 'All' || p.sector === selectedSector;
    const regionMatch = selectedRegion === 'All' || p.region === selectedRegion;
    return sectorMatch && regionMatch;
  });

  return (
    <div ref={root}>
      {/* ─── PAGE HERO ─── */}
      <div className="ph">
        <div className="ph__inner">
          <div className="ph__eyebrow"><span className="t-label">Selected work</span></div>
          <h1 className="t-display ph__title">Infrastructure projects <em>engineered</em> to last</h1>
        </div>
      </div>

      {/* ─── FILTER CONTROLS ─── */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--rule)', padding: '24px 0' }}>
        <div className="wrap" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <span className="t-label" style={{ display: 'block', marginBottom: '8px' }}>Filter by Sector</span>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {sectors.map(sec => (
                <button
                  key={sec}
                  onClick={() => setSelectedSector(sec)}
                  className={`btn ${selectedSector === sec ? 'btn--primary' : 'btn--outline'}`}
                  style={{ padding: '8px 16px', fontSize: '0.625rem' }}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="t-label" style={{ display: 'block', marginBottom: '8px' }}>Filter by Region</span>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {regions.map(reg => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`btn ${selectedRegion === reg ? 'btn--primary' : 'btn--outline'}`}
                  style={{ padding: '8px 16px', fontSize: '0.625rem' }}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECT CATALOG ─── */}
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="wrap">
          <div className="g-up" style={{ marginBottom: '64px' }}>
            <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>Project Catalog</span>
            <h2 className="t-h2">Recent Deliveries</h2>
          </div>

          <div className="g-up" style={{ display: 'flex', flexDirection: 'column' }}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map(p => (
                <div key={p.code} className="proj-row" style={{ gridTemplateColumns: '150px 1fr 240px', background: '#fff', padding: '32px', marginBottom: '16px', border: '1px solid var(--rule)' }}>
                  <div className="proj-row__num" style={{ fontSize: '2.5rem' }}>{p.code}</div>
                  <div>
                    <span className="t-label" style={{ color: 'var(--steel)', display: 'block', marginBottom: '8px' }}>
                      {p.client} · {p.sector} · {p.region} · {p.year}
                    </span>
                    <h3 className="proj-row__title" style={{ fontSize: '1.25rem', fontWeight: '500' }}>{p.title}</h3>
                    <p className="t-body" style={{ maxWidth: '800px', fontSize: '0.875rem' }}>{p.copy}</p>
                  </div>
                  <div style={{ height: '140px', overflow: 'hidden' }}>
                    <img className="img-fill" src={`/${p.image}`} alt={p.title} onError={(e) => { e.target.src = '/pcb-macro.jpg'; }} />
                  </div>
                </div>
              ))
            ) : (
              <div style={{ padding: '40px', textAlign: 'center', background: '#fff', border: '1px solid var(--rule)' }}>
                <p className="t-body">No projects matching the selected filters found.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
