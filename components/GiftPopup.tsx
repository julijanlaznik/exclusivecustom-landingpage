
import React, { useState, useEffect } from 'react';
import { Gift, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GiftPopupProps {
  onCtaClick: () => void;
  onModalToggle?: (isOpen: boolean) => void;
}

const GiftPopup: React.FC<GiftPopupProps> = ({ onCtaClick, onModalToggle }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    onModalToggle?.(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    onModalToggle?.(false);
  };

  const handleCta = () => {
    onCtaClick();
    handleCloseModal();
  };

  return (
    <>
      {/* Inline Trigger Button - Tilted & Floating */}
      <div className="flex justify-end max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-[-20px] relative z-20">
        <motion.button
          animate={{ 
            y: [0, -8, 0],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpenModal}
          className="bg-brand text-black px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 font-bold text-sm md:text-base -rotate-3 hover:rotate-0 transition-all duration-300 border-2 border-black/5"
        >
          <div className="w-8 h-8 bg-black text-brand rounded-lg flex items-center justify-center">
            <Gift size={20} />
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[10px] uppercase tracking-widest opacity-70">Něco pro Vás</span>
            <span>máme.....</span>
          </div>
        </motion.button>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors z-20 bg-white/80 backdrop-blur-sm p-2 rounded-full"
              >
                <X size={20} />
              </button>

              {/* Image Side */}
              <div className="md:w-1/2 h-64 md:h-auto relative bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200" 
                  alt="Speciální dárek" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden"></div>
                <div className="absolute bottom-6 left-6 text-white md:hidden">
                  <p className="text-brand font-bold uppercase tracking-widest text-xs">Exkluzivně pro Vás</p>
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/10 text-brand rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 w-fit">
                  <Gift size={12} />
                  Dárek k celopolepu
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight font-sans tracking-tight">
                  Máme pro Vás <br />
                  <span className="text-brand">speciální nabídku</span>
                </h3>
                
                <p className="text-gray-500 text-lg mb-8 font-light leading-relaxed">
                  Ochrannou fólii na displej do interiéru v hodnotě <span className="line-through">1 900 Kč</span> získáte <span className="text-black font-bold">zcela zdarma</span>.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 bg-brand/20 rounded-full flex items-center justify-center text-brand">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-sm font-medium">Špičková ochrana proti škrábancům</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 bg-brand/20 rounded-full flex items-center justify-center text-brand">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-sm font-medium">Dokonalá průhlednost a citlivost</span>
                  </div>
                </div>

                <button
                  onClick={handleCta}
                  className="w-full bg-black text-white py-5 rounded-full font-bold text-lg hover:bg-brand hover:text-black transition-all duration-300 shadow-xl transform hover:-translate-y-1"
                >
                  Chci využít tuto nabídku →
                </button>
                
                <p className="mt-6 text-[10px] text-gray-400 uppercase tracking-widest text-center">
                  * Nabídka je časově omezená
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GiftPopup;
