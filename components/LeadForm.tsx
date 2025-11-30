import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

interface LeadFormProps {
  className?: string;
  variant?: 'hero' | 'footer';
}

export const LeadForm: React.FC<LeadFormProps> = ({ className = '', variant = 'hero' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className={`p-6 rounded-lg bg-green-900/20 border border-green-500/30 flex flex-col items-center justify-center text-center ${className}`}>
        <CheckCircle2 className="h-12 w-12 text-green-400 mb-2" />
        <h3 className="text-xl font-bold text-white">Access Granted</h3>
        <p className="text-slate-300">Please check your inbox for the Partner Pricing Guide.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm text-green-400 underline hover:text-green-300"
        >
          Send to another email
        </button>
      </div>
    );
  }

  const isHero = variant === 'hero';

  return (
    <div className={`w-full max-w-md ${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor={`email-${variant}`} className="sr-only">Business Email</label>
          <div className="relative">
            <input
              type="email"
              id={`email-${variant}`}
              required
              placeholder="Enter your business email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-5 py-4 rounded-lg bg-slate-900 border ${isHero ? 'border-slate-600 focus:border-cyan-400' : 'border-slate-700 focus:border-cyan-400'} text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all`}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`group flex items-center justify-center gap-2 w-full py-4 px-6 rounded-lg font-bold text-lg transition-all ${
            isHero 
              ? 'bg-cyan-500 hover:bg-cyan-400 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]' 
              : 'bg-white text-slate-900 hover:bg-slate-100'
          }`}
        >
          {status === 'loading' ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              Request Partner Pricing
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
        <p className="text-xs text-slate-500 text-center mt-2">
          Strictly for MSSPs & Channel Partners. We respect your privacy.
        </p>
      </form>
    </div>
  );
};