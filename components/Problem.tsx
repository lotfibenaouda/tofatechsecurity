import React from 'react';
import { TrendingDown, Users, Wallet } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The European MSSP Trap</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Demand for managed security is growing, but the cost of delivery is spiraling out of control.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-950 p-8 rounded-xl border border-red-900/30 hover:border-red-500/50 transition-colors group">
            <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-900/30 transition-colors">
              <Wallet className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Margin Erosion</h3>
            <p className="text-slate-400 leading-relaxed">
              Hiring an L3 Fortinet Engineer in the EU costs <strong>€80k+ per year</strong> before overhead. This salary burn destroys profitability on your recurring maintenance contracts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-950 p-8 rounded-xl border border-red-900/30 hover:border-red-500/50 transition-colors group">
            <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-900/30 transition-colors">
              <Users className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Talent Scarcity</h3>
            <p className="text-slate-400 leading-relaxed">
              Finding qualified staff takes months. Retention is even harder. You are constantly fighting a losing battle against turnover while your ticket backlog grows.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-950 p-8 rounded-xl border border-red-900/30 hover:border-red-500/50 transition-colors group">
            <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-900/30 transition-colors">
              <TrendingDown className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quality vs. Cost</h3>
            <p className="text-slate-400 leading-relaxed">
              Traditional offshoring (India/Philippines) often fails due to time-zone gaps and communication barriers. You sacrifice quality for cost, damaging your reputation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};