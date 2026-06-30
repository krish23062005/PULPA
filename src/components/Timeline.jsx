import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: '2020',
    emoji: '💡',
    title: 'The Catalyst',
    story: 'Disappointed by watered-down, overpriced juices, we turned our kitchen into a lab. We started researching cold-press tech to build something unapologetically real.',
    color: 'bg-pulpa-yellow',
  },
  {
    year: '2021',
    emoji: '🧪',
    title: 'Formulation & Chaos',
    story: 'Over 200 recipe iterations and a destroyed commercial blender later, we nailed our signature flavor profiles. No pastels, no whispers—just raw taste.',
    color: 'bg-pulpa-peach',
  },
  {
    year: '2022',
    emoji: '🎨',
    title: 'Identity & Sourcing',
    story: 'PULPA was born. We locked in our loud, neo-brutalist identity and partnered with local farmers to secure produce cold-pressed within 24 hours of harvest.',
    color: 'bg-pulpa-periwinkle',
  },
  {
    year: '2023',
    emoji: '🏭',
    title: 'The First Drop',
    story: 'We opened our first small-batch production facility. Our inaugural drop of 500 bottles sold out in 48 hours. The chaos had officially begun.',
    color: 'bg-pulpa-softmint',
  },
  {
    year: '2024',
    emoji: '🚀',
    title: 'National Scale',
    story: 'We expanded from local farmers markets to nationwide shipping with 50,000+ bottles delivered. 5 signature flavors. Zero preservatives. 100% PULPA.',
    color: 'bg-pulpa-yellow',
  }
];

const Timeline = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const trackRef = useRef(null);
  const boringRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const totalScrollWidth = track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => `+=${totalScrollWidth * 1.2}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Floating animation for "boring" text
      gsap.to(boringRef.current, {
        y: -8,
        rotation: -3,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="relative">
      <div
        ref={triggerRef}
        className="relative w-full h-screen overflow-hidden bg-pulpa-hotpink border-y-4 border-pulpa-navy"
      >
        {/* Section Header */}
        <div className="absolute top-8 left-0 w-full text-center z-20 pointer-events-none">
          <h2 className="font-anton text-4xl md:text-6xl lg:text-7xl uppercase text-pulpa-navy leading-tight">
            Our <span ref={boringRef} className="inline-block line-through decoration-pulpa-yellow decoration-[6px] md:decoration-[10px]">boring</span> Story
          </h2>
          <p className="font-bricolage text-lg md:text-2xl text-pulpa-yellow font-bold mt-2 transform -rotate-2 inline-block">
            Scroll to relive the chaos →
          </p>
        </div>

        {/* Horizontal Track */}
        <div
          ref={trackRef}
          className="absolute top-0 left-0 h-full flex items-center will-change-transform"
          style={{ paddingLeft: '6vw', paddingRight: '10vw' }}
        >
          {/* Spacer for the header */}
          <div className="shrink-0 w-[30vw] md:w-[20vw]" />

          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 h-[6px] bg-pulpa-navy -translate-y-1/2" style={{ width: `${timelineData.length * 520 + 400}px` }} />

          {timelineData.map((item, index) => (
            <div
              key={index}
              className="shrink-0 flex flex-col items-center mx-6 md:mx-10 relative pt-16"
              style={{ width: '360px' }}
            >
              {/* Year badge — sits ON the timeline line */}
              <div className="absolute top-1/2 -translate-y-[calc(50%+80px)] z-10">
                <span className="inline-block font-space font-bold text-sm md:text-base uppercase px-5 py-2 rounded-full border-[4px] border-pulpa-navy bg-pulpa-yellow text-pulpa-navy shadow-[6px_6px_0px_#161124]">
                  {item.year}
                </span>
              </div>

              {/* Card */}
              <div
                className={`${item.color} p-6 md:p-8 rounded-2xl border-[4px] border-pulpa-navy shadow-[12px_12px_0px_#161124] transition-all duration-300 hover:scale-[1.03] hover:-rotate-1 hover:bg-pulpa-yellow w-full h-[280px] md:h-[300px]`}
              >
                <div className="text-4xl md:text-5xl mb-3">{item.emoji}</div>
                <h3 className="font-hanken font-black text-2xl md:text-3xl text-pulpa-navy mb-3 leading-none tracking-tight">
                  {item.title}
                </h3>
                <p className="font-hanken font-medium text-sm md:text-base text-pulpa-navy leading-relaxed opacity-90">
                  {item.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
