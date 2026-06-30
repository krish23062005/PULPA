import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const percentRef = useRef(null);
  const yellowWipeRef = useRef(null);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        // Restore scrolling when done
        document.body.style.overflow = 'auto';
      }
    });

    // Continuous floating animation for the text
    gsap.to(textRef.current, {
      y: -10,
      rotation: -3,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    let progress = { value: 0 };
    
    // 1. Count up to 100%
    tl.to(progress, {
      value: 100,
      duration: 1.5,
      ease: "power3.inOut",
      onUpdate: () => {
        if (percentRef.current) {
          percentRef.current.textContent = `${Math.round(progress.value)}%`;
        }
      }
    })
    // 2. Pulse/scale the PULPA text slightly before exit
    .to(textRef.current, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out"
    })
    // 3. Bring in the yellow wipe from the bottom
    .to(yellowWipeRef.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "power4.inOut"
    }, "+=0.1")
    // 4. Slide the entire preloader up to reveal the site
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut"
    }, "-=0.4");

  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-pulpa-navy"
    >
      {/* Yellow wipe element that slides up right before the main container leaves */}
      <div 
        ref={yellowWipeRef}
        className="absolute top-full left-0 w-full h-full bg-pulpa-yellow z-0"
      ></div>

      <div ref={textRef} className="relative z-10 flex flex-col items-center text-center">
        <h1 className="font-anton text-7xl md:text-9xl text-white tracking-tighter uppercase text-outline">
          PULPA
        </h1>
        <p className="font-space font-bold uppercase tracking-[0.3em] mt-4 text-pulpa-mint text-xl md:text-2xl drop-shadow-[2px_2px_0px_#161124]">
          CRUSHING... <span ref={percentRef} className="text-pulpa-yellow">0%</span>
        </p>
      </div>
    </div>
  );
};

export default Preloader;
