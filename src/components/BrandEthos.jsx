import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BrandEthos = () => {
  const textRef = useRef(null);
  const boringRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current, 
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1, 
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%"
        }
      }
    );

    // Continuous chaotic float for BORING JUICE
    gsap.to(boringRef.current, {
      y: -10,
      rotation: -3,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <section id="ethos" className="py-24 px-4 md:px-12 w-full flex flex-col items-center justify-center bg-pulpa-hotpink border-y-4 border-pulpa-navy relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pulpa-yellow opacity-40 blur-2xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-pulpa-mint opacity-40 blur-3xl rounded-full"></div>

      <div ref={textRef} className="max-w-4xl mx-auto text-center z-10 relative">
        <h2 className="font-anton text-5xl md:text-7xl uppercase text-pulpa-navy mb-8 leading-tight">
          We don't do <br/>
          <span ref={boringRef} className="inline-block line-through decoration-pulpa-yellow decoration-[8px] md:decoration-[12px] opacity-80">BORING JUICE</span>
        </h2>
        
        <p className="font-hanken text-xl md:text-3xl font-bold text-pulpa-navy mb-8 leading-relaxed">
          The juice industry is broken. It's full of <span className="bg-white/80 border-2 border-pulpa-navy px-2 py-1 mx-1 shadow-neo-sm transform -rotate-2 inline-block transition-all duration-300 cursor-pointer hover:scale-110 hover:-rotate-6 hover:bg-pulpa-yellow">watered-down garbage</span> and fake health halos. 
        </p>

        <p className="font-bricolage text-2xl md:text-4xl text-pulpa-yellow mt-10 transform -rotate-3 inline-block font-bold">
          We're here to wake you up.
        </p>
        
        <div className="mt-16 relative w-full h-[300px] flex justify-center items-center pointer-events-none">
          <img 
            src="/a_single_3d_floating_pickle_minimalist_clean_lighting_soft_mint_green.png" 
            alt="Floating Pickle" 
            className="h-full object-contain drop-shadow-[12px_12px_0px_#161124] transform rotate-12"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandEthos;
