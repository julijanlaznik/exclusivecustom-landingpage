
import React, { forwardRef, useState, useEffect, useRef } from 'react';

const FormSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState('+420 ');
  const [isHeadlineVisible, setIsHeadlineVisible] = useState(false);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeadlineVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    if (!input.startsWith('+420 ')) {
      input = '+420 ';
    }
    const rawDigits = input.substring(5).replace(/\D/g, '').substring(0, 9);
    let formatted = '+420 ';
    for (let i = 0; i < rawDigits.length; i++) {
      if (i > 0 && i % 3 === 0) formatted += ' ';
      formatted += rawDigits[i];
    }
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const carType = (form.querySelector('#bodyType') as HTMLSelectElement).value;
    const email = (form.querySelector('#email') as HTMLInputElement).value;
    const message = (form.querySelector('#note') as HTMLTextAreaElement).value;

    const payload = {
      carType,
      email,
      phone,
      message
    };

    try {
      // We use fetch to send data to Zapier
      await fetch('https://hooks.zapier.com/hooks/catch/25611644/ue3y3ao/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#0a1111] relative overflow-hidden flex items-center">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[700px] h-[700px] bg-brand/10 rounded-full blur-[180px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[130px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-[45%] w-full text-center lg:text-left">
            <h2 ref={headlineRef} className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-sans leading-[1.1] tracking-tight animate-fade-up">
              Chcete chránit <br />
              svůj vůz? <br />
              <span className="inline-block overflow-hidden h-[1.2em] -mb-[0.2em]">
                <span className={`inline-block text-brand opacity-0 ${isHeadlineVisible ? 'animate-reveal' : ''}`} style={{ animationDelay: '0.4s' }}>
                  Začněte zde.
                </span>
              </span>
            </h2>
            
            <p className="mt-8 text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-sm mx-auto lg:mx-0 font-sans animate-fade-up delay-1">
              Prémiová PPF ochrana pro vozy, na kterých skutečně záleží. Stačí vyplnit kontakt a my se postaráme o zbytek.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-up delay-2">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a1111] bg-gray-800 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?u=${i + 15}`} 
                      alt="User" 
                      className="w-full h-full object-cover grayscale opacity-80"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#0a1111] bg-brand flex items-center justify-center text-black text-xs font-bold font-sans">
                  +500
                </div>
              </div>
              <p className="text-white/60 text-sm font-light font-sans leading-relaxed text-center sm:text-left">
                Přidejte se k <span className="text-white font-bold">500+ majitelům</span>,<br />
                kteří své vozy již chrání.
              </p>
            </div>
          </div>

          <div className="lg:w-[55%] w-full">
            <div className="relative w-full max-w-xl mx-auto lg:ml-auto">
              <div className="absolute -inset-1 bg-brand/10 rounded-[3rem] blur-2xl pointer-events-none"></div>
              <div className="relative bg-[#111c1c]/80 backdrop-blur-md border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl transition-all duration-500 min-h-[450px] flex flex-col justify-center">
                
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
                    <div className="space-y-4">
                      <div className="relative">
                        <select
                          required
                          id="bodyType"
                          className="w-full bg-white/5 border border-white/10 py-5 px-8 text-white rounded-full outline-none focus:border-brand focus:bg-white/10 transition-all font-sans text-lg md:text-xl appearance-none cursor-pointer"
                          defaultValue=""
                        >
                          <option value="" disabled className="bg-[#111c1c]">Typ mého vozidla</option>
                          <option value="SUV" className="bg-[#111c1c]">SUV</option>
                          <option value="Kombi" className="bg-[#111c1c]">Kombi</option>
                          <option value="Sedan" className="bg-[#111c1c]">Sedan</option>
                          <option value="Kupé" className="bg-[#111c1c]">Kupé</option>
                          <option value="Limuzína" className="bg-[#111c1c]">Limuzína</option>
                          <option value="Kabriolet" className="bg-[#111c1c]">Kabriolet</option>
                          <option value="Supersport" className="bg-[#111c1c]">Supersport</option>
                          <option value="Ostatní" className="bg-[#111c1c]">Ostatní</option>
                        </select>
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          required
                          type="email"
                          id="email"
                          placeholder="Váš e-mail"
                          className="w-full bg-white/5 border border-white/10 py-5 px-8 text-white placeholder:text-white/20 rounded-full outline-none focus:border-brand focus:bg-white/10 transition-all font-sans text-lg md:text-xl"
                        />
                      </div>
                      <div className="relative">
                        <input
                          required
                          type="tel"
                          id="contact"
                          value={phone}
                          onChange={handlePhoneChange}
                          placeholder="+420 000 000 000"
                          className="w-full bg-white/5 border border-white/10 py-5 px-8 text-white placeholder:text-white/20 rounded-full outline-none focus:border-brand focus:bg-white/10 transition-all font-sans text-lg md:text-xl"
                        />
                      </div>
                      <div className="relative">
                        <textarea
                          id="note"
                          rows={3}
                          placeholder="Chcete se zeptat na termín nebo konkrétní balíček? (Zcela volitelné)"
                          className="w-full bg-white/5 border border-white/10 py-6 px-8 text-white placeholder:text-white/20 rounded-[2rem] outline-none focus:border-brand focus:bg-white/10 transition-all font-sans text-lg md:text-xl resize-none"
                        ></textarea>
                      </div>
                    </div>
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`group relative w-full py-5 bg-brand text-black font-bold text-xs sm:text-sm md:text-base rounded-full transition-all duration-500 shadow-[0_15px_50px_-10px_rgba(92,205,197,0.4)] overflow-hidden active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        <span className="relative z-10 font-sans uppercase tracking-[0.15em]">
                          {isSubmitting ? 'Odesílám...' : 'Odeslat nezávazný formulář'}
                        </span>
                        {!isSubmitting && <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>}
                      </button>
                      <p className="text-center mt-6 text-[10px] md:text-xs text-white/30 uppercase tracking-[0.2em] font-sans">
                        Odpovídáme průměrně do 2 hodin
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="text-center animate-fade-up py-10">
                    <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(92,205,197,0.4)]">
                      <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white font-sans uppercase tracking-tight">Hotovo</h3>
                    <p className="text-lg text-brand-light font-sans font-light max-w-xs mx-auto leading-relaxed">
                      Ozveme se Vám do 30 minut.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

FormSection.displayName = 'FormSection';

export default FormSection;
