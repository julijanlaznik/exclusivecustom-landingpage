
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LeadPopupProps {
  onCtaClick: () => void;
}

const LeadPopup: React.FC<LeadPopupProps> = ({ onCtaClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenLeadPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 20000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenLeadPopup', 'true');
  };

  const handleCta = () => {
    handleClose();
    onCtaClick();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
          />

          {/* Popup Container */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-500 hover:text-black transition-colors shadow-sm"
              >
                <X size={20} />
              </button>

              {/* Image Side */}
              <div className="md:w-2/5 h-48 md:h-auto relative">
                <img
                  src="/foto1.webp"
                  alt="PPF Detail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 md:to-transparent" />
              </div>

              {/* Content Side */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 font-sans tracking-tight">
                  Máte ještě otázky?
                </h3>
                <h4 className="text-xl font-semibold text-brand mb-4 font-sans">
                  Jsme tu pro vás!
                </h4>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 font-light font-sans">
                  Rádi vám poradíme a najdeme společné řešení. Stačí vyplnit formulář - bezplatně si s vámi zavoláme a vše probereme.
                </p>

                <button
                  onClick={handleCta}
                  className="w-full py-4 bg-brand text-black font-bold rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-sans uppercase tracking-wider text-sm"
                >
                  Bezplatně se poradit →
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeadPopup;
