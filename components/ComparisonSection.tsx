
import React, { useState, useRef, useEffect } from 'react';

const ComparisonSection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    
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

    return () => {
      observer.disconnect();
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  const handleMove = (clientX: number, force = false) => {
    if (!containerRef.current || (!isDragging && !force)) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX, true);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX, true);
  };

  return (
    <section ref={sectionRef} className="pt-24 pb-16 md:pt-[150px] md:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mb-10 items-start">
          <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'} transition-all duration-1000 md:-translate-y-12`}>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-black leading-tight font-sans">
              Nemůžete se rozhodnout, jestli auto pravidelně ošetřovat, investovat do ochrany, nebo ho nechat napospas?
            </h2>
          </div>
          
          <div className={`${isVisible ? 'animate-fade-up delay-2' : 'opacity-0'} transition-all duration-1000 md:translate-y-[200px]`}>
            <p className="text-gray-600 text-sm md:text-lg leading-relaxed font-sans">
              Každý den vaše auto čelí ostrým kamínkům, špíně a počasí. Bez ochrany rychle ztrácí lesk a hodnotu. 
              <span className="block mt-3 md:mt-4 text-black font-medium">
                S ochranou? Vypadá jako nové roky dopředu – a to se pozná nejen na vzhledu, ale i na ceně při prodeji.
              </span>
            </p>
          </div>
        </div>

        <div className={`relative max-w-5xl mx-auto mt-12 md:mt-20 ${isVisible ? 'animate-fade-up delay-3' : 'opacity-0'}`}>
          <div 
            ref={containerRef}
            className={`relative h-[320px] md:h-[600px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl select-none border border-gray-100 group ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
          >
            <div className="absolute inset-0">
              <img 
                src="/ppf-po-aplikaci.webp" 
                alt="PPF Protected Glossy" 
                className="w-full h-full object-cover"
              />
            </div>

            <div 
              className="absolute inset-0 z-10 grayscale-[0.3] contrast-[0.9] brightness-[0.8]"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img 
                src="/ppf-pred-aplikaci.webp" 
                alt="Unprotected Dull Paint" 
                className="w-full h-full object-cover"
              />
            </div>

            <div 
              className="absolute top-0 bottom-0 z-20 w-px bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border border-gray-200 transition-transform group-hover:scale-110">
                  <div className="flex gap-1">
                    <div className="w-0.5 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-0.5 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <div className="bg-white px-3 py-1.5 md:px-5 md:py-2 border border-gray-100 shadow-sm rounded-lg">
               <span className="text-[9px] md:text-xs font-bold uppercase tracking-wider text-gray-400">Bez ochrany</span>
            </div>
            <div className="bg-brand/10 px-3 py-1.5 md:px-5 md:py-2 border border-brand/20 shadow-sm rounded-lg">
               <span className="text-[9px] md:text-xs font-bold uppercase tracking-wider text-brand-dark">S PPF fólií</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
