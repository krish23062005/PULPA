import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pulpa-footer text-white py-16 px-4 md:px-12 w-full border-t-[8px] border-pulpa-navy mt-auto">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Brand Section */}
        <div className="flex flex-col max-w-sm">
          <h2 className="font-anton text-5xl md:text-7xl text-pulpa-yellow mb-4">PULPA</h2>
          <p className="font-hanken text-lg mb-6 text-gray-300">
            Loud juice for a loud life. Cold-pressed chaos in a bottle. Keep it raw, keep it real.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            <div className="w-10 h-10 rounded-full border-2 border-pulpa-mint flex items-center justify-center hover:bg-pulpa-mint transition-colors cursor-pointer group">
              <span className="font-space text-pulpa-mint group-hover:text-pulpa-footer font-bold">IG</span>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-pulpa-mint flex items-center justify-center hover:bg-pulpa-mint transition-colors cursor-pointer group">
              <span className="font-space text-pulpa-mint group-hover:text-pulpa-footer font-bold">TT</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto flex-1 md:pl-20">
          
          <div className="flex flex-col gap-3">
            <h4 className="font-space font-bold text-pulpa-mint mb-2 uppercase">Shop</h4>
            <a href="#" className="font-hanken hover:text-pulpa-yellow transition-colors">All Flavors</a>
            <a href="#" className="font-hanken hover:text-pulpa-yellow transition-colors">Subscriptions</a>
            <a href="#" className="font-hanken hover:text-pulpa-yellow transition-colors">Merch</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-space font-bold text-pulpa-mint mb-2 uppercase">About</h4>
            <a href="#" className="font-hanken hover:text-pulpa-yellow transition-colors">Our Ethos</a>
            <a href="#" className="font-hanken hover:text-pulpa-yellow transition-colors">Sourcing</a>
            <a href="#" className="font-hanken hover:text-pulpa-yellow transition-colors">Press</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-space font-bold text-pulpa-mint mb-2 uppercase">Support</h4>
            <a href="#" className="font-hanken hover:text-pulpa-yellow transition-colors">FAQ</a>
            <a href="#" className="font-hanken hover:text-pulpa-yellow transition-colors">Contact</a>
            <a href="#" className="font-hanken hover:text-pulpa-yellow transition-colors">Shipping</a>
          </div>
          
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t-2 border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-space text-xs text-gray-400">© 2026 PULPA JUICE CO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-4">
          <a href="#" className="font-space text-xs text-gray-400 hover:text-pulpa-mint">PRIVACY POLICY</a>
          <a href="#" className="font-space text-xs text-gray-400 hover:text-pulpa-mint">TERMS OF SERVICE</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
