
import React, { useState } from 'react';
import { ALPHA_BLUEPRINT_STEPS } from '../constants';
import { geminiService } from '../services/geminiService';

const AlphaEngine: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!niche) return;
    setLoading(true);
    const result = await geminiService.generateSEOBlueprint(niche);
    setAnalysis(result);
    setLoading(false);
  };

  return (
    <section id="alpha-engine" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-blue-500 font-mono font-bold tracking-widest uppercase mb-4">The Technical Blueprint</h2>
            <h1 className="text-5xl font-extrabold text-white mb-8">ALPHA ENGINE™</h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Unlike traditional agency models, the Alpha Engine is a proprietary algorithmic framework 
              built for the North American market. It synchronizes technical architecture with 
              high-intent semantic cores to bypass competitors.
            </p>

            <div className="space-y-8">
              {ALPHA_BLUEPRINT_STEPS.map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-slate-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 lg:p-12 sticky top-24">
              <h3 className="text-2xl font-bold text-white mb-6">Engine Calibration</h3>
              <p className="text-slate-400 mb-8 text-sm">Input your business niche to see how the Alpha Engine would construct your technical roadmap.</p>
              
              <div className="flex flex-col gap-4 mb-8">
                <input 
                  type="text" 
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="e.g. Toronto HVAC Services" 
                  className="bg-slate-950 border border-slate-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <button 
                  onClick={handleAnalyze}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all disabled:opacity-50"
                >
                  {loading ? 'CALIBRATING...' : 'GENERATE BLUEPRINT'}
                </button>
              </div>

              {analysis && (
                <div className="bg-slate-950 rounded-xl p-6 border border-blue-500/30 font-mono text-sm leading-relaxed text-blue-100/80">
                  <div className="flex items-center gap-2 mb-4 text-blue-500">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-widest">Deployment Strategy Alpha-1</span>
                  </div>
                  <div className="whitespace-pre-line">
                    {analysis}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlphaEngine;
