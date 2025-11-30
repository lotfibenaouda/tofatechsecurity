import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <ShieldCheck className="h-8 w-8 text-cyan-400" />
            <span className="font-bold text-xl tracking-tight text-white">TOFATECH <span className="text-cyan-400">SECURITY</span></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#problem" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Why Tofatech</a>
              <a href="#solution" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Our Model</a>
              <a href="#services" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#contact" className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2.5 rounded-md text-sm font-bold transition-all shadow-lg shadow-cyan-900/20">
                Partner Pricing
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#problem" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Why Tofatech</a>
            <a href="#solution" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Our Model</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-cyan-600 text-white block px-3 py-2 rounded-md text-base font-bold mt-4">Get Partner Pricing</a>
          </div>
        </div>
      )}
    </nav>
  );
};