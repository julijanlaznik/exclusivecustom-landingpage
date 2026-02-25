
import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] pointer-events-none">
      <div 
        className="h-full bg-brand transition-all duration-150 ease-out shadow-[0_0_10px_rgba(92,205,197,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
