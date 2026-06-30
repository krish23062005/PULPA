import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductCard from './ProductCard';
import splashImg from '../assets/03-pulpa-splash.jpg';
import strawberryImg from '../assets/strawberry.png';
import mangoImg from '../assets/mango.png';
import kiwiImg from '../assets/kiwi.png';
import blueberryImg from '../assets/blueberry.png';

gsap.registerPlugin(ScrollTrigger);

const ProductGrid = () => {
  const gridRef = useRef(null);
  const titleRef = useRef(null);
  const chaosRef = useRef(null);

  useEffect(() => {
    // Reveal animation for cards
    const cards = gridRef.current.children;
    gsap.fromTo(cards,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      }
    );

    // Title animation
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0, rotateZ: -2 },
      {
        y: 0,
        opacity: 1,
        rotateZ: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        }
      }
    );

    // Continuous float for chaos text
    gsap.to(chaosRef.current, {
      y: -15,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  }, []);

  const products = [
    {
      id: 1,
      subtitle: "No. 01 / WAKE-UP CALL",
      title: "Orange Riot",
      volume: "500ml",
      pack: "6-pack",
      price: "$24",
      desc: "Florida Valencias, ginger, and a dirty splash of lemon. Tastes like the sunrise yelling.",
      image: splashImg,
      bgColor: "bg-[#FFE6C7]" 
    },
    {
      id: 2,
      subtitle: "No. 02 / BERRY WILD",
      title: "Strawberry Smash",
      volume: "500ml",
      pack: "6-pack",
      price: "$26",
      desc: "Fresh strawberries and a hint of mint. A sweet chaos.",
      image: strawberryImg,
      bgColor: "bg-pulpa-hotpink" 
    },
    {
      id: 3,
      subtitle: "No. 03 / TROPIC THUNDER",
      title: "Mango Madness",
      volume: "500ml",
      pack: "6-pack",
      price: "$28",
      desc: "Pure alphonso mangoes crushed with a spicy kick.",
      image: mangoImg,
      bgColor: "bg-pulpa-yellow" 
    },
    {
      id: 4,
      subtitle: "No. 04 / FAN FAVORITE",
      title: "Kiwi Kicker",
      volume: "500ml",
      pack: "6-pack",
      price: "$24",
      desc: "Tart kiwi blended with lime. The loud healthy option.",
      image: kiwiImg,
      bgColor: "bg-pulpa-mint" 
    },
    {
      id: 5,
      subtitle: "No. 05 / DEEP BLUE",
      title: "Blueberry Boom",
      volume: "500ml",
      pack: "6-pack",
      price: "$26",
      desc: "Wild blueberries loaded with antioxidants and noise.",
      image: blueberryImg,
      bgColor: "bg-pulpa-periwinkle" 
    }
  ];

  return (
    <section id="shop" className="py-16 md:py-24 px-4 md:px-12 w-full mx-auto z-10 relative">
      <style>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="text-center mb-12 md:mb-16 flex justify-center w-full" ref={titleRef}>
        <h2 className="flex flex-row flex-wrap justify-center items-baseline gap-2 md:gap-4 text-5xl sm:text-6xl md:text-8xl lg:text-[7rem]">
          <span className="font-hanken font-black text-pulpa-navy tracking-tighter">Pick your</span>
          <span ref={chaosRef} className="font-anton text-pulpa-blue lowercase tracking-tight italic hover:text-pulpa-yellow transition-colors duration-300 cursor-pointer">chaos.</span>
        </h2>
      </div>

      <div ref={gridRef} className="flex gap-6 lg:gap-8 w-full md:max-w-[728px] lg:max-w-[1108px] mx-auto px-4 md:px-0 md:pr-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 hide-scroll md:translate-x-3">
        {products.map((product) => (
          <div key={product.id} className="shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] snap-center">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
