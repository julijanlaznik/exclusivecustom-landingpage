
import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <p className="text-black text-sm md:text-base font-normal mb-4 font-sans tracking-tight">
              Garance kvality
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 tracking-tight font-sans">
              Proč Exclusive Customs
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-sans font-light">
              PPF fólie instalujeme na vozy, kde záleží na každém detailu. 
              Každý projekt řešíme individuálně – žádná sériová práce.
            </p>
            <div className="p-6 bg-gray-50 rounded-2xl inline-block">
              <div className="flex text-yellow-400 space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-bold text-xl text-black font-sans">4,9 / 5 <span className="text-gray-400 font-normal text-base ml-1">z 456 recenzí</span></p>
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://picsum.photos/seed/car1/600/800" 
                alt="Prémiová instalace 1" 
                className="rounded-2xl object-cover h-64 w-full shadow-lg"
              />
              <img 
                src="https://picsum.photos/seed/car2/600/400" 
                alt="Showroom" 
                className="rounded-2xl object-cover h-40 w-full shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://picsum.photos/seed/car3/600/400" 
                alt="Detail fólie" 
                className="rounded-2xl object-cover h-40 w-full shadow-lg"
              />
              <img 
                src="https://picsum.photos/seed/car4/600/800" 
                alt="Prémiová instalace 2" 
                className="rounded-2xl object-cover h-64 w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
