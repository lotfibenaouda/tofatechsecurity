import React from 'react';
import { LeadForm } from './LeadForm';
import { Check } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[30%] -right-[10%] w-[700px] h-[700px] rounded-full bg-cyan-900/20 blur-[120px]"></div>
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Copy Side */}
          <div className="flex flex-col text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                Managed Security Services
              </span>
              <span className="text-slate-400 text-xs font-medium tracking-wide">
                20 Years Governance Experience
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Stop Letting Engineer Salaries <span className="gradient-text">Eat Your Margins.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Premium White-Label Fortinet Management. Governed by EU Architects. Executed Nearshore. <strong className="text-white">Reduce operational costs by 40-60% immediately.</strong>
            </p>

            <div className="flex flex-col gap-4 text-slate-300 mb-10 text-sm md:text-base items-center lg:items-start">
              <div className="flex items-center gap-2">
                <div className="bg-green-500/20 p-1 rounded-full"><Check className="h-3 w-3 text-green-400" /></div>
                <span>Belgian Security Governance (CISO-Level Oversight)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-500/20 p-1 rounded-full"><Check className="h-3 w-3 text-green-400" /></div>
                <span>Senior L3 Fortinet Engineers (NSE 7/8 Certified)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-500/20 p-1 rounded-full"><Check className="h-3 w-3 text-green-400" /></div>
                <span>Seamless Time-Zone Alignment (CET)</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-md">
              <h3 className="text-2xl font-bold text-white mb-2">Get the Partner Pricing Guide</h3>
              <p className="text-slate-400 text-sm mb-6">
                See exactly how much you can save on L2/L3 Fortinet resource allocation.
              </p>
              <LeadForm variant="hero" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};