import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCTS, PROJECTS } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Arr = ({ col = 'currentColor' }) => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke={col} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SLIDES = [
  {
    image: '/railway_hero_bg.png',
    label: 'MISSION-CRITICAL ENGINEERING',
    title: 'Engineering Confidence for Critical Systems.',
    sub: 'LorVen Systems develops high-reliability electronic systems for railway transportation, aerospace, defence and industrial infrastructure.',
    link: 'products'
  },
  {
    image: '/cleanroom_visual.png',
    label: 'SIGNAL & TELECOMMUNICATIONS',
    title: 'Signal & Telecommunications',
    sub: 'Advanced signalling technologies including RDPMS and IPS for safer, smarter and more reliable railway operations.',
    link: 'products/snt'
  },
  {
    image: '/locomotive_visual.png',
    label: 'ELECTRIC LOCOMOTIVE SOLUTIONS',
    title: 'Electric Locomotive Solutions',
    sub: 'Engineering advanced locomotive simulators and Integrated Functional Test systems that improve operational readiness and maintenance efficiency.',
    link: 'products/electric-locomotive'
  },
  {
    image: '/railway_hero_bg.png',
    label: 'COACH & WAGON TECHNOLOGIES',
    title: 'Coach & Wagon Technologies',
    sub: 'High-performance onboard electronics and intelligent inspection systems including WLI and AHABD designed for safer railway operations.',
    link: 'products/wagons'
  },
  {
    image: '/smt_bg.png',
    label: 'INDUSTRIAL ELECTRICAL SYSTEMS',
    title: 'Industrial Electrical Systems',
    sub: 'Reliable electrical engineering solutions supporting transportation, infrastructure and mission-critical industrial environments.',
    link: 'services'
  },
  {
    image: '/hero_bg.png',
    label: 'ENGINEERING SERVICES',
    title: 'Engineering Services',
    sub: 'End-to-end engineering support including system design, manufacturing, installation, testing, commissioning and lifecycle support.',
    link: 'services'
  }
];

