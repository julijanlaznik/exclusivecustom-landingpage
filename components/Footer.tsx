
import React from 'react';

interface FooterProps {
  onTermsClick: (e: React.MouseEvent) => void;
}

const Footer: React.FC<FooterProps> = ({ onTermsClick }) => {
  return (
    <footer className="py-16 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center">
          <div className="mb-4">
            <button 
              onClick={onTermsClick}
              className="text-xs md:text-sm text-gray-400 hover:text-brand transition-colors font-sans cursor-pointer outline-none"
            >
              Obchodní podmínky
            </button>
          </div>
          <p className="text-xs md:text-sm text-gray-300 font-sans tracking-wide">
            © 2026 exclusivecustom.cz - Všechna práva vyhrazena.
          </p>
        </div>
        
        {/* Attribution Link */}
        <div className="mt-8 md:mt-0 md:absolute md:bottom-0 md:right-4 text-center md:text-right">
          <a 
            href="https://www.smartdigital.cz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[9px] md:text-[10px] text-gray-300 hover:text-brand transition-colors font-sans tracking-wider"
          >
            by <span className="font-bold">Smart digital</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
