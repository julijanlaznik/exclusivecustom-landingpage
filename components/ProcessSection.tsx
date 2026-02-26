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
      image: '/ppf-bikini-front.png',
      description:
        'Základní ochrana nejvíce exponovaných částí: přední hrana kapoty, zrcátka a náběžné hrany blatníků.'
    },
    {
      id: 1,
      name: 'Full Front',
      image: '/ppf-full-front.png',
      description:
        'Kompletní ochrana celého předku vozu. Chrání celou kapotu, nárazník, světla i oba blatníky.'
    },
    {
      id: 2,
      name: 'Full Car',
      image: '/ppf-full-car.png',
      description:
        'Maximální bezpečí. Celý vůz je v neprůstřelném krunýři. Žádné kompromisy, žádné obavy o lak.'
    },
    {
      id: 3,
      name: 'Individuální',
      image: '/ppf-custom-solution.png',
      description:
        'Potřebujete chránit jen prahy, nakládací hranu kufru nebo interiér? Navrhneme řešení na míru.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      
      {/* HEADER WRAPPER – držíme zarovnání */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
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

      </div>

      {/* ===== HORIZONTÁLNÍ SCROLL CONTAINER ===== */}
      <div className="overflow-x-auto scrollbar-hide">
        
        {/* 
          🔥 TADY JE TEN FIX
          - pl odpovídá header px
          - first:-ml to vizuálně vyrovná
        */}
        <div className="flex gap-8 pl-4 sm:pl-6 lg:pl-8 pr-4">

          {packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              className="
                min-w-[340px] 
                md:min-w-[420px] 
                max-w-[500px] 
                first:-ml-4 
                sm:first:-ml-6 
                lg:first:-ml-8
              "
            >
              <div className="relative group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-xl transition-all duration-500">

                {/* IMAGE */}
                <div className="aspect-[16/9] w-full relative overflow-hidden bg-gray-100">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* INFO */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-2 font-sans">
                    {pkg.name}
                  </h3>

                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light font-sans">
                    {pkg.description}
                  </p>

                  <button
                    onClick={onCtaClick}
                    className="mt-6 px-6 py-3 bg-brand text-black font-bold text-sm rounded-full transition-all duration-300 hover:scale-[1.03]"
                  >
                    Konzultovat →
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default PackagesSection;