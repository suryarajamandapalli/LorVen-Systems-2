import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Preloader from './components/Preloader';
import Nav from './components/Nav';
import Foot from './components/Foot';
import Home from './pages/Home';

gsap.registerPlugin(ScrollTrigger);

// Lazy-loaded pages
const About      = lazy(() => import('./pages/About'));
const Products   = lazy(() => import('./pages/Products'));
const ProductCategory = lazy(() => import('./pages/ProductCategory'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Services   = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Projects   = lazy(() => import('./pages/Projects'));
const Careers    = lazy(() => import('./pages/Careers'));
const Contact    = lazy(() => import('./pages/Contact'));
const Privacy    = lazy(() => import('./pages/Privacy'));
const Terms      = lazy(() => import('./pages/Terms'));
const NotFound   = lazy(() => import('./pages/NotFound'));

export default function App() {
  const [ready, setReady] = useState(false);
  const [page,  setPage]  = useState('home');
  const [lenis, setLenis] = useState(null);
  const isFirstLoad = useRef(true);

  /* ── Smooth scroll ── */
  useEffect(() => {
    const l = new Lenis({
      duration: 1.4,
      easing: t => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: .9,
    });
    setLenis(l);

    const raf = t => { l.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);

    l.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(v) {
        return arguments.length ? l.scrollTo(v, { immediate: true }) : l.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });
    ScrollTrigger.addEventListener('refresh', () => l.resize());
    ScrollTrigger.refresh();

    return () => {
      l.destroy();
      ScrollTrigger.removeEventListener('refresh', () => l.resize());
    };
  }, []);

  /* ── Body overflow during preloader ── */
  useEffect(() => {
    document.body.style.overflow = ready ? '' : 'hidden';
  }, [ready]);

  /* ── Navigate ── */
  const go = (p) => {
    setPage(p);
    setTimeout(() => {
      if (lenis) lenis.scrollTo(0, { immediate: true });
      else window.scrollTo(0, 0);
      ScrollTrigger.refresh();
    }, 20);
  };

  /* ── Page transition ── */
  useEffect(() => {
    if (!ready) return;
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      gsap.set('#page-root', { opacity: 1, y: 0 });
      return;
    }
    gsap.fromTo('#page-root', { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: .55, ease: 'power3.out'
    });
  }, [page, ready]);

  /* ── Router ── */
  const render = () => {
    const p = { go, ready };

    // Matches standard pages
    if (page === 'home') return <Home {...p} />;
    if (page === 'about') return <About {...p} />;
    if (page === 'products') return <Products {...p} />;
    if (page === 'services') return <Services {...p} />;
    if (page === 'projects') return <Projects {...p} />;
    if (page === 'careers') return <Careers {...p} />;
    if (page === 'contact') return <Contact {...p} />;
    if (page === 'privacy') return <Privacy {...p} />;
    if (page === 'terms') return <Terms {...p} />;

    // Matches dynamic Category pages: /products/snt, /products/electric-locomotive, /products/wagons
    if (page.startsWith('products/')) {
      const sub = page.replace('products/', '');
      const parts = sub.split('/');
      if (parts.length === 1) {
        // e.g. products/snt
        return <ProductCategory categorySlug={parts[0]} {...p} />;
      }
      if (parts.length === 2) {
        // e.g. products/snt/rdpms
        return <ProductDetail categorySlug={parts[0]} productSlug={parts[1]} {...p} />;
      }
    }

    // Matches dynamic Service pages: /services/design, /services/installation
    if (page.startsWith('services/')) {
      const sub = page.replace('services/', '');
      const parts = sub.split('/');
      if (parts.length === 1) {
        return <ServiceDetail serviceSlug={parts[0]} {...p} />;
      }
    }

    return <NotFound {...p} />;
  };

  return (
    <>
      <Preloader onComplete={() => setReady(true)} />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        pointerEvents: ready ? 'auto' : 'none',
        userSelect: ready ? 'auto' : 'none'
      }}>
        <Nav page={page} go={go} ready={ready} />
        <main id="page-root" style={{ flex: 1 }}>
          <Suspense fallback={
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="t-label">Loading…</span>
            </div>
          }>
            {render()}
          </Suspense>
        </main>
        <Foot go={go} />
      </div>
    </>
  );
}
