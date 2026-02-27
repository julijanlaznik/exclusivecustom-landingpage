
import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ComparisonSection from './components/ComparisonSection';
import FeatureGridSection from './components/FeatureGridSection';
import ForWhoSection from './components/ForWhoSection';
import PackagesSection from './components/PackagesSection';
import ProcessSection from './components/ProcessSection';
import AboutUsSection from './components/AboutUsSection';
import VideoGallerySection from './components/VideoGallerySection';
import FaqSection from './components/FaqSection';
import FormSection from './components/FormSection';
import ProjectsGrid from './components/ProjectsGrid';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import TermsPage from './components/TermsPage';
import LeadPopup from './components/LeadPopup';
import FloatingPhone from './components/FloatingPhone';

type View = 'home' | 'terms';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [showStickyCta, setShowStickyCta] = useState(false);
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
      <LeadPopup onCtaClick={scrollToForm} />
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
            <ForWhoSection onCtaClick={scrollToForm} />
            <PackagesSection onCtaClick={scrollToForm} />
            <ProcessSection />
            <FormSection ref={formRef} />
            <AboutUsSection />
            <VideoGallerySection />
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
