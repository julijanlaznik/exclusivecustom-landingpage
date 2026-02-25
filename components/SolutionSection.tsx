
import React from 'react';
import { Shield, Sparkles, Droplets, EyeOff } from 'lucide-react';

interface SolutionSectionProps {
  onCtaClick: () => void;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ onCtaClick }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  };

  const benefits = [
    {
      title: '10letá životnost fólie',
      icon: <Shield className="w-10 h-10 text-[#94cfcd]" />,
      desc: 'Dlouhodobá záruka kvality.'
    },
    {
      title: 'Samohojící efekt',
      icon: <Sparkles className="w-10 h-10 text-[#94cfcd]" />,
      desc: 'Drobné oděrky zmizí působením tepla.'
    },
    {
      title: 'Hydrofobní povrch',
      icon: <Droplets className="w-10 h-10 text-[#94cfcd]" />,
      desc: 'Voda a nečistoty jednoduše sklouznou.'
    },
    {
      title: 'Neviditelná ochrana laku',
      icon: <EyeOff className="w-10 h-10 text-[#94cfcd]" />,
      desc: 'Původní design vozu zůstává nedotčen.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-black text-sm md:text-base font-normal mb-4 block font-sans tracking-tight">
            Maximální ochrana
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12 leading-tight font-sans">
            Řešení: PPF ochranná fólie
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-transparent hover:border-[#94cfcd]/30 transition-all hover:shadow-xl group">
              <div className="mb-6 p-4 bg-[#94cfcd]/5 rounded-full group-hover:bg-[#94cfcd]/10 transition-colors">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans">{benefit.title}</h3>
              <p className="text-gray-500 text-sm font-sans">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button
            onClick={onCtaClick}
            onMouseEnter={handleMouseEnter}
            className="cta-button px-10 py-5 rounded-full text-lg font-bold shadow-xl"
          >
            Bezplatná konzultace PPF →
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
