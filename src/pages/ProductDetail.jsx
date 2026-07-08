import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCTS } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function ProductDetail({ categorySlug, productSlug, go }) {
  const root = useRef(null);

  const product = PRODUCTS.find(p => p.slug === productSlug && p.divisionSlug === categorySlug);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.g-up', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 }
      );
    }, root);
    return () => ctx.revert();
  }, [productSlug, categorySlug]);

  if (!product) {
    return (
      <div style={{ padding: '180px 56px 100px', textAlign: 'center' }}>
        <h1 className="t-h2">Product Not Found</h1>
        <button className="btn btn--primary" style={{ marginTop: '24px' }} onClick={() => go('products')}>Back to Products</button>
      </div>
    );
  }

  // Related products (same division, excluding current)
  const related = PRODUCTS.filter(p => p.divisionSlug === categorySlug && p.slug !== productSlug);

  return (
    <div ref={root}>
      {/* Hero Banner & Breadcrumb */}
      <div className="ph">
        <div className="ph__inner">
          <div className="ph__eyebrow">
            <span className="t-label" style={{ cursor: 'pointer' }} onClick={() => go('products')}>Product Portfolio</span> · <span className="t-label" style={{ cursor: 'pointer' }} onClick={() => go(`products/${categorySlug}`)}>{product.divisionTitle}</span> · <span className="t-label">{product.heroTitle}</span>
          </div>
          <h1 className="t-display ph__title">{product.heroTitle}</h1>
          <p className="t-body t-body--lg" style={{ marginTop: '16px', maxWidth: '800px' }}>
            {product.heroDescription}
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div style={{ height: '60vh', minHeight: '380px', overflow: 'hidden', position: 'relative' }}>
        <img src={`/${product.images.hero}`} alt={product.heroTitle} className="img-fill" onError={(e) => { e.target.src = '/railway_hero_bg.png'; }} />
      </div>

      {/* Introduction & Overview */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap split split--60-40" style={{ gap: '80px', alignItems: 'center' }}>
          <div className="g-up">
            <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>Overview</span>
            <h2 className="t-h2" style={{ marginBottom: '24px' }}>{product.introduction}</h2>
            {product.paragraphs.map((pText, i) => (
              <p key={i} className="t-body" style={{ marginBottom: '16px' }}>{pText}</p>
            ))}
          </div>
          <div className="img-wrap g-clip" style={{ height: '400px' }}>
            <img className="img-fill" src={`/${product.images.overview}`} alt={product.heroTitle + " Detail Overview"} onError={(e) => { e.target.src = '/pcb-macro.jpg'; }} />
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--rule)' }}>
        <div className="wrap">
          <div className="g-up" style={{ marginBottom: '56px' }}>
            <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>Key Capabilities</span>
            <h2 className="t-h2">Features &amp; Benefits</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }} className="g-up">
            {product.features.map((feat, idx) => (
              <div key={idx} style={{ background: '#fff', padding: '32px', border: '1px solid var(--rule)' }}>
                <span className="t-label" style={{ color: 'var(--steel)' }}>Feature 0{idx + 1}</span>
                <h3 className="t-h3" style={{ fontSize: '1.25rem', margin: '16px 0 8px' }}>{feat.title}</h3>
                <p className="t-body" style={{ fontSize: '0.875rem' }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications (If present in master, otherwise hidden as per rules) */}

      {/* Technical Specifications */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="g-up" style={{ marginBottom: '40px' }}>
            <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>Technical Parameters</span>
            <h2 className="t-h2">Technical Specifications</h2>
          </div>
          <div className="g-up" style={{ maxWidth: '800px' }}>
            <table className="spec">
              <tbody>
                {product.specs.map((sp, idx) => (
                  <tr key={idx}>
                    <td>{sp.name}</td>
                    <td>{sp.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Downloads */}
      {product.downloads && product.downloads.length > 0 && (
        <section className="section" style={{ background: 'var(--paper)', borderTop: '1px solid var(--rule)' }}>
          <div className="wrap">
            <div className="g-up" style={{ marginBottom: '40px' }}>
              <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>Documentation</span>
              <h2 className="t-h2">Downloads</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="g-up">
              {product.downloads.map((doc, idx) => (
                <a key={idx} href={doc.url} className="btn btn--outline" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '24px', background: '#fff', gap: '8px' }}>
                  <span className="t-label" style={{ fontSize: '0.55rem', color: 'var(--steel)' }}>{doc.type}</span>
                  <span style={{ fontSize: '0.9375rem', fontWeight: '500', color: 'var(--ink)' }}>{doc.name}</span>
                  <span className="t-body" style={{ fontSize: '0.75rem' }}>Size: {doc.size}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {related.length > 0 && (
        <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--rule)' }}>
          <div className="wrap">
            <div className="g-up" style={{ marginBottom: '40px' }}>
              <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>Explore Similar Systems</span>
              <h2 className="t-h2">Related Products</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="g-up">
              {related.map(rel => (
                <div key={rel.slug} style={{ borderTop: '1px solid var(--rule)', paddingTop: '20px' }}>
                  <h4 className="t-h3" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{rel.heroTitle}</h4>
                  <p className="t-body" style={{ fontSize: '0.875rem', marginBottom: '16px' }}>{rel.heroDescription}</p>
                  <button className="btn btn--outline" onClick={() => go(`products/${categorySlug}/${rel.slug}`)}>Explore →</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="band section--sm" style={{ background: 'var(--ink-2)' }}>
        <div className="wrap g-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <h3 className="t-h3" style={{ color: '#F5F4F0', fontSize: '1.5rem', fontWeight: '400' }}>Interested in obtaining technical documentation or scheduling a consultation?</h3>
            <p className="t-body" style={{ fontSize: '0.875rem', color: 'rgba(245,244,240,.5)', marginTop: '4px' }}>Our engineering support hotline is available 24/7 at +91 80 4912 3099.</p>
          </div>
          <button className="btn btn--primary" onClick={() => go('contact')}>Begin an enquiry →</button>
        </div>
      </section>

    </div>
  );
}
