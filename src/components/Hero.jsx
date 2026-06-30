import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);
  const floatingTextRef = useRef(null);
  const stickerRef = useRef(null);
  const yellowStickerRef = useRef(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const images = [
    '/03-pulpa-splash.jpg',
    '/blueberry.png',
    '/kiwi.png',
    '/mango.png',
    '/strawberry.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Initial entry animation
    gsap.fromTo(containerRef.current.children, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    );

    // Continuous floating animation one by one
    const textElements = floatingTextRef.current.querySelectorAll('h1');
    gsap.to(textElements, {
      y: -20,
      duration: 2.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1, // start after entry animation completes
      stagger: 0.3 // this staggers the floating effect one by one
    });

    // Continuous rotation for the mint sticker
    gsap.to(stickerRef.current, {
      rotation: 360,
      duration: 12,
      repeat: -1,
      ease: "none"
    });

    // Continuous rotation for the yellow sticker
    gsap.to(yellowStickerRef.current, {
      rotation: -360,
      duration: 15,
      repeat: -1,
      ease: "none"
    });
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 overflow-hidden bg-pulpa-hotpink">
      
      {/* Background Graphic Elements */}
      <div className="absolute top-20 left-0 md:left-20 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
      <div className="absolute top-10 right-0 md:right-10 w-[500px] h-[500px] bg-orange-400 rounded-full blur-[120px] opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] bg-white rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      <div ref={containerRef} className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center mt-32 md:mt-40">
        
        {/* Typography */}
        <div ref={floatingTextRef} className="flex flex-col items-center justify-center leading-[0.85] md:leading-[0.85]">
          <div className="flex flex-wrap justify-center items-end gap-x-2 md:gap-x-4">
            <h1 className="font-anton text-[100px] md:text-[180px] lg:text-[220px] text-pulpa-navy uppercase tracking-tighter m-0 p-0">
              LOUD
            </h1>
            <h1 className="font-anton text-[100px] md:text-[180px] lg:text-[220px] text-pulpa-yellow uppercase tracking-tighter m-0 p-0 relative" style={{ WebkitTextStroke: '6px #161124', color: '#FFEA00' }}>
              JUICE,
              {/* Optional shadow layer to match the exact heavy shadow effect */}
              <span className="absolute left-0 top-0 text-pulpa-navy -z-10 translate-x-[4px] translate-y-[4px] md:translate-x-[8px] md:translate-y-[8px] webkit-text-stroke-0" style={{ WebkitTextStroke: '0px' }}>
                JUICE,
              </span>
            </h1>
          </div>
          
          <div className="flex flex-wrap justify-center items-start gap-x-2 md:gap-x-4 mt-2 md:mt-4">
            <h1 className="font-anton text-[100px] md:text-[180px] lg:text-[220px] text-pulpa-blue uppercase tracking-tighter m-0 p-0">
              LOUD
            </h1>
            <h1 className="font-anton text-[100px] md:text-[180px] lg:text-[220px] text-pulpa-navy uppercase tracking-tighter m-0 p-0 ml-1 md:ml-2">
              LIFE.
            </h1>
          </div>
        </div>
        
        {/* Paragraph */}
        <p className="font-hanken font-medium text-pulpa-navy text-lg md:text-xl max-w-2xl mt-12 md:mt-16 leading-relaxed">
          Cold-pressed in small batches. Zero added sugar. 100% 
          <br className="hidden md:block" /> chaos in a bottle. Now in six flavors that taste like the 
          <br className="hidden md:block" /> volume knob broke at 11.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-row flex-wrap justify-center gap-4 mt-10 mb-16 md:mb-24">
          <button className="inline-block font-space font-bold uppercase px-8 py-4 rounded-full border-2 border-pulpa-navy bg-pulpa-navy text-white shadow-neo-sm transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-none hover:bg-pulpa-yellow hover:text-pulpa-navy pointer-events-auto">
            Order a 6-pack &rarr;
          </button>
          <button className="inline-block font-space font-bold uppercase px-8 py-4 rounded-full border-2 border-pulpa-navy bg-pulpa-navy text-white shadow-neo-sm transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-none hover:bg-pulpa-yellow hover:text-pulpa-navy pointer-events-auto">
            Read the story
          </button>
        </div>

        {/* Hero Image Section */}
        <div className="relative w-full max-w-4xl mx-auto px-4 md:px-0 mb-32 z-20 pointer-events-auto group">
          
          {/* Top-Left Sticker */}
          <div ref={yellowStickerRef} className="absolute -top-10 left-0 md:-top-16 md:-left-12 w-24 h-24 md:w-32 md:h-32 bg-pulpa-yellow rounded-full border-4 border-pulpa-navy flex flex-col items-center justify-center z-10 shadow-neo-sm hover:scale-110 transition-transform duration-300 cursor-pointer">
            <span className="font-space font-bold text-pulpa-navy text-[10px] md:text-xs tracking-widest uppercase">
              ★ ★ ★
            </span>
            <span className="font-space font-bold text-pulpa-navy text-xs md:text-sm tracking-widest uppercase">
              COLD
            </span>
            <span className="font-space font-bold text-pulpa-navy text-xs md:text-sm tracking-widest uppercase">
              PRESSED
            </span>
          </div>

          {/* Main Image Container */}
          <div className="w-full rounded-[2rem] border-[6px] md:border-[8px] border-pulpa-navy shadow-[12px_12px_0px_#161124] md:shadow-[20px_20px_0px_#161124] overflow-hidden relative z-20 bg-pulpa-hotpink">
            {/* Invisible placeholder to maintain the natural height of the images */}
            <img src={images[0]} alt="" className="w-full h-auto invisible pointer-events-none" />
            
            {images.map((img, index) => (
              <img 
                key={img}
                src={img} 
                alt="PULPA Splash" 
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out cursor-pointer ${index === currentImgIndex ? 'opacity-100 scale-105 hover:scale-110 z-10 pointer-events-auto' : 'opacity-0 scale-100 z-0 pointer-events-none'}`}
              />
            ))}
          </div>

          {/* Bottom-Right Sticker */}
          <div ref={stickerRef} className="absolute -bottom-10 right-0 md:-bottom-12 md:-right-12 w-24 h-24 md:w-32 md:h-32 bg-pulpa-mint rounded-full border-4 border-pulpa-navy flex flex-col items-center justify-center z-30 shadow-neo-sm hover:scale-110 transition-transform duration-300 cursor-pointer">
            <span className="font-space font-bold text-pulpa-navy text-xs md:text-sm tracking-widest uppercase">
              NEW
            </span>
            <span className="font-space font-bold text-pulpa-navy text-xs md:text-sm tracking-widest uppercase">
              FLAVOR
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 md:w-4 md:h-4 text-pulpa-navy mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
              <path strokeLinecap="square" strokeLinejoin="miter" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
