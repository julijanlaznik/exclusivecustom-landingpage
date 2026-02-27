
import React from 'react';

interface FooterProps {
  onTermsClick: (e: React.MouseEvent) => void;
}

const Footer: React.FC<FooterProps> = ({ onTermsClick }) => {
  return (
    <footer className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col justify-end overflow-hidden">
      {/* Background Image Section */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/teamfoto.png" 
          alt="Exclusive Customs Team" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 w-full px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <button 
              onClick={onTermsClick}
              className="text-xs text-white/40 hover:text-brand transition-colors font-sans cursor-pointer outline-none uppercase tracking-widest"
            >
              Obchodní podmínky
            </button>
            <p className="text-[10px] text-white/20 font-sans tracking-widest uppercase">
              © 2026 exclusivecustom.cz
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <a 
              href="https://www.smartdigital.cz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] text-white/30 hover:text-brand transition-colors font-sans tracking-[0.2em] uppercase"
            >
              by <span className="font-bold text-white/50">Smart digital</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
