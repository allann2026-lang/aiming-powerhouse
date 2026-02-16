
import React, { useState } from 'react';
import { RankingPoint } from '../types';
import { GEOGRID_DATA } from '../constants';

const GeoGrid: React.FC = () => {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div>
          <h3 className="text-3xl font-extrabold text-white mb-2">Local Dominance Visualization</h3>
          <p className="text-slate-400">Watch the Aiming.ca Alpha Engine in real-time action.</p>
        </div>
        
        <div className="mt-6 md:mt-0 flex items-center bg-slate-800 p-1 rounded-full border border-slate-700">
          <button 
            onClick={() => setIsAfter(false)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${!isAfter ? 'bg-red-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            Before
          </button>
          <button 
            onClick={() => setIsAfter(true)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${isAfter ? 'bg-emerald-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            After
          </button>
        </div>
      </div>

      <div className="relative aspect-square max-w-lg mx-auto grid grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 border-2 border-dashed border-slate-800/50 pointer-events-none rounded-xl"></div>
        <div className="absolute top-1/3 left-0 right-0 border-t border-slate-800/50 pointer-events-none"></div>
        <div className="absolute top-2/3 left-0 right-0 border-t border-slate-800/50 pointer-events-none"></div>
        <div className="absolute left-1/3 top-0 bottom-0 border-l border-slate-800/50 pointer-events-none"></div>
        <div className="absolute left-2/3 top-0 bottom-0 border-l border-slate-800/50 pointer-events-none"></div>

        {GEOGRID_DATA.map((point) => (
          <div key={point.id} className="relative z-10 flex flex-col items-center group">
            <div 
              className={`
                w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center 
                transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) transform
                ${isAfter ? 'bg-emerald-500/20 border-2 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'bg-red-500/20 border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]'}
              `}
            >
              <span className={`text-xl md:text-2xl font-bold font-mono transition-colors duration-700 ${isAfter ? 'text-emerald-400' : 'text-red-400'}`}>
                {isAfter ? point.after : point.before}
              </span>
            </div>
            <div className={`mt-2 text-xs font-mono uppercase tracking-wider transition-opacity duration-300 ${isAfter ? 'text-emerald-500' : 'text-red-500'}`}>
              Rank {isAfter ? point.after : point.before}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div>
          <div className="text-white font-bold text-2xl">98%</div>
          <div className="text-slate-500 text-xs uppercase tracking-widest">Visibility Increase</div>
        </div>
        <div>
          <div className="text-white font-bold text-2xl">3.2s</div>
          <div className="text-slate-500 text-xs uppercase tracking-widest">Load Speed Avg</div>
        </div>
        <div>
          <div className="text-white font-bold text-2xl">4.5x</div>
          <div className="text-slate-500 text-xs uppercase tracking-widest">CTR Growth</div>
        </div>
        <div>
          <div className="text-white font-bold text-2xl">TOP 3</div>
          <div className="text-slate-500 text-xs uppercase tracking-widest">Target Position</div>
        </div>
      </div>
    </div>
  );
};

export default GeoGrid;
