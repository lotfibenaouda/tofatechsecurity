import React from 'react';
import { LeadForm } from './LeadForm';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Restore Your Margins?</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Get our exclusive Partner Pricing Guide and see exactly how much you can save by switching to the Tofatech Hybrid Model.
            </p>
            <div className="flex items-center gap-2 mb-8">
              <ShieldCheck className="h-6 w-6 text-cyan-400" />
              <span className="font-bold text-lg text-white">TOFATECH SECURITY</span>
            </div>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Tofatech Security. All rights reserved.<br />
              Brussels, Belgium | Algiers, Algeria
            </p>
          </div>

          <div className="bg-cyan-600 p-8 rounded-2xl shadow-2xl shadow-cyan-900/40">
            <h3 className="text-white font-bold text-xl mb-4">Request Partner Access</h3>
            <LeadForm variant="footer" />
          </div>

        </div>
      </div>
    </footer>
  );
};