import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CATEGORIES, PRODUCTS } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Arr = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function ProductCategory({ categorySlug, go }) {
  const root = useRef(null);

  const category = CATEGORIES.find(c => c.slug === categorySlug);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.g-up', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 }
      );
    }, root);
    return () => ctx.revert();
  }, [categorySlug]);

  if (!category) {
    return (
      <div style={{ padding: '180px 56px 100px', textAlign: 'center' }}>
        <h1 className="t-h2">Category Not Found</h1>
        <button className="btn btn--primary" style={{ marginTop: '24px' }} onClick={() => go('products')}>Back to Products</button>
      </div>
    );
  }

  // Filter products belonging to this category
  const categoryProducts = PRODUCTS.filter(p => p.divisionSlug === categorySlug);

  return (
    <div ref={root}>
      {/* Hero Banner */}
      <div className="ph">
        <div className="ph__inner">
          <div className="ph__eyebrow">
            <span className="t-label" style={{ cursor: 'pointer' }} onClick={() => go('products')}>Product Portfolio</span> · <span className="t-label">{category.title}</span>
          </div>
          <h1 className="t-display ph__title">{category.title}</h1>
          <p className="t-body t-body--lg" style={{ marginTop: '16px', maxWidth: '800px' }}>
            {category.description}
          </p>
        </div>
      </div>

      <div style={{ height: '50vh', minHeight: '300px', overflow: 'hidden', position: 'relative' }}>
        <img src={`/${category.heroImage}`} alt={category.title} className="img-fill" onError={(e) => { e.target.src = '/railway_hero_bg.png'; }} />
      </div>

      {/* Product List */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="g-up" style={{ marginBottom: '56px' }}>
            <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>Available Systems</span>
            <h2 className="t-h2">Core Systems</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px' }}>
            {categoryProducts.map((prod, idx) => (
              <div key={prod.slug} className="g-up" style={{ padding: '40px', background: 'var(--paper)', borderTop: '2px solid var(--steel)' }}>
                <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>SYSTEM 0{idx + 1}</span>
                <h3 className="t-h3" style={{ marginBottom: '12px' }}>{prod.heroTitle}</h3>
                <p className="t-body" style={{ marginBottom: '24px', fontSize: '0.9375rem' }}>{prod.heroDescription}</p>
                <button className="btn btn--primary" onClick={() => go(`products/${categorySlug}/${prod.slug}`)}>
                  Explore Product <Arr />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Division Specifications placeholder styling */}
      <section className="section" style={{ background: 'var(--paper)', borderTop: '1px solid var(--rule)' }}>
        <div className="wrap">
          <div className="g-up" style={{ marginBottom: '48px' }}>
            <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>Design Philosophy</span>
            <h2 className="t-h2">How It Works</h2>
            <p className="t-body t-body--lg" style={{ marginTop: '16px' }}>
              All our systems in this division utilize modular hardware redundancy, industrial isolation protection, and conform to the strictest rail standards (EN 50155, RDSO and IPC-A-610 Class 3).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
