
import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ComparisonSection from './components/ComparisonSection';
import FeatureGridSection from './components/FeatureGridSection';
import ThankYouSection from './components/ThankYouSection';
import ForWhoSection from './components/ForWhoSection';
import PackagesSection from './components/PackagesSection';
import ProcessSection from './components/ProcessSection';
import AboutUsSection from './components/AboutUsSection';
import VideoGallerySection from './components/VideoGallerySection';
import CEOSection from './components/CEOSection';
import FaqSection from './components/FaqSection';
import FormSection from './components/FormSection';
import ProjectsGrid from './components/ProjectsGrid';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import TermsPage from './components/TermsPage';
import LeadPopup from './components/LeadPopup';
import FloatingPhone from './components/FloatingPhone';
import GiftPopup from './components/GiftPopup';

type View = 'home' | 'terms';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [blockLeadPopup, setBlockLeadPopup] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (view !== 'home') {
      setShowStickyCta(false);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = 600;

      let isFormVisible = false;
      if (formRef.current) {
        const rect = formRef.current.getBoundingClientRect();
        isFormVisible = rect.top < window.innerHeight * 0.7;
      }

      setShowStickyCta(scrollY > heroHeight && !isFormVisible);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  const handleGiftModalToggle = (isOpen: boolean) => {
    if (isOpen) {
      setBlockLeadPopup(true);
    } else {
      // Delay unblocking lead popup by 10 seconds after gift modal closes
      setTimeout(() => {
        setBlockLeadPopup(false);
      }, 10000);
    }
  };

  const scrollToForm = () => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToTerms = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setView('terms');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <ScrollProgress />
      <LeadPopup onCtaClick={scrollToForm} disabled={blockLeadPopup} />
      <FloatingPhone />
      <Header 
        onLogoClick={navigateToHome} 
        onCtaClick={scrollToForm}
        showStickyCta={showStickyCta}
      />
      
      <main className="flex-grow">
        {view === 'home' ? (
          <>
            <div ref={heroRef}>
              <Hero onCtaClick={scrollToForm} />
            </div>
            <ComparisonSection />
            <FeatureGridSection onCtaClick={scrollToForm} />
            <GiftPopup onCtaClick={scrollToForm} onModalToggle={handleGiftModalToggle} />
            <ThankYouSection />
            <ForWhoSection onCtaClick={scrollToForm} />
            <PackagesSection onCtaClick={scrollToForm} />
            <ProcessSection />
            <FormSection ref={formRef} />
            <AboutUsSection />
            <VideoGallerySection />
            <CEOSection />
            <FaqSection />
            <ProjectsGrid />
          </>
        ) : (
          <TermsPage onBack={navigateToHome} />
        )}
      </main>

      <Footer onTermsClick={navigateToTerms} />
    </div>
  );
};

export default App;
