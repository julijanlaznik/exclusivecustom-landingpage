
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="videoplayback.mp4"
          className="w-full h-full object-cover"
        >
          <source src="videoplayback.mp4" type="video/mp4" />
          <img 
            src="videoplayback.mp4" 
            alt="PPF Application" 
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20"></div>
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 flex-grow flex flex-col justify-end">
        <div className="w-full px-4 md:px-10 lg:px-12 text-left pt-32 pb-8 md:pb-16">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-oxanium uppercase drop-shadow-2xl animate-fade-up">
              99% OCHRANA<br />VAŠEHO VOZU
            </h1>
            
            <p className="mt-4 md:mt-6 text-sm md:text-xl text-white/90 max-w-lg leading-relaxed font-extralight drop-shadow-md animate-fade-up delay-1">
              Maximální ochrana na roky dopředu.<br className="hidden md:block" />Důvěřuje nám 500+ majitelů vozů.
            </p>
            
            <div className="mt-8 md:mt-10 flex flex-col items-start animate-fade-up delay-2">
              <button
                onClick={onCtaClick}
                onMouseEnter={handleMouseEnter}
                className="w-full md:w-auto cta-button px-10 py-4 md:px-12 md:py-5 rounded-full text-base md:text-xl font-bold shadow-2xl"
              >
                Bezplatně se poradit →
              </button>
              
              <div className="mt-6 md:mt-8 flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <div className="flex items-center gap-2">
                  {/* Small Google G Logo */}
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  
                  <div className="flex text-yellow-400 space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-[10px] md:text-sm font-black text-white">
                  4,9 / 5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-white/[0.02] border-t border-white/5">
        <div className="w-full px-4 md:px-10 lg:px-12 py-4 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-4 md:gap-8">
            <div className="flex flex-col items-start animate-pop-up delay-3">
              <span className="text-lg md:text-2xl font-black text-white/90 font-oxanium leading-none">99 %</span>
              <span className="text-[7px] md:text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">spokojenost</span>
            </div>
            <div className="flex flex-col items-start animate-pop-up delay-4">
              <span className="text-lg md:text-2xl font-black text-white/90 font-oxanium leading-none">8</span>
              <span className="text-[7px] md:text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">specialistů</span>
            </div>
            <div className="flex flex-col items-start animate-pop-up delay-5">
              <span className="text-lg md:text-2xl font-black text-white/90 font-oxanium leading-none">22 let</span>
              <span className="text-[7px] md:text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">zkušeností</span>
            </div>
            <div className="flex flex-col items-start animate-pop-up delay-6">
              <span className="text-lg md:text-2xl font-black text-white/90 font-oxanium leading-none">500+</span>
              <span className="text-[7px] md:text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">vozů</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
