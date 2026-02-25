
import React, { useEffect, useState, useRef } from 'react';

interface ForWhoSectionProps {
  onCtaClick: () => void;
}

const ForWhoSection: React.FC<ForWhoSectionProps> = ({ onCtaClick }) => {
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

  const targetGroups = [
    {
      title: 'Běžný řidič, který o své vozidlo pečuje',
      desc: 'Chcete auto chránit před každodenním opotřebením a zachovat jeho hodnotu i po letech provozu.'
    },
    {
      title: 'Vlastník vozu střední a vyšší třídy',
      desc: 'Investovali jste do kvalitního auta a chcete, aby jeho lak zářil stejným leskem jako v den nákupu.'
    },
    {
      title: 'Automobilový nadšenec',
      desc: 'Víte, že špičková ochrana je základem každého detailingu – a u nás kompromisy neexistují.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content Side */}
          <div className="flex-1">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-black text-sm md:text-base font-normal mb-4 block font-sans tracking-tight">
                Individuální přístup
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12 leading-tight font-sans">
                PPF fólie je přesně pro vás, <span className="text-gray-400">pokud jste:</span>
              </h2>
            </div>
            
            <div className="space-y-8 mb-14">
              {targetGroups.map((group, index) => (
                <div 
                  key={index} 
                  className={`relative pl-8 transition-all duration-700`}
                  style={{ 
                    transitionDelay: `${400 + (index * 200)}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                >
                  <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-[#5ccdc5] shadow-[0_0_10px_#5ccdc5]"></div>
                  <div className="absolute left-[3px] top-4 bottom-0 w-[1px] bg-gray-100 last:hidden"></div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-2 font-sans">
                    {group.title}
                  </h3>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed font-sans font-light max-w-xl">
                    {group.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Stacking adjustment: flex-col for all screens ensures it fits PC well */}
            <div className={`flex flex-col items-start gap-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-black font-semibold text-lg font-sans">
                Poznáváte se v tom? Tak klikněte a:
              </p>
              <button
                onClick={onCtaClick}
                onMouseEnter={handleMouseEnter}
                className="cta-button-secondary px-8 py-3.5 rounded-full text-sm md:text-base font-bold transition-all shadow-sm inline-flex items-center justify-center"
              >
                Poraďte se bezplatně s našimi experty →
              </button>
            </div>
          </div>

          {/* Right Image Side */}
          <div className={`flex-1 w-full lg:w-auto transition-all duration-[1.5s] ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#5ccdc5]/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#5ccdc5]/5 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative overflow-hidden rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-[500px] lg:h-[700px] object-cover transition-transform duration-[2s] group-hover:scale-105"
                >
                  <source src="/ppf-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
