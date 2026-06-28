import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { AuroraBackground } from '../components/AuroraBackground';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Timeline } from '../components/Timeline';
import { MorphingCode } from '../components/MorphingCode';
import { Journey } from '../components/Journey';
import { PlatformMockup } from '../components/PlatformMockup';
import { ParentMockup } from '../components/ParentMockup';
import { Features } from '../components/Features';
import { FAQ } from '../components/FAQ';
import { Poll } from '../components/Poll';
import { CTA } from '../components/CTA';

export default function Landing() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Tracking visitor
    const trackVisitor = async () => {
      if (localStorage.getItem('tracked_visit')) return;
      
      const ua = navigator.userAgent;
      let os = "Unknown OS";
      if (ua.indexOf("Win") !== -1) os = "Windows";
      if (ua.indexOf("Mac") !== -1) os = "MacOS";
      if (ua.indexOf("Linux") !== -1) os = "Linux";
      if (ua.indexOf("Android") !== -1) os = "Android";
      if (ua.indexOf("like Mac") !== -1) os = "iOS";

      let browser = "Unknown Browser";
      if (ua.indexOf("Chrome") !== -1) browser = "Chrome";
      else if (ua.indexOf("Safari") !== -1) browser = "Safari";
      else if (ua.indexOf("Firefox") !== -1) browser = "Firefox";
      else if (ua.indexOf("Edge") !== -1) browser = "Edge";

      let device = /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua) ? "Mobile" : "Desktop";

      try {
        await fetch('/api/track-visitor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ os, browser, device, userAgent: ua })
        });
        localStorage.setItem('tracked_visit', 'true');
      } catch (err) {
        console.error('Failed to track', err);
      }
    };

    trackVisitor();

    return () => lenis.destroy();
  }, []);

  return (
    <main className="relative w-full overflow-clip selection:bg-blue-500/30">
      <AuroraBackground />
      <Header />
      <Hero />
      <Timeline />
      <MorphingCode />
      <Journey />
      <PlatformMockup />
      <ParentMockup />
      <Features />
      <FAQ />
      <Poll />
      <CTA />
    </main>
  );
}