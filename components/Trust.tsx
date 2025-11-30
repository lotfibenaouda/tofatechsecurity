import React, { useState } from 'react';
import { Play, Pause, Shield, CheckCircle } from 'lucide-react';

export const Trust: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-slate-950 border-y border-slate-800 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Governance You Can Trust</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our founder explains how Belgian oversight combined with Nearshore execution creates the perfect margin-saving model for MSSPs.
          </p>
        </div>
        
        {/* Video Player Container */}
        <div 
          className="relative w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-black text-slate-500">
               {/* Video Simulation */}
               <div className="flex items-center gap-2 mb-4 animate-pulse">
                 <div className="h-3 w-3 bg-red-600 rounded-full"></div>
                 <span className="font-mono text-sm tracking-widest text-red-500 uppercase">Playing</span>
               </div>
               <p className="text-lg font-medium text-slate-300">Founder_Vision_2024.mp4</p>
               <p className="text-sm text-slate-600 mt-2">Interactive Video Placeholder</p>
               
               <button 
                 onClick={(e) => { e.stopPropagation(); setIsPlaying(false); }}
                 className="mt-8 px-6 py-2 rounded-full border border-slate-700 hover:bg-slate-800 hover:text-white transition-colors text-sm"
               >
                 Close Video
               </button>
            </div>
          ) : (
            <>
              {/* Video Poster Image (Overlay) */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-slate-950/70 group-hover:bg-slate-950/60 transition-all duration-500"></div>

              {/* Play Button Center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 transition-transform duration-300 group-hover:scale-105">
                <button 
                  className="w-20 h-20 md:w-24 md:h-24 bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.4)] group-hover:bg-cyan-400 group-hover:shadow-[0_0_70px_rgba(34,211,238,0.6)] transition-all duration-300"
                  aria-label="Play Video"
                >
                  <Play className="h-8 w-8 md:h-10 md:w-10 text-white ml-2 fill-white" />
                </button>
                <div className="mt-6 text-center">
                   <h3 className="text-xl md:text-2xl font-bold text-white mb-1">The Tofatech Vision</h3>
                   <span className="text-cyan-400 font-medium text-sm tracking-wide uppercase">Watch Introduction (2 min)</span>
                </div>
              </div>
              
              {/* Bottom Profile Bar */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent flex flex-col md:flex-row md:items-end justify-between gap-4">
                 <div className="text-left">
                    <p className="text-white font-bold text-lg">Jean-Pierre Dubois</p>
                    <p className="text-slate-400 text-sm">Security Architect & Founder (20+ Years Exp.)</p>
                 </div>
                 
                 <div className="flex gap-4 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                   <div className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700/50">
                     <Shield className="h-3 w-3 text-cyan-400" />
                     <span>Governance</span>
                   </div>
                   <div className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700/50">
                     <CheckCircle className="h-3 w-3 text-cyan-400" />
                     <span>Compliance</span>
                   </div>
                 </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};