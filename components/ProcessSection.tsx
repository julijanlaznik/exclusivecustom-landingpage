
import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'První setkání a konzultace',
      desc: 'Probereme společně vaše potřeby, styl ježdění a rozsah ochrany, který dává smysl pro váš vůz. Odpovíme na všechny vaše otázky a navrhneme řešení přesně na míru.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800',
      isLight: true
    },
    {
      number: '02',
      title: 'Příprava vozu na aplikaci',
      desc: 'Důkladně vyčistíme a odmastíme povrch laku. Odstraníme všechny nečistoty, prach a stopy předchozích ošetření. Tento krok je základ kvalitního výsledku.',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800',
      isLight: false
    },
    {
      number: '03',
      title: 'Precizní aplikace fólie',
      desc: 'Nanášíme PPF fólii s milimetrovou přesností na každý detail. Pracujeme v kontrolovaném prostředí, aby nedošlo k žádným nečistotám nebo bublinám.',
      image: 'https://images.unsplash.com/photo-1621359953476-b16299a78001?auto=format&fit=crop&q=80&w=800',
      isLight: false
    },
    {
      number: '04',
      title: 'Kontrola kvality',
      desc: 'Po aplikaci zkontrolujeme každý centimetr fólie z každého úhlu. Hledáme jakékoli nedokonalosti – náš standard je 100% perfektní výsledek.',
      image: 'https://images.unsplash.com/photo-1507133351264-39817f34cee4?auto=format&fit=crop&q=80&w=800',
      isLight: false
    },
    {
      number: '05',
      title: 'Předání vašeho vozu',
      desc: 'Auto vám předáme kompletně chráněné se zárukou na práci i materiál. Zároveň vám poskytneme tipy na údržbu, aby vám fólie vydržela co nejdéle.',
      image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&q=80&w=800',
      isLight: false
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-black text-sm md:text-base font-normal mb-4 block font-sans tracking-tight">
            Váš vůz u nás není měsíc
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight font-sans">
            Spolupráce s námi je<br />rychlá a bez stresu
          </h2>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-6 pr-8">
          {/* Spacer to align first card with heading container, allows scrolling to edge */}
          <div className="flex-shrink-0 w-4 sm:w-6 lg:w-[calc((100vw-1280px)/2+32px)] min-w-[1rem]"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex-shrink-0 w-[300px] md:w-[450px] h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden relative snap-start transition-all duration-700 ease-out ${
                step.isLight ? 'bg-[#f7f7f7]' : 'bg-black'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(50px)'
              }}
            >
              {/* Background Image for dark cards */}
              {!step.isLight && (
                <div className="absolute inset-0 z-0">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover opacity-60 grayscale-[0.3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>
              )}

              <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <span className={`text-xl md:text-2xl font-bold font-oxanium ${step.isLight ? 'text-black' : 'text-white'}`}>
                    {step.number}
                  </span>
                  <h3 className={`text-xl md:text-2xl font-bold font-sans tracking-tight ${step.isLight ? 'text-black' : 'text-white'}`}>
                    {step.title}
                  </h3>
                </div>

                {/* Image for light card (like the map in screenshot) */}
                {step.isLight && (
                  <div className="mb-auto">
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-video">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                <div className={`mt-auto ${step.isLight ? 'text-gray-600' : 'text-white/80'}`}>
                  <p className="text-sm md:text-base leading-relaxed font-light font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Under the cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-4 mt-4">
        <button 
          onClick={() => scroll('left')}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
          aria-label="Předchozí krok"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
          aria-label="Další krok"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
