
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PackagesSectionProps {
  onCtaClick: () => void;
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ onCtaClick }) => {
  const [activePackage, setActivePackage] = useState(0);

  const packages = [
    {
      id: 0,
      name: 'Bikini Front',
      image: '/ppf-bikini.png',
      description: 'Základní ochrana nejvíce exponovaných částí: přední hrana kapoty, zrcátka a náběžné hrany blatníků.'
    },
    {
      id: 1,
      name: 'Full Front',
      image: '/ppf-fullfront.png',
      description: 'Kompletní ochrana celého předku vozu. Chrání celou kapotu, nárazník, světla i oba blatníky.'
    },
    {
      id: 2,
      name: 'Full Car',
      image: '/ppf-full-car.png',
      description: 'Maximální bezpečí. Celý vůz je v neprůstřelném krunýři. Žádné kompromisy, žádné obavy o lak.'
    },
    {
      id: 3,
      name: 'Individuální',
      image: '/ppf-custom-solution.png',
      description: 'Potřebujete chránit jen prahy, nakládací hranu kufru nebo interiér? Navrhneme řešení na míru.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - More compact */}
        <div className="text-center mb-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand text-xs md:text-sm font-bold mb-2 block font-sans tracking-[0.2em] uppercase"
          >
            Konfigurátor ochrany
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight font-sans tracking-tight"
          >
            Vyberte si svůj <span className="text-brand">rozsah ochrany</span>
          </motion.h2>
        </div>

        {/* Navigation - Compact buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {packages.map((pkg, idx) => (
            <button
              key={pkg.id}
              onClick={() => setActivePackage(idx)}
              className={`px-5 py-3 rounded-full text-[10px] md:text-xs font-bold transition-all duration-500 border font-oxanium uppercase tracking-widest ${
                activePackage === idx
                  ? 'bg-brand border-brand text-black shadow-lg'
                  : 'bg-gray-50 border-gray-100 text-gray-400 hover:border-gray-200 hover:text-gray-600'
              }`}
            >
              {pkg.name}
            </button>
          ))}
        </div>

        {/* Main Display Area - Compact card */}
        <div className="relative group max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-brand/5 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-1000"></div>
          
          <div className="relative bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-xl">
            {/* Image Container - Wider aspect for compactness */}
            <div className="aspect-[16/9] w-full relative overflow-hidden bg-gray-100">
              <img
  src={packages[activePackage].image}
  alt={packages[activePackage].name}
  className="w-full h-full object-cover"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Info Section - Compact padding */}
            <div className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePackage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 font-sans">
                      {packages[activePackage].name}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light font-sans max-w-xl">
                      {packages[activePackage].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="w-full md:w-auto flex-shrink-0">
                <button
                  onClick={onCtaClick}
                  className="group/btn relative px-10 py-4 bg-brand text-black font-bold text-sm md:text-base rounded-full transition-all duration-500 shadow-md overflow-hidden active:scale-[0.98]"
                >
                  <span className="relative z-10 font-oxanium uppercase tracking-[0.1em]">
                    Bezplatná konzultace →
                  </span>
                  <div className="absolute inset-0 bg-black translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                </button>
                <p className="text-center mt-3 text-[9px] text-gray-300 font-sans uppercase tracking-[0.2em]">
                  * Certifikovaná instalace se zárukou
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
