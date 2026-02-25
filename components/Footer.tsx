
import React from 'react';

interface FooterProps {
  onTermsClick: (e: React.MouseEvent) => void;
}

const Footer: React.FC<FooterProps> = ({ onTermsClick }) => {
  return (
    <footer className="py-16 bg-white border-t border-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-4">
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
    </footer>
  );
};

export default Footer;
