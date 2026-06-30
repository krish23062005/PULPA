import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 p-4 lg:px-12 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto flex items-center">
        <a href="/" className="font-anton text-4xl tracking-tight text-pulpa-navy text-outline text-pulpa-yellow inline-block transition-transform duration-300 hover:scale-110 hover:-rotate-3">
          PULPA
        </a>
      </div>
      
      <div className="hidden md:flex gap-4 pointer-events-auto">
        <a href="#shop" className="inline-block font-space font-bold uppercase px-4 py-2 rounded-full border-2 border-pulpa-navy bg-pulpa-navy text-white shadow-neo-sm transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-none hover:bg-pulpa-yellow hover:text-pulpa-navy">
          Flavors
        </a>
        <a href="#ethos" className="inline-block font-space font-bold uppercase px-4 py-2 rounded-full border-2 border-pulpa-navy bg-pulpa-navy text-white shadow-neo-sm transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-none hover:bg-pulpa-yellow hover:text-pulpa-navy">
          Ethos
        </a>
      </div>

      <div className="pointer-events-auto">
        <a href="#shop" className="btn-neo bg-pulpa-navy text-white transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:bg-pulpa-yellow hover:text-pulpa-navy">
          FRIDGE
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
