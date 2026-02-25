
import React from 'react';

const PainSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 font-oxanium">
          Stačí jeden škrábanec.
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed font-light">
          Parkoviště, kamínky z dálnice, myčky.<br />
          Lak nového auta nemá druhou šanci.
        </p>
      </div>
    </section>
  );
};

export default PainSection;
