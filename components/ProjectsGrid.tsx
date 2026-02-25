
import React, { useEffect, useState, useRef } from 'react';

interface PhotoItemProps {
  photo: {
    url: string;
    alt: string;
    span: string;
  };
  index: number;
}

const PhotoCard: React.FC<PhotoItemProps> = ({ photo, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.15,
        // Spustíme animaci o něco dříve, než je fotka plně vidět, pro plynulejší pocit
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gray-50 group transition-all duration-[1200ms] ease-out shadow-sm hover:shadow-xl hover:-translate-y-1 ${photo.span} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ 
        // Jemné fázové zpoždění pro fotky, které jsou vedle sebe, aby nelezly ven úplně naráz
        transitionDelay: `${(index % 3) * 100}ms` 
      }}
    >
      <img 
        src={photo.url} 
        alt={photo.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

const ProjectsGrid: React.FC = () => {
  const photos = [
    { url: '/foto1.webp', alt: 'Porsche 911 GT3', span: 'md:col-span-2 md:row-span-2' },
      { url: '/foto2.webp', alt: 'Lamborghini Huracán', span: 'md:col-span-1 md:row-span-1' },
      { url: '/foto3.webp', alt: 'Luxury Showroom', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto4.webp', alt: 'BMW M4 Competition', span: 'md:col-span-2 md:row-span-1' },
    { url: '/foto5.webp', alt: 'Mercedes AMG G63', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto6.webp', alt: 'Ferrari F8 Tributo', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto7.webp', alt: 'Porsche Taycan', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto8.webp', alt: 'Detail laku', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto9.webp', alt: 'Aston Martin DB11', span: 'md:col-span-2 md:row-span-1' },
    { url: '/foto10.webp', alt: 'Tesla Model S Plaid', span: 'md:col-span-2 md:row-span-1' },
    { url: '/foto11.webp', alt: 'McLaren 720S', span: 'md:col-span-2 md:row-span-1' },
    // Fix: Added missing opening quote for 'alt' value
    { url: '/foto1.webp', alt: 'Audi R8 V10', span: 'md:col-span-1 md:row-span-2' },
    { url: '/foto2.webp', alt: 'Rolls-Royce Ghost', span: 'md:col-span-2 md:row-span-2' },
    { url: '/foto3.webp', alt: 'Bentley Continental', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto4.webp', alt: 'Corvette C8', span: 'md:col-span-2 md:row-span-1' },
    { url: '/foto5.webp', alt: 'Shelby Cobra', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto6.webp', alt: 'BMW M8', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto7.webp', alt: 'Jaguar F-Type', span: 'md:col-span-1 md:row-span-1' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="w-full px-[10px]">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight font-sans">
            Podívejte se na naši práci
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-5">
          {photos.map((photo, index) => (
            <PhotoCard key={index} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
