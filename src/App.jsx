import { useEffect, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';

// Lazy load heavy components for faster initial load
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    if (window.innerWidth > 768) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      return () => lenis.destroy();
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Preloader />
      <Navbar />
      <main>
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-transparent" />}>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
