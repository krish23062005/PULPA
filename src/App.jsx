import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProductGrid from './components/ProductGrid';
import BrandEthos from './components/BrandEthos';
import Footer from './components/Footer';
import { Agentation } from 'agentation';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <Hero />
        
        <Marquee text="CRUSH THE ORDINARY • NO PRESERVATIVES • PURE CHAOS • FRESH •" />
        
        <ProductGrid />
        
        <Marquee text="LOUD JUICE • LOUD LIFE • 100% RAW AF •" />
        
        <BrandEthos />
      </main>

      <Footer />
      </div>
      {/* Vite uses import.meta.env.DEV instead of process.env.NODE_ENV */}
      {import.meta.env.DEV && <Agentation />}
    </>
  );
}

export default App;
