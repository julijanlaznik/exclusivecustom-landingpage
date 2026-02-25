
import React from 'react';

const UnderstandingSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 tracking-tight font-oxanium">
          Vybrat správnou ochranu není jednoduché.
        </h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            Na trhu je spousta řešení, slibů a kompromisů.
          </p>
          <p className="text-lg text-gray-900 font-medium leading-relaxed">
            My chráníme laky aut, na kterých skutečně záleží.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingSection;
