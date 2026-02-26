
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Co je PPF (Paint Protection Film)?",
    answer: "PPF je vysoce odolná polyuretanová fólie, která chrání lak vozidla před mechanickým poškozením a vlivy prostředí."
  },
  {
    question: "Z jakého materiálu je PPF vyrobena?",
    answer: "PPF je vyrobena z prémiového termoplastického polyuretanu, který vyniká svou pružností a odolností."
  },
  {
    question: "Jaká je životnost ochranné fólie PPF?",
    answer: "Naše produkty PPF mají životnost až 10 let a zajišťují dlouhodobou a kvalitní ochranu vašeho vozu."
  },
  {
    question: "Jaká je záruka na práci při aplikaci PPF?",
    answer: "Na samotnou aplikaci fólie poskytujeme standardní dvouletou záruku pro vaši maximální spokojenost."
  },
  {
    question: "Jaká je péče o vozidlo s PPF?",
    answer: "Péče o vůz s PPF je velmi snadná a zahrnuje především pravidelné mytí šetrnými prostředky."
  },
  {
    question: "Jaký je doporučený postup pro mytí vozidla s PPF?",
    answer: "Doporučujeme ruční mytí nebo bezkontaktní myčky s použitím pH neutrálních šamponů."
  },
  {
    question: "Mohu používat mycí linky?",
    answer: "Používání kartáčových mycích linek nedoporučujeme, abyste předešli zbytečnému namáhání povrchu fólie."
  },
  {
    question: "Může být PPF odstraněna z vozidla?",
    answer: "Ano, PPF lze kdykoliv profesionálně odstranit bez jakéhokoliv poškození původního laku vozidla."
  },
  {
    question: "Jaké jsou výhody PPF oproti jiným způsobům ochrany laku?",
    answer: "PPF nabízí bezkonkurenční fyzickou ochranu proti kamínkům a škrábancům, kterou jiné metody neposkytují."
  },
  {
    question: "Jaké jsou nejčastější aplikace PPF na vozidle?",
    answer: "Nejčastěji se aplikuje na přední část vozu (kapota, nárazník), ale lze ochránit i celé vozidlo."
  },
  {
    question: "Jaký je rozdíl mezi PPF a barevnými PVC fóliemi?",
    answer: "PPF je výrazně silnější a odolnější materiál určený k ochraně, zatímco PVC fólie slouží primárně ke změně barvy."
  },
  {
    question: "Jaký je rozdíl mezi keramickou ochranou a PPF?",
    answer: "Keramika chrání proti chemii a dodává lesk, zatímco PPF poskytuje skutečnou mechanickou ochranu proti nárazům."
  },
  {
    question: "Je možné aplikovat PPF na interiérové plochy vozidla?",
    answer: "Ano, PPF je skvělým řešením pro ochranu náchylných lesklých ploch v interiéru vozu."
  },
  {
    question: "Jaké jsou rozdíly mezi matnou a lesklou variantou PPF?",
    answer: "Lesklá varianta zachovává původní vzhled laku, zatímco matná dodá vozu moderní saténový finiš."
  },
  {
    question: "Jaké služby nabízíte kromě aplikace PPF?",
    answer: "Kromě PPF nabízíme také tónování skel, polepy interiérů a celkové estetické úpravy vozů."
  },
  {
    question: "Jaká je údržba a obnova fólie?",
    answer: "Fólie je v podstatě bezúdržbová a díky samohojivé vrstvě se drobné škrábance zacelí působením tepla."
  },
  {
    question: "Jaké jsou výhody pravidelné kontroly aplikace fólie?",
    answer: "Pravidelná kontrola zajistí, že fólie stále perfektně drží a plní svou ochrannou funkci na 100 %."
  }
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  const initialCount = 6;
  const displayedFaqs = showAll ? faqs : faqs.slice(0, initialCount);

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 tracking-tight font-sans">
            Nejčastější otázky
          </h2>
          <p className="text-lg text-gray-500 font-light font-sans">
            Vše, co potřebujete vědět o ochraně laku a našich službách.
          </p>
        </div>

        <div className="space-y-4">
          {displayedFaqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                openIndex === index ? 'border-brand shadow-lg' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center group focus:outline-none"
              >
                <span className={`font-semibold text-lg transition-colors ${
                  openIndex === index ? 'text-brand' : 'text-gray-800'
                }`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  openIndex === index ? 'bg-brand text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
                }`}>
                  <ChevronDown size={18} />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-500 font-light leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && faqs.length > initialCount && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 bg-white border border-gray-200 text-black font-bold rounded-full hover:border-brand hover:text-brand transition-all shadow-sm"
            >
              Zobrazit další otázky
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-24 bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 font-sans">Nenašli jste, co jste hledali?</h3>
          <p className="text-gray-500 font-light mb-8 max-w-md mx-auto">Zavolejte nám přímo a my vám rádi vše vysvětlíme osobně.</p>
          <a 
            href="tel:+420774905905" 
            className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white rounded-full hover:bg-brand hover:text-black transition-all duration-300 group shadow-lg"
          >
            <div className="w-10 h-10 bg-white/10 group-hover:bg-black/10 rounded-full flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight">+420 774 905 905</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
