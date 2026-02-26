
import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingPhone: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: -20 }}
          className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-[90]"
        >
          <a
            href="tel:+420774905905"
            className="group flex items-center gap-3 bg-black/80 backdrop-blur-md border border-white/10 hover:border-brand/50 p-1.5 pr-4 md:p-2 md:pr-6 rounded-full transition-all duration-300 shadow-2xl"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 bg-brand rounded-full flex items-center justify-center text-black group-hover:rotate-12 transition-transform">
              <Phone size={16} className="md:w-[18px] md:h-[18px]" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] md:text-[10px] text-white/50 uppercase tracking-widest font-sans leading-none mb-1">Zavolejte nám</span>
              <span className="text-white text-xs md:text-sm lg:text-base font-bold font-sans tracking-tight leading-none">+420 774 905 905</span>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingPhone;
