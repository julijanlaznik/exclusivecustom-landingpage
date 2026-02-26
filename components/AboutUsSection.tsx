
import React, { useEffect, useState, useRef } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const AboutUsSection: React.FC = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Text & Map */}
          <div className={`flex-1 space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 tracking-tight font-sans">
                Jsme Exclusive Custom
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed font-light font-sans max-w-xl">
                Jsme tým nadšenců do aut, kteří věří v poctivou práci a precizní výsledek. Za roky zkušeností jsme polepili a ochránili stovky vozů všech značek – od běžných denních aut až po sportovní modely a luxusní vozy.
              </p>
            </div>

            {/* Satellite Map Card */}
            <div className="relative group max-w-md">
              <div className="absolute -inset-2 bg-brand/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gray-50 rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500">
                <div className="aspect-video w-full relative">
                  {/* Google Satellite Map Iframe - Updated to Jeneč */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.018108855937!2d14.205395476661554!3d50.09193827152583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bb988d56185f7%3A0x2477c70e27b52e3f!2sEXCLUSIVE%20CUSTOM!5e1!3m2!1scs!2scz!4v1772039217750!5m2!1scs!2scz" 
                    className="absolute inset-0 w-full h-full contrast-[1.1] transition-all duration-700"
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center text-brand">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-black font-bold text-sm uppercase tracking-wider mb-0.5">Jeneč u Prahy</p>
                      <p className="text-gray-400 text-xs font-sans">Průmyslová 492/28, 252 61</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=EXCLUSIVE+CUSTOM+Průmyslová+492/28+Jeneč" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:border-brand hover:text-brand transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Overlapping Photos */}
          <div className={`flex-1 relative h-auto md:h-[500px] w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} flex flex-col md:block gap-4`}>
            <div className="relative md:absolute left-0 top-0 w-full md:w-[70%] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 md:transform md:-rotate-3 border-4 md:border-8 border-white">
              <img 
                src="/interier-logo.png" 
                alt="Exclusive Customs Showroom" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="relative md:absolute right-0 bottom-0 w-full md:w-[65%] aspect-square rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] z-20 md:transform md:rotate-3 border-4 md:border-8 border-white md:translate-y-4">
              <img 
                src="/interier-wide.png" 
                alt="Workshop Detailing" 
                className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
