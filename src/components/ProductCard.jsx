import React from 'react';

const ProductCard = ({ subtitle, title, volume, pack, price, desc, image, bgColor }) => {
  return (
    <div className={`flex flex-col p-4 md:p-5 rounded-[2rem] border-[5px] md:border-[6px] border-pulpa-navy shadow-[8px_8px_0px_#161124] md:shadow-[12px_12px_0px_#161124] hover:shadow-[16px_16px_0px_#161124] md:hover:shadow-[20px_20px_0px_#161124] ${bgColor} transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1`}>
      <div className="flex justify-end mb-2">
        <span className="font-space text-[10px] md:text-xs font-bold uppercase tracking-widest text-pulpa-navy">
          {subtitle}
        </span>
      </div>
      
      <div className="w-full h-48 md:h-[220px] rounded-[1.25rem] border-[3px] md:border-[4px] border-pulpa-navy overflow-hidden mb-3 md:mb-4 relative">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-out" 
        />
      </div>
      
      <h3 className="font-hanken font-black text-2xl md:text-3xl text-pulpa-navy mb-2 leading-none tracking-tight">
        {title.split(' ').map((word, i) => (
          <React.Fragment key={i}>
            {word}<br/>
          </React.Fragment>
        ))}
      </h3>
      
      <div className="flex justify-between items-end mb-2 border-b-2 border-transparent">
        <span className="font-space font-bold text-[10px] md:text-xs uppercase text-pulpa-navy">
          {volume} &bull; {pack}
        </span>
        <span className="font-hanken font-black text-xl md:text-2xl text-pulpa-navy leading-none">
          {price}
        </span>
      </div>
      
      <p className="font-hanken font-medium text-xs md:text-sm text-pulpa-navy mb-4 leading-tight flex-grow opacity-90">
        {desc}
      </p>
      
      <button className="w-full py-2.5 bg-pulpa-navy text-white rounded-full font-space font-bold text-xs md:text-sm uppercase hover:bg-pulpa-yellow hover:text-pulpa-navy hover:scale-110 hover:-rotate-3 transition-all duration-300 shadow-neo-sm">
        Add to fridge
      </button>
    </div>
  );
};

export default ProductCard;
