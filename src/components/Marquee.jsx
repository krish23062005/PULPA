import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Marquee = ({ text = "CRUSH THE ORDINARY • NO PRESERVATIVES • PURE CHAOS • " }) => {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    // A simple infinite timeline
    const tl = gsap.timeline({ repeat: -1 });
    
    // Animate both elements to the left by -100%
    tl.to([text1Ref.current, text2Ref.current], {
      xPercent: -100,
      ease: "none",
      duration: 40, // Increased duration to slow down the marquee
    });
  }, []);

  return (
    <div className="marquee-container flex rotate-[-2deg] scale-110 my-10 shadow-neo-lg z-20 relative">
      <div className="flex whitespace-nowrap" ref={containerRef}>
        <h2 ref={text1Ref} className="font-anton text-4xl md:text-6xl text-pulpa-yellow px-4 shrink-0 uppercase tracking-wide">
          {text.repeat(3)}
        </h2>
        <h2 ref={text2Ref} className="font-anton text-4xl md:text-6xl text-pulpa-yellow px-4 shrink-0 uppercase tracking-wide">
          {text.repeat(3)}
        </h2>
      </div>
    </div>
  );
};

export default Marquee;