export default function Home({ go, ready }) {
  const root = useRef(null);
  const slidesRef = useRef([]);
  const progressTween = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isFirstActive = useRef(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Parallax for all slide background images */
      gsap.utils.toArray('.hero__bg').forEach(bg => {
        gsap.to(bg, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      });

      /* Scroll reveals */
      gsap.utils.toArray('.g-up').forEach(el => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%' }
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  // Slider animation handler
  useEffect(() => {
    if (!ready) return;

    const activeSlide = slidesRef.current[currentSlide];
    if (!activeSlide) return;

    const bg = activeSlide.querySelector('.hero__bg');
    const label = activeSlide.querySelector('.slide-label');
    const title = activeSlide.querySelector('.slide-title');
    const sub = activeSlide.querySelector('.slide-sub');
    const btns = activeSlide.querySelector('.slide-btns');

    const tl = gsap.timeline();

    slidesRef.current.forEach((slide, idx) => {
      if (idx !== currentSlide && slide) {
        const otherBg = slide.querySelector('.hero__bg');
        if (otherBg) {
          gsap.set(otherBg, { scale: 1.15 });
        }
      }
    });

    const startOpacity = isFirstActive.current ? 1 : 0;
    isFirstActive.current = false;

    tl.fromTo(bg, 
      { scale: 1.15, opacity: startOpacity }, 
      { scale: 1.05, opacity: 1, duration: 1.6, ease: 'power3.out' }, 
      0
    );

    tl.fromTo([label, title, sub, btns],
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out', stagger: 0.08 },
      0.15
    );

    const activeBar = document.querySelector(`.progress-bar-${currentSlide}`);
    if (activeBar) {
      gsap.set('.hero__indicator-progress-bar', { width: '0%' });

      if (progressTween.current) progressTween.current.kill();
      progressTween.current = gsap.to(activeBar, {
        width: '100%',
        duration: 6.5,
        ease: 'none',
        onComplete: () => {
          setCurrentSlide(prev => (prev + 1) % SLIDES.length);
        }
      });
    }

    return () => {
      tl.kill();
    };
  }, [currentSlide, ready]);

  const handleIndicatorClick = (idx) => {
    if (idx === currentSlide) return;
    
    const activeSlide = slidesRef.current[currentSlide];
    if (activeSlide) {
      const label = activeSlide.querySelector('.slide-label');
      const title = activeSlide.querySelector('.slide-title');
      const sub = activeSlide.querySelector('.slide-sub');
      const btns = activeSlide.querySelector('.slide-btns');
      
      gsap.to([label, title, sub, btns], {
        y: -20,
        opacity: 0,
        duration: 0.35,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentSlide(idx);
        }
      });
    } else {
      setCurrentSlide(idx);
    }
  };

  return (
    <div ref={root}>

      {/* ─── HERO SLIDER ─── */}
      <section className="hero">
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`hero__slide ${idx === currentSlide ? 'hero__slide--active' : ''}`}
            ref={el => slidesRef.current[idx] = el}
          >
            <div className="hero__bg-wrap">
              <img className="hero__bg" src={slide.image} alt={slide.label} />
            </div>
            <div className="hero__veil" />
            <div className="hero__body">
              <span className="hero__label slide-label">
                {slide.label}
              </span>
              <h1 className="hero__title slide-title">
                {slide.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < slide.title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
              <div className="hero__row">
                <p className="hero__sub slide-sub">
                  {slide.sub}
                </p>
                <div className="hero__btns slide-btns">
                  <button className="btn btn--primary" onClick={() => go(slide.link)}>Explore Solutions</button>
                  <button className="btn btn--ghost-light" onClick={() => go('contact')}>Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ─── SLIDER CONTROLS ─── */}
        <div className="hero__controls">
          <div className="wrap hero__controls-wrap">
            {SLIDES.map((slide, idx) => (
              <button
                key={idx}
                className={`hero__indicator ${idx === currentSlide ? 'hero__indicator--active' : ''}`}
                onClick={() => handleIndicatorClick(idx)}
              >
                <div className="hero__indicator-progress-bg">
                  <div className={`hero__indicator-progress-bar progress-bar-${idx}`} />
                </div>
                <span className="hero__indicator-num">0{idx + 1}</span>
                <span className="hero__indicator-label">{slide.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap split split--60-40" style={{ gap: '80px', alignItems: 'center' }}>
          <div className="g-up">
            <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>ABOUT LORVEN</span>
            <h2 className="t-h2" style={{ marginBottom: '28px' }}>Engineering Confidence Since 2008</h2>
            <p className="t-body t-body--lg" style={{ marginBottom: '32px' }}>
              For over fifteen years, LorVen Systems has engineered mission-critical electronics for railway transportation, industrial infrastructure and defence applications.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
              {[
                { num: '15+', label: 'Years Experience' },
                { num: 'Fail-Safe', label: 'Mission-Critical' },
                { num: 'EN 50155', label: 'Railway Electronics' },
                { num: 'Class 3', label: 'Certified Plant' }
              ].map((stat, i) => (
                <div key={i}>
                  <h3 className="t-display" style={{ fontSize: '2rem', fontWeight: '400', color: 'var(--steel)', marginBottom: '4px' }}>{stat.num}</h3>
                  <p className="t-label" style={{ fontSize: '0.55rem', letterSpacing: '0.1em' }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <button className="btn btn--primary" onClick={() => go('about')}>Learn More →</button>
          </div>
          <div className="img-wrap g-clip" style={{ height: '480px' }}>
            <img className="img-fill" src="/smt-line.jpg" alt="SMT PCB Production Line" onError={(e) => { e.target.src = '/smt_bg.png'; }} />
          </div>
        </div>
      </section>

      {/* ─── VISION, MISSION, PURPOSE ─── */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
            <div className="g-up" style={{ background: '#fff', padding: '40px', borderTop: '2px solid var(--steel)' }}>
              <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>The Vision</span>
              <p className="t-body" style={{ color: 'var(--ink)' }}>
                To build a globally respected technology company delivering world-class systems for safety-critical and mission-critical industries.
              </p>
              <div style={{ height: '160px', overflow: 'hidden', marginTop: '24px' }}>
                <img src="/engineers.jpg" alt="Engineers" className="img-fill" onError={(e) => { e.target.src = '/cleanroom_visual.png'; }} />
              </div>
            </div>

            <div className="g-up" style={{ background: '#fff', padding: '40px', borderTop: '2px solid var(--steel)' }}>
              <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>The Mission</span>
              <p className="t-body" style={{ color: 'var(--ink)' }}>
                To create reliable, innovative, and high-performance products that advance transportation, infrastructure, aerospace, and defence through engineering excellence and disciplined execution.
              </p>
              <div style={{ height: '160px', overflow: 'hidden', marginTop: '24px' }}>
                <img src="/electrical-cabinet.jpg" alt="Electrical Cabinet" className="img-fill" onError={(e) => { e.target.src = '/smt_bg.png'; }} />
              </div>
            </div>

            <div className="g-up" style={{ background: '#fff', padding: '40px', borderTop: '2px solid var(--steel)' }}>
              <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>The Purpose</span>
              <p className="t-body" style={{ color: 'var(--ink)' }}>
                Engineering technology that improves safety, reliability, and performance where failure is not an option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE BUILD (PRODUCTS INTERACTIVE) ─── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="g-up" style={{ marginBottom: '64px' }}>
            <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>Products</span>
            <h2 className="t-h2">What we build.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px', marginBottom: '48px' }}>
            
            <div className="g-up" style={{ borderTop: '1px solid var(--rule)', paddingTop: '24px' }}>
              <h3 className="t-h3" style={{ marginBottom: '16px', fontSize: '1.5rem' }}>Signalling &amp; Telecom</h3>
              <div style={{ marginBottom: '20px' }}>
                <strong style={{ fontSize: '0.875rem', display: 'block', color: 'var(--ink)' }}>RDPMS</strong>
                <p className="t-body" style={{ fontSize: '0.875rem' }}>Intelligent IoT platform continuously monitoring railway signalling equipment health, analyzing anomalies and generating predictive alerts before failures occur.</p>
                <span className="btn btn--text" style={{ fontSize: '0.75rem', marginTop: '8px' }} onClick={() => go('products/snt/rdpms')}>Explore Product →</span>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <strong style={{ fontSize: '0.875rem', display: 'block', color: 'var(--ink)' }}>IPS</strong>
                <p className="t-body" style={{ fontSize: '0.875rem' }}>Microprocessor-controlled power system delivering uninterrupted, stable, and redundant electricity to critical railway signalling networks.</p>
                <span className="btn btn--text" style={{ fontSize: '0.75rem', marginTop: '8px' }} onClick={() => go('products/snt/ips')}>Explore Product →</span>
              </div>
            </div>

            <div className="g-up" style={{ borderTop: '1px solid var(--rule)', paddingTop: '24px' }}>
              <h3 className="t-h3" style={{ marginBottom: '16px', fontSize: '1.5rem' }}>Electric Locomotive</h3>
              <div style={{ marginBottom: '20px' }}>
                <strong style={{ fontSize: '0.875rem', display: 'block', color: 'var(--ink)' }}>Driving Simulator</strong>
                <p className="t-body" style={{ fontSize: '0.875rem' }}>High-fidelity driving simulation platform providing realistic training, route familiarization, and emergency scenarios for locomotive drivers.</p>
                <span className="btn btn--text" style={{ fontSize: '0.75rem', marginTop: '8px' }} onClick={() => go('products/electric-locomotive/simulators')}>Explore Product →</span>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <strong style={{ fontSize: '0.875rem', display: 'block', color: 'var(--ink)' }}>IFT</strong>
                <p className="t-body" style={{ fontSize: '0.875rem' }}>Comprehensive diagnostic platform verifying the electrical and electronic performance of locomotives during commissioning and overhauls.</p>
                <span className="btn btn--text" style={{ fontSize: '0.75rem', marginTop: '8px' }} onClick={() => go('products/electric-locomotive/ift')}>Explore Product →</span>
              </div>
            </div>

            <div className="g-up" style={{ borderTop: '1px solid var(--rule)', paddingTop: '24px' }}>
              <h3 className="t-h3" style={{ marginBottom: '16px', fontSize: '1.5rem' }}>Coaches &amp; Wagons</h3>
              <div style={{ marginBottom: '20px' }}>
                <strong style={{ fontSize: '0.875rem', display: 'block', color: 'var(--ink)' }}>WLI</strong>
                <p className="t-body" style={{ fontSize: '0.875rem' }}>On-board load monitoring system accurately measuring wagon weight to prevent overloading and ensure railway safety compliance.</p>
                <span className="btn btn--text" style={{ fontSize: '0.75rem', marginTop: '8px' }} onClick={() => go('products/wagons/wli')}>Explore Product →</span>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <strong style={{ fontSize: '0.875rem', display: 'block', color: 'var(--ink)' }}>AHABD</strong>
                <p className="t-body" style={{ fontSize: '0.875rem' }}>Wayside acoustic detector identifying abnormal bearing temperatures and signatures early to reduce derailment risks.</p>
                <span className="btn btn--text" style={{ fontSize: '0.75rem', marginTop: '8px' }} onClick={() => go('products/wagons/ahabd')}>Explore Product →</span>
              </div>
            </div>

          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }} className="g-up">
            <button className="btn btn--primary" onClick={() => go('products')}>All products →</button>
          </div>
        </div>
      </section>

      {/* ─── OUR SERVICES ─── */}
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="wrap">
          <div className="g-up" style={{ marginBottom: '64px' }}>
            <span className="t-label" style={{ display: 'block', marginBottom: '16px' }}>Services</span>
            <h2 className="t-h2">Our Services</h2>
          </div>

          <div className="split" style={{ gap: '48px', marginBottom: '48px' }}>
            <div className="g-up" style={{ background: '#fff', padding: '48px', borderTop: '1px solid var(--rule)' }}>
              <span className="t-label" style={{ display: 'block', marginBottom: '24px' }}>Design</span>
              <p className="t-body" style={{ marginBottom: '32px' }}>
                Schematic capture, PCB layout, mechanical packaging, and validation testing for rolling stock and trackside electronics under one roof.
              </p>
              <div style={{ height: '240px', overflow: 'hidden', marginBottom: '32px' }}>
                <img src="/service-design.png" alt="Engineering Design Schematic" className="img-fill" />
              </div>
              <button className="btn btn--primary" onClick={() => go('services/design')}>Learn More →</button>
            </div>

            <div className="g-up" style={{ background: '#fff', padding: '48px', borderTop: '1px solid var(--rule)' }}>
              <span className="t-label" style={{ display: 'block', marginBottom: '24px' }}>Installation</span>
              <p className="t-body" style={{ marginBottom: '32px' }}>
                Turnkey installation, cabin integration, commissioning, and depot-level maintenance services deployed directly on the field.
              </p>
              <div style={{ height: '240px', overflow: 'hidden', marginBottom: '32px' }}>
                <img src="/service-installation.png" alt="Site Installation Commissioning" className="img-fill" />
              </div>
              <button className="btn btn--primary" onClick={() => go('services/installation')}>Learn More →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT / CTA ─── */}
      <section className="panorama g-clip">
        <img src="/new-bullet-train.png" alt="High speed bullet train" className="img-fill" />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(13,13,13,.95) 0%, rgba(13,13,13,.5) 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '56px'
        }}>
          <div className="g-up">
            <span className="t-label" style={{ color: 'rgba(245,244,240,.6)', display: 'block', marginBottom: '16px' }}>Contact Us</span>
            <h2 className="t-display" style={{ color: '#F5F4F0', fontSize: '3.5rem', marginBottom: '12px' }}>Tell us about the system you need to build.</h2>
            <button className="btn btn--primary" style={{ marginTop: '28px' }} onClick={() => go('contact')}>Begin an enquiry →</button>
          </div>
        </div>
      </section>

    </div>
  );
}
