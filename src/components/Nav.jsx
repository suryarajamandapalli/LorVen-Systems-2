import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { CATEGORIES } from '../data';

const PRODUCTS_PREVIEW = {
  snt: {
    title: 'Signalling & Telecom',
    desc: 'Fail-safe wayside monitoring and integrated power configurations designed for critical interlocking loops.',
    img: '/cleanroom_visual.png',
    link: 'products/snt'
  },
  'electric-locomotive': {
    title: 'Electric Locomotive',
    desc: 'High-fidelity driving simulation rigs, test consoles, and robust auxiliary traction cabinetry.',
    img: '/locomotive_visual.png',
    link: 'products/electric-locomotive'
  },
  wagons: {
    title: 'Coaches & Wagons',
    desc: 'Axle load sensors, telemetry hubs, and wayside acoustic bearing inspectors to prevent mainline failures.',
    img: '/railway_hero_bg.png',
    link: 'products/wagons'
  }
};

const SERVICES = [
  { label: 'Design',        id: 'services/design', desc: 'FMEDA analysis, CAD schematics, and Rolling Stock component validation.' },
  { label: 'Installation',  id: 'services/installation', desc: 'Dielectric insulation testing and field shed cabling commissioning.' },
];

export default function Nav({ page, go, ready }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawer] = useState(false);
  
  // Hover dropdown state
  const [activeMenu, setActiveMenu] = useState(null); // 'products', 'services', or null
  const [activeCategory, setActiveCategory] = useState('snt');

  const navRef = useRef(null);
  const dividerRef = useRef(null);
  const timeoutRef = useRef(null);
  
  const logoImgRef = useRef(null);
  
  const productsMenuRef = useRef(null);
  const servicesMenuRef = useRef(null);
  const previewImgsRef = useRef({});
  const prevCategoryRef = useRef('snt');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const isHome = page === 'home';
  const isSolid = scrolled || activeMenu !== null;
  const transparent = isHome && !isSolid;

  const nav = (p) => {
    go(p);
    setDrawer(false);
    setActiveMenu(null);
  };

  // ── Hover menu state management ──
  const showMenu = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const hideMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const keepMenu = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  // ── GSAP Link hover transitions ──
  const handleLinkEnter = (e) => {
    const link = e.currentTarget.querySelector('.nav__link');
    if (!link) return;
    
    gsap.killTweensOf(link);
    gsap.to(link, {
      opacity: 0.75,
      letterSpacing: '0.18em',
      y: -2,
      duration: 0.25,
      ease: 'power3.out'
    });
  };

  const handleLinkLeave = (e) => {
    const link = e.currentTarget.querySelector('.nav__link');
    if (!link) return;
    
    gsap.killTweensOf(link);
    gsap.to(link, {
      opacity: 1,
      letterSpacing: '0.15em',
      y: 0,
      duration: 0.25,
      ease: 'power3.out'
    });
  };

  // ── GSAP Centered logo home interaction ──
  const hoverBrand = () => {
    if (!ready) return;
    gsap.killTweensOf(logoImgRef.current);

    gsap.to(logoImgRef.current, {
      scale: 1.05,
      y: -4,
      duration: 0.25,
      ease: 'power3.out'
    });
  };

  const leaveBrand = () => {
    if (!ready) return;
    gsap.killTweensOf(logoImgRef.current);

    gsap.to(logoImgRef.current, {
      scale: 1,
      y: 0,
      duration: 0.25,
      ease: 'power3.out'
    });
  };

  // ── GSAP Navbar height expand downward animation ──
  useEffect(() => {
    const baseHeight = scrolled ? 72 : 92;
    let contentHeight = 0;
    
    if (activeMenu === 'products' && productsMenuRef.current) {
      contentHeight = productsMenuRef.current.offsetHeight;
    } else if (activeMenu === 'services' && servicesMenuRef.current) {
      contentHeight = servicesMenuRef.current.offsetHeight;
    }

    const targetHeight = baseHeight + contentHeight;

    // Animate navbar height
    gsap.killTweensOf(navRef.current);
    gsap.to(navRef.current, {
      height: targetHeight,
      duration: 0.45,
      ease: 'power3.out'
    });

    // Animate divider line scaleX
    if (activeMenu !== null) {
      gsap.to(dividerRef.current, {
        scaleX: 1,
        duration: 0.45,
        ease: 'power3.out'
      });
    } else {
      gsap.to(dividerRef.current, {
        scaleX: 0,
        duration: 0.3,
        ease: 'power3.in'
      });
    }
  }, [activeMenu, scrolled]);

  // ── GSAP Products Mega Menu reveal triggers ──
  useEffect(() => {
    if (activeMenu === 'products') {
      gsap.killTweensOf(productsMenuRef.current);
      gsap.set(productsMenuRef.current, { visibility: 'visible' });
      
      const cols = productsMenuRef.current.querySelectorAll('.mega-menu__col');
      const imgWrap = productsMenuRef.current.querySelector('.mega-menu__img-wrap');
      const descWrap = productsMenuRef.current.querySelector('.mega-menu__desc-wrap');

      gsap.to(productsMenuRef.current, { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' });
      gsap.fromTo(cols, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: 'power3.out', delay: 0.1 });
      gsap.fromTo(imgWrap, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.55, ease: 'power3.out', delay: 0.15 });
      gsap.fromTo(descWrap, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', delay: 0.2 });
    } else {
      gsap.killTweensOf(productsMenuRef.current);
      gsap.to(productsMenuRef.current, {
        opacity: 0,
        y: -8,
        duration: 0.25,
        ease: 'power3.in',
        onComplete: () => {
          if (activeMenu !== 'products') {
            gsap.set(productsMenuRef.current, { visibility: 'hidden' });
          }
        }
      });
    }
  }, [activeMenu]);

  // ── GSAP Services dropdown reveal triggers ──
  useEffect(() => {
    if (activeMenu === 'services') {
      gsap.killTweensOf(servicesMenuRef.current);
      gsap.set(servicesMenuRef.current, { visibility: 'visible' });

      const cols = servicesMenuRef.current.querySelectorAll('.services-menu__col');

      gsap.to(servicesMenuRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' });
      gsap.fromTo(cols, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power3.out', delay: 0.1 });
    } else {
      gsap.killTweensOf(servicesMenuRef.current);
      gsap.to(servicesMenuRef.current, {
        opacity: 0,
        y: -8,
        duration: 0.25,
        ease: 'power3.in',
        onComplete: () => {
          if (activeMenu !== 'services') {
            gsap.set(servicesMenuRef.current, { visibility: 'hidden' });
          }
        }
      });
    }
  }, [activeMenu]);

  // ── GSAP Category image crossfade ──
  useEffect(() => {
    const nextImg = previewImgsRef.current[activeCategory];
    const prevImg = previewImgsRef.current[prevCategoryRef.current];

    if (nextImg) {
      gsap.killTweensOf(nextImg);
      gsap.to(nextImg, {
        opacity: 1,
        duration: 0.35,
        ease: 'power2.inOut'
      });
    }

    if (prevImg && prevImg !== nextImg) {
      gsap.killTweensOf(prevImg);
      gsap.to(prevImg, {
        opacity: 0,
        duration: 0.35,
        ease: 'power2.inOut'
      });
    }

    prevCategoryRef.current = activeCategory;
  }, [activeCategory]);

  return (
    <>
      <nav ref={navRef} className={['nav', isSolid ? 'nav--solid' : '', transparent ? 'nav--hero-transparent' : ''].join(' ')}>
        
        {/* Navbar main links row */}
        <div className="nav__inner" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
          
          {/* Centered Brand Logo (Anchor) - placed absolute or left relative to avoid grids on mobile */}
          <span 
            className="nav__brand-wrapper"
            onMouseEnter={hoverBrand}
            onMouseLeave={leaveBrand}
            onClick={() => nav('home')}
            style={{ cursor: 'pointer', zIndex: 1001 }}
          >
            <div className="nav__logo-container" ref={logoImgRef}>
              <img 
                id="navbar-logo-img"
                src={transparent ? "/logo_white.svg" : "/logo_black.svg"} 
                alt="LorVen Systems" 
                style={{ 
                  height: '36px', 
                  width: 'auto', 
                  display: 'block',
                  opacity: ready ? 1 : 0,
                  transition: ready ? 'opacity 0.25s cubic-bezier(0.25, 1, 0.5, 1) 0.85s' : 'none'
                }} 
              />
            </div>
          </span>

          <div className="nav__menu-container">
            {/* 1. About */}
            <span 
              className="nav__link-wrapper"
              onMouseEnter={handleLinkEnter}
              onMouseLeave={handleLinkLeave}
              onClick={() => nav('about')}
            >
              <span className="nav__link">About</span>
            </span>

            {/* 2. Products */}
            <span 
              className="nav__link-wrapper"
              onMouseEnter={(e) => { handleLinkEnter(e); showMenu('products'); }}
              onMouseLeave={(e) => { handleLinkLeave(e); hideMenu(); }}
            >
              <span className="nav__link">
                Products <span className="arrow">▼</span>
              </span>
            </span>

            <div style={{ width: '160px' }} /> {/* Spacer for centered logo spacing on desktop */}

            {/* 4. Services */}
            <span 
              className="nav__link-wrapper"
              onMouseEnter={(e) => { handleLinkEnter(e); showMenu('services'); }}
              onMouseLeave={(e) => { handleLinkLeave(e); hideMenu(); }}
            >
              <span className="nav__link">
                Services <span className="arrow">▼</span>
              </span>
            </span>

            {/* 5. Contact */}
            <span 
              className="nav__link-wrapper"
              onMouseEnter={handleLinkEnter}
              onMouseLeave={handleLinkLeave}
              onClick={() => nav('contact')}
            >
              <span className="nav__link">Contact</span>
            </span>
          </div>

          {/* Mobile Hamburger trigger */}
          <div className="hamburger"
               style={{ color: transparent ? '#F5F4F0' : 'var(--ink)', zIndex: 1001 }}
               onClick={() => setDrawer(true)}>
             <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: 'currentColor', margin: '4px 0' }}/><span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: 'currentColor', margin: '4px 0' }}/><span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: 'currentColor', margin: '4px 0' }}/>
          </div>

        </div>

        {/* Dynamic sliding divider */}
        <div ref={dividerRef} className="nav__divider" />

        {/* ── PRODUCTS MEGA MENU ── */}
        <div 
          ref={productsMenuRef}
          className="mega-menu"
          style={{ opacity: 0, visibility: 'hidden', transform: 'translateY(-8px)', display: 'grid', gridTemplateColumns: '65fr 35fr' }}
          onMouseEnter={() => keepMenu('products')}
          onMouseLeave={hideMenu}
        >
          {/* Left Grid */}
          <div className="mega-menu__grid">
            
            <div className="mega-menu__col" onMouseEnter={() => setActiveCategory('snt')}>
              <h4 className="mega-menu__header" onClick={() => nav('products/snt')}>Signalling &amp; Telecom</h4>
              <ul className="mega-menu__list">
                <li className="mega-menu__item">
                  <span className="mega-menu__link" onClick={() => nav('products/snt/rdpms')}>RDPMS</span>
                </li>
                <li className="mega-menu__item">
                  <span className="mega-menu__link" onClick={() => nav('products/snt/ifd')}>IFD</span>
                </li>
                <li className="mega-menu__item">
                  <span className="mega-menu__link" onClick={() => nav('products/snt/ips')}>IPS</span>
                </li>
              </ul>
            </div>

            <div className="mega-menu__col" onMouseEnter={() => setActiveCategory('electric-locomotive')}>
              <h4 className="mega-menu__header" onClick={() => nav('products/electric-locomotive')}>Electric Locomotive</h4>
              <ul className="mega-menu__list">
                <li className="mega-menu__item">
                  <span className="mega-menu__link" onClick={() => nav('products/electric-locomotive/simulators')}>Driving Simulators</span>
                </li>
                <li className="mega-menu__item">
                  <span className="mega-menu__link" onClick={() => nav('products/electric-locomotive/ift')}>IFT</span>
                </li>
              </ul>
            </div>

            <div className="mega-menu__col" onMouseEnter={() => setActiveCategory('wagons')}>
              <h4 className="mega-menu__header" onClick={() => nav('products/wagons')}>Coaches &amp; Wagons</h4>
              <ul className="mega-menu__list">
                <li className="mega-menu__item">
                  <span className="mega-menu__link" onClick={() => nav('products/wagons/wli')}>WLI</span>
                </li>
                <li className="mega-menu__item">
                  <span className="mega-menu__link" onClick={() => nav('products/wagons/ahabd')}>AHABD</span>
                </li>
              </ul>
            </div>

            <div className="mega-menu__col">
              <h4 className="mega-menu__header" onClick={() => nav('products')}>All Products</h4>
              <ul className="mega-menu__list">
                <li className="mega-menu__item">
                  <span className="mega-menu__link" onClick={() => nav('products')}>Index Overview</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Preview Panel */}
          <div className="mega-menu__preview">
            <div className="mega-menu__img-wrap">
              {Object.keys(PRODUCTS_PREVIEW).map(cat => (
                <img
                  key={cat}
                  ref={el => previewImgsRef.current[cat] = el}
                  className="mega-menu__img"
                  src={PRODUCTS_PREVIEW[cat].img}
                  alt={cat}
                  style={{ opacity: cat === 'snt' ? 1 : 0 }}
                />
              ))}
            </div>
            <div className="mega-menu__desc-wrap">
              <h5 className="mega-menu__title">{PRODUCTS_PREVIEW[activeCategory]?.title}</h5>
              <p className="mega-menu__desc">{PRODUCTS_PREVIEW[activeCategory]?.desc}</p>
              <span className="mega-menu__explore" onClick={() => nav(PRODUCTS_PREVIEW[activeCategory]?.link)}>
                Explore solutions ➜
              </span>
            </div>
          </div>

        </div>

        {/* ── SERVICES ACCORDION MENU ── */}
        <div 
          ref={servicesMenuRef}
          className="services-menu"
          style={{ opacity: 0, visibility: 'hidden', transform: 'translateY(-8px)' }}
          onMouseEnter={() => keepMenu('services')}
          onMouseLeave={hideMenu}
        >
          {SERVICES.map(s => (
            <div key={s.id} className="services-menu__col" onClick={() => nav(s.id)}>
              <h4 className="services-menu__header">{s.label} Services</h4>
              <p className="services-menu__desc">{s.desc}</p>
            </div>
          ))}
        </div>

      </nav>

      {/* Full-Screen Mobile Overlay */}
      <div className={`mobile-nav ${drawerOpen ? 'mobile-nav--open' : ''}`}>
        <button className="mobile-nav__close" onClick={() => setDrawer(false)}>✕</button>
        <div className="mobile-nav__content">
          <div className="mobile-nav__link" onClick={() => nav('home')}>Home</div>
          <div className="mobile-nav__link" onClick={() => nav('about')}>About</div>
          
          <div className="mobile-nav__accordion">
            <div className="mobile-nav__link">Products</div>
            <div className="mobile-nav__nested">
              <div className="mobile-nav__nested-link" onClick={() => nav('products/snt')}>Signalling &amp; Telecom</div>
              <div className="mobile-nav__nested-link" onClick={() => nav('products/electric-locomotive')}>Electric Locomotive</div>
              <div className="mobile-nav__nested-link" onClick={() => nav('products/wagons')}>Coaches &amp; Wagons</div>
            </div>
          </div>

          <div className="mobile-nav__accordion">
            <div className="mobile-nav__link">Services</div>
            <div className="mobile-nav__nested">
              <div className="mobile-nav__nested-link" onClick={() => nav('services/design')}>Design</div>
              <div className="mobile-nav__nested-link" onClick={() => nav('services/installation')}>Installation</div>
            </div>
          </div>

          <div className="mobile-nav__link" onClick={() => nav('contact')}>Contact</div>
        </div>
      </div>
    </>
  );
}
