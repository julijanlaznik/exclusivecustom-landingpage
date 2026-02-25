
import React, { useEffect, useState, useRef } from 'react';

interface FeatureGridSectionProps {
  onCtaClick: () => void;
}

const FeatureGridSection: React.FC<FeatureGridSectionProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading Section - Popup Animation */}
        <div className={`text-center max-w-4xl mx-auto mb-20 transition-all duration-[1200ms] cubic-bezier(0.34, 1.56, 0.64, 1) ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight font-sans">
            PPF fólie - nejúčinnější cesta, jak ochránit váš vůz
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light font-sans">
            Zapomeňte na stres z poškození laku. Zvolte ochranu s 99,9% účinností a samohojícím efektem.
          </p>
        </div>

        {/* Asymmetrical Photo Grid with Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mt-16">
          {/* Left Card - Slightly Higher */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 group hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
              <div className="relative overflow-hidden rounded-[2rem]">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110"
                >
                  <source src="/ppf-aplikace.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-2xl font-bold text-black mb-4 font-sans">Jak dlouho PPF fólie vydrží?</h4>
                <p className="text-gray-600 leading-relaxed font-sans">
                  Naše PPF fólie vydrží 5-10 let v závislosti na péči a podmínkách. 
                  I po letech intenzivního používání si zachovává 99,9% ochranné schopnosti 
                  a díky samohojícímu efektu vypadá stále jako nová.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card - Shifted Down (Offset) */}
          <div className={`transition-all duration-1000 delay-500 md:mt-32 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
             <div className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 group hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
              <div className="relative overflow-hidden rounded-[2rem]">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110"
                >
                  <source src="/ppf-proces.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-2xl font-bold text-black mb-4 font-sans">Precizní aplikace bez rizika poškození laku</h4>
                <p className="text-gray-600 leading-relaxed font-sans">
                  Díky profesionálnímu softwaru a přesným výřezům probíhá instalace bez řezání přímo na laku – čistě a bezpečně.
                </p>
              </div>
            </div>
          </div>

          {/* Third Card - Left Side */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 group hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
              <div className="relative overflow-hidden rounded-[2rem]">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110"
                >
                  <source src="/ppf-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-2xl font-bold text-black mb-4 font-sans">Ochrana, která šetří statisíce.</h4>
                <p className="text-gray-600 leading-relaxed font-sans">
                  PPF fólie chrání váš vůz před kamínky, škrábanci i UV zářením. Minimalizujete náklady na opravy laku a zároveň si udržíte vyšší hodnotu vozu při prodeji.
                </p>
              </div>
            </div>
          </div>

          {/* Fourth Card - Right Side (Offset) */}
          <div className={`transition-all duration-1000 delay-900 md:mt-32 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
             <div className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 group hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
              <div className="relative overflow-hidden rounded-[2rem]">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110"
                >
                  <source src="/ppf-aplikace.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-2xl font-bold text-black mb-4 font-sans">Keramika nebo PPF? Nemusíte si vybírat.</h4>
                <p className="text-gray-600 leading-relaxed font-sans">
                  Naše PPF fólie obsahuje keramické složky, které zajišťují špičkovou ochranu proti poškození i vynikající hydrofobní efekt. Váš vůz je chráněn a zároveň zůstává déle čistý.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Centered CTA Button with 100px margin top */}
        <div className={`mt-[100px] text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={onCtaClick}
            onMouseEnter={handleMouseEnter}
            className="cta-button px-10 py-5 rounded-full text-base md:text-xl font-bold shadow-2xl"
          >
            Bezplatná konzultace PPF →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureGridSection;
