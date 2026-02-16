
import React, { useState, useEffect } from 'react';
import GeoGrid from './components/GeoGrid';
import AlphaEngine from './components/AlphaEngine';
import FamilyBusiness from './components/FamilyBusiness';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
            <span className="bg-blue-600 px-2 py-1 rounded text-white">AIMING</span>
            <span>.CA</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="#geogrid" className="text-slate-400 hover:text-white transition-colors">Performance</a>
            <a href="#alpha-engine" className="text-slate-400 hover:text-white transition-colors">Alpha Engine</a>
            <a href="#family-owned" className="text-slate-400 hover:text-white transition-colors">Family Growth</a>
            <button className="bg-white text-slate-950 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all">
              Consult Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-500 font-mono text-xs font-bold tracking-widest uppercase mb-6">
            NORTH AMERICAN SEO POWERHOUSE
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
            We Build Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">Monopolies.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-12">
            Deploying the proprietary Alpha Engine™ to drive sustainable, hyper-growth organic results for the continent's most ambitious brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#geogrid" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-blue-600/20 transition-all">
              View Our Geogrid Results
            </a>
            <a href="#alpha-engine" className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-bold text-lg border border-slate-800 transition-all">
              The Alpha Blueprint
            </a>
          </div>
        </div>
      </header>

      {/* Geogrid Section */}
      <section id="geogrid" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white mb-4">Proven Geo-Ranking Performance</h2>
              <p className="text-slate-400">Total local search saturation across North American major markets.</p>
            </div>
            <GeoGrid />
          </div>
        </div>
      </section>

      {/* Alpha Engine Section */}
      <AlphaEngine />

      {/* Family Business Section */}
      <FamilyBusiness />

      {/* Footer */}
      <footer className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-black tracking-tighter text-white mb-6">
                <span className="bg-blue-600 px-2 py-1 rounded text-white">AIMING</span>
                <span>.CA</span>
              </div>
              <p className="text-slate-500 max-w-sm">
                Aiming.ca is the leading high-technical SEO agency specializing in North American market expansion through precision engineering and semantic dominance.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">SERVICES</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Technical SEO</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Content Strategy</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Link Velocity</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Conversion Rate</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">COMPANY</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-blue-500 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">The Alpha Engine</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
            <p>© 2024 Aiming.ca SEO Powerhouse. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
