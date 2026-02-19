
import React from 'react';

const AboutLodge: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            {/* Using logo.jpg as requested */}
            <div className="p-4 bg-stone-100 rounded-3xl border-2 border-amber-200">
              <img 
                src="https://raw.githubusercontent.com/fabiomarques/logos/main/logo.jpg" 
                alt="Brasão da Loja José de San Martin" 
                className="w-full rounded-2xl shadow-inner bg-white p-4"
                onError={(e) => {
                  // Fallback if the logo fails to load
                  e.currentTarget.src = "https://picsum.photos/seed/masonic/600/600";
                }}
              />
            </div>
            <p className="mt-4 text-center text-stone-500 font-bold uppercase tracking-widest text-xs">
              Selo Oficial • San Martin 73
            </p>
          </div>

          <div className="lg:w-2/3 space-y-8">
            <h2 className="text-4xl font-bold masonic-title text-stone-900">Nossa Identidade</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-stone-50 rounded-xl border-l-4 border-amber-500">
                <h4 className="text-amber-700 font-bold uppercase tracking-wide mb-2">Visão</h4>
                <p className="text-stone-600">Ser referência em maçonaria operativa e especulativa na região sul, promovendo a evolução espiritual e intelectual de nossos membros.</p>
              </div>
              <div className="p-6 bg-stone-50 rounded-xl border-l-4 border-amber-500">
                <h4 className="text-amber-700 font-bold uppercase tracking-wide mb-2">Missão</h4>
                <p className="text-stone-600">Formar homens que possam contribuir ativamente para uma sociedade mais justa e fraternal, através do autoconhecimento e da prática da virtude.</p>
              </div>
              <div className="p-6 bg-stone-50 rounded-xl border-l-4 border-amber-500">
                <h4 className="text-amber-700 font-bold uppercase tracking-wide mb-2">Valores</h4>
                <p className="text-stone-600">Honra, Dever, Tolerância e Fraternidade Universal. Respeito às leis e ao Grande Arquiteto Do Universo.</p>
              </div>
              <div className="p-6 bg-stone-50 rounded-xl border-l-4 border-amber-500">
                <h4 className="text-amber-700 font-bold uppercase tracking-wide mb-2">Ação Social</h4>
                <p className="text-stone-600">Mantemos diversos projetos de auxílio à comunidade de Uruguaiana, focando em educação e assistência aos mais necessitados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLodge;
