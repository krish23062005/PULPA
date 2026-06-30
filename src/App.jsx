import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProductGrid from './components/ProductGrid';
import BrandEthos from './components/BrandEthos';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { Agentation } from 'agentation';

function App() {
  // Synchronously check session storage so the very first render includes the preloader if needed
  const [showPreloader, setShowPreloader] = useState(() => {
    return !sessionStorage.getItem('hasSeenPreloader');
  });

  useEffect(() => {
    // 1. Force the browser to NOT remember the scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // 2. Always scroll to the very top immediately on load/reload
    window.scrollTo(0, 0);

    // 3. Mark the preloader as seen so subsequent reloads skip it
    if (showPreloader) {
      sessionStorage.setItem('hasSeenPreloader', 'true');
    }
  }, [showPreloader]);

  return (
    <>
      {showPreloader && <Preloader />}
      <div className="flex flex-col min-h-screen overflow-x-hidden w-full">
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <Hero />
        
        <Marquee text="CRUSH THE ORDINARY • NO PRESERVATIVES • PURE CHAOS • FRESH •" />
        
        <ProductGrid />
        
        <Marquee text="LOUD JUICE • LOUD LIFE • 100% RAW AF •" />
        
        <Timeline />
        
        <BrandEthos />
      </main>

      <FAQ />
      <Footer />
      </div>
      {/* Vite uses import.meta.env.DEV instead of process.env.NODE_ENV */}
      {import.meta.env.DEV && <Agentation />}
    </>
  );
}

export default App;
