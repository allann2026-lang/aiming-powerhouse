
import React from 'react';

const FamilyBusiness: React.FC = () => {
  return (
    <section id="family-owned" className="py-24 bg-white text-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/family-business/800/600" 
                alt="Family business handshake" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-100 rounded-3xl -z-0"></div>
              <div className="absolute top-10 left-10 p-6 bg-slate-900 text-white rounded-2xl shadow-xl z-20 hidden md:block">
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Heritage First</p>
                <h4 className="text-2xl font-bold">Generation 2.0</h4>
                <p className="text-slate-400 text-xs mt-1">SEO designed to scale legacy brands.</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-blue-600 font-mono font-bold tracking-widest uppercase mb-4">Market Longevity</h2>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Legacy-Scale SEO for Family-Owned Enterprises</h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We understand that your business isn't just a spreadsheet—it's your legacy. Aiming.ca specializes in 
              helping family-owned North American businesses transition from traditional referrals to 
              indomitable digital search dominance.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Multi-generational brand preservation",
                "Community-centric local authority",
                "Long-term ROI without 'churn and burn' tactics",
                "Concierge reporting and transparent partnership"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition-all">
              Schedule Your Legacy Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyBusiness;
