
import React, { useEffect } from 'react';
import { ArrowLeft, Building2, CreditCard } from 'lucide-react';

interface TermsPageProps {
  onBack: () => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onBack }) => {
  useEffect(() => {
    // Vždy odskrolovat nahoru při načtení podmínek
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onBack();
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={handleBackClick}
          className="flex items-center gap-2 text-gray-400 hover:text-brand transition-colors mb-12 group cursor-pointer outline-none border-none bg-transparent"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium uppercase tracking-widest font-sans">Zpět na hlavní stránku</span>
        </button>

        <h1 className="text-3xl md:text-5xl font-bold text-black mb-12 font-sans tracking-tight">
          Obchodní podmínky <br />
          <span className="text-gray-300">pro montáž ochranných PPF fólií</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-brand mt-1" />
              <div>
                <p className="font-bold text-black uppercase text-xs tracking-wider mb-1">Poskytovatel</p>
                <p className="text-gray-600 text-sm leading-relaxed font-sans">
                  US AUTO ULTIMATE s.r.o.<br />
                  U Měšťanského Pivovaru 1327/3<br />
                  17000, Praha 7
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 flex items-center justify-center text-brand font-bold text-xs">ID</div>
              <div>
                <p className="text-gray-600 text-sm font-sans">
                  IČO: 08932085<br />
                  DIČ: CZ08932085<br />
                  Datová schránka: 9vyrhez
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-brand mt-1" />
              <div>
                <p className="font-bold text-black uppercase text-xs tracking-wider mb-1">Platební údaje</p>
                <p className="text-gray-600 text-sm leading-relaxed font-sans">
                  Účet: 2801958015 / 2010<br />
                  IBAN: CZ9620100000002801958015<br />
                  BIC: FIOBCZPPXXX
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12 text-gray-600 font-sans leading-relaxed">
          <section>
            <p className="text-sm italic mb-8">
              Tyto obchodní podmínky upravují práva a povinnosti mezi společností US AUTO ULTIMATE s.r.o. (dále jen „poskytovatel“) a zákazníkem (dále jen „klient“) v souvislosti s instalací Ochranné fólie na vozidlo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">1. Předmět smlouvy</h2>
            <p className="mb-2">1.1. Poskytovatel provádí profesionální instalaci Ochranných fólií na karoserii vozidel.</p>
            <p>1.2. Před zahájením montáže je klient povinen sdělit všechny známé skutečnosti o předchozích opravách laku, poškození karoserie a jiných specifikách, které mohou ovlivnit kvalitu instalace.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">2. Záruka a garanční prohlídky</h2>
            <p className="mb-2">2.1. Na instalovanou fólii poskytuje poskytovatel záruku v délce v délce 24 měsíců pro spotřebitele a 12 měsíců pro právnickou osobu od data montáže.</p>
            <div className="bg-brand/5 p-6 rounded-2xl border border-brand/10 my-4">
              <p className="font-bold text-brand-dark mb-2">2.2. Pro uznání záruky je klient povinen absolvovat tyto garanční prohlídky:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Po 10 dnech od instalace – kontrola přilnutí fólie.</li>
                <li>Po 12 měsících od instalace – kontrola opotřebení a kvality.</li>
                <li>Po 24 měsících od instalace – finální servisní kontrola.</li>
              </ul>
            </div>
            <p>2.3. Pokud klient neabsolvuje garanční prohlídky, může dojít ke ztrátě nároku na uplatnění záruky.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">3. Pravidla pro mytí a údržbu vozidla</h2>
            <p className="mb-2">3.1. Prvních 10 dní po instalaci nesmí být vozidlo myto, aby došlo k dokonalému vytvrzení lepidla fólie.</p>
            <p className="mb-2">3.2. Při mytí vozidla nesmí být používán vysokotlaký čistič (wapka) v blízkosti hran fólie.</p>
            <p className="mb-2">3.3. Pokud klient používá vysokotlaký čistič, je nutné dodržet minimální vzdálenost 60 cm mezi tryskou a povrchem vozu.</p>
            <p className="mb-2">3.4. Nedoporučuje se používat automatické kartáčové myčky.</p>
            <p>3.5. K čištění doporučujeme pouze pH neutrální autokosmetiku a měkké mikrovláknové utěrky.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">4. Doporučení pro dlouhou životnost fólie</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Vyvarujte se parkování vozidla dlouhodobě na přímém slunci.</li>
              <li>Nepoužívejte agresivní chemii, rozpouštědla ani vosky obsahující abrazivní složky.</li>
              <li>V případě zjištění odlupování nebo bublin kontaktujte poskytovatele co nejdříve.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">5. Odpovědnost poskytovatele</h2>
            <p className="mb-2">5.1. Poskytovatel nenese odpovědnost za vady, které vzniknou nedodržením pokynů pro mytí, mechanickým poškozením (kamínky, vandalismus) nebo používáním nevhodné autokosmetiky.</p>
            <p>5.2. Poskytovatel neodpovídá za vady laku, které byly na vozidle již před instalací fólie.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">6. Reklamace</h2>
            <p className="mb-2">6.1. Klient je povinen vady nahlásit bez zbytečného odkladu po jejich zjištění.</p>
            <p>6.2. Reklamace bude řešena individuálně na základě technického posouzení.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">7. Závěrečná ustanovení</h2>
            <p className="mb-2">7.1. Tyto obchodní podmínky nabývají účinnosti dnem podpisu zakázkového listu.</p>
            <p>7.2. Klient podpisem zakázkového listu stvrzuje, že byl seznámen s podmínkami záruky, údržby a správného používání PPF fólie.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
