import React from 'react';
import { Map, Shield, Zap } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">The Tofatech Model</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Nearshore Economics. <br className="hidden md:block" /> European Standards.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 lg:mx-auto">
            We bridge the gap between high-cost local talent and low-quality distant offshoring.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-800 via-cyan-900 to-slate-800 -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 shadow-xl flex flex-col items-center text-center">
              <div className="p-4 bg-slate-800 rounded-full mb-6 ring-4 ring-slate-900">
                <Shield className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Governance in Belgium</h3>
              <p className="text-slate-400 text-sm">
                Strategy, Architecture, and Quality Assurance are managed by our founder (20+ years exp) in Brussels. We speak your language (EN/FR/NL) and understand EU compliance.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900 p-8 rounded-xl border border-cyan-500/50 shadow-xl shadow-cyan-900/20 flex flex-col items-center text-center transform lg:-translate-y-6">
              <div className="p-4 bg-cyan-900/30 rounded-full mb-6 ring-4 ring-slate-900">
                <Map className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Execution in Algeria</h3>
              <p className="text-slate-400 text-sm">
                Our hub in Algiers hosts highly skilled, university-educated engineers. They operate in the <strong>same time zone (CET)</strong> as your team, ensuring real-time collaboration.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 shadow-xl flex flex-col items-center text-center">
              <div className="p-4 bg-slate-800 rounded-full mb-6 ring-4 ring-slate-900">
                <Zap className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Result: 50% Savings</h3>
              <p className="text-slate-400 text-sm">
                You get senior-level output for the price of a junior local hire. Protect your margins and scale your service capabilities without the overhead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};