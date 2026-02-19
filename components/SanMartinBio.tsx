
import React from 'react';

const SanMartinBio: React.FC = () => {
  // Using the user-requested image, but requesting a larger thumbnail size (800px) from Wikimedia for better quality on large screens.
  const sanMartinImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Jos%C3%A9_de_San_Mart%C3%ADn_%28retrato%2C_c.1828%29.jpg/800px-Jos%C3%A9_de_San_Mart%C3%ADn_%28retrato%2C_c.1828%29.jpg";

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-50 rounded-full mix-blend-multiply opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-stone-100 rounded-full mix-blend-multiply opacity-70"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-stone-200">
              <img 
                src={sanMartinImageUrl} 
                alt="José de San Martin - O Libertador" 
                className="w-full h-[600px] object-cover hover:scale-105 transition duration-700"
                onError={(e) => {
                  // Fallback to a secondary historical image if the first fails
                  e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/1/1b/Jos%C3%A9_de_San_Mart%C3%ADn_retrato.jpg";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/80 to-transparent p-8">
                <p className="text-white masonic-title text-xl italic">"Serás o que deves ser, ou não serás nada."</p>
                <p className="text-amber-400 font-bold uppercase tracking-widest text-xs mt-2">— José de San Martin</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">Patrono da Loja</h3>
              <h2 className="text-4xl md:text-5xl font-bold masonic-title text-stone-900 leading-tight">
                José Francisco de San Martín y Matorras
              </h2>
            </div>
            
            <p className="text-lg text-stone-600 elegant-text leading-relaxed">
              Nascido em Yapeyú em 1778, San Martin foi um dos maiores estrategistas militares do mundo e o principal libertador do Cone Sul da América. Sua travessia dos Andes é comparada às conquistas de Aníbal e Napoleão.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-amber-100 p-2 rounded-lg mt-1 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 uppercase tracking-wide">O Irmão San Martin</h4>
                  <p className="text-stone-600">Iniciado na Logia Integridad em Cádiz, foi o fundador da Logia Lautaro, peça fundamental na articulação pela independência americana baseada nos ideais de Liberdade, Igualdade e Fraternidade.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-amber-100 p-2 rounded-lg mt-1 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 uppercase tracking-wide">Legado Ético</h4>
                  <p className="text-stone-600">Conhecido por sua humildade e retidão, San Martin renunciou a cargos de poder para garantir a soberania dos povos, personificando o desbaste da pedra bruta em busca da perfeição moral.</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button className="px-8 py-3 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-700 transition shadow-lg hover:shadow-amber-500/20 uppercase tracking-widest text-sm">
                Conheça sua biografia completa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SanMartinBio;
