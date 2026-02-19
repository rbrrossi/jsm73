
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 py-16 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://raw.githubusercontent.com/fabiomarques/logos/main/logo6.jpg" 
                alt="Logo Dark" 
                className="w-16 h-16 rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <h2 className="text-xl font-bold masonic-title text-stone-800 leading-tight">José de San Martin Nº 73</h2>
                <p className="text-stone-500 text-xs font-bold tracking-widest uppercase">A.·.G.·.D.·.G.·.A.·.D.·.U.·.</p>
              </div>
            </div>
            <p className="text-stone-600 elegant-text leading-relaxed max-w-md">
              "Trabalhando pelo aperfeiçoamento moral da humanidade, sob a égide da Fraternidade Universal e dos preceitos de liberdade de consciência."
            </p>
          </div>

          <div>
            <h4 className="text-stone-900 font-bold uppercase tracking-widest text-sm mb-6">Contato</h4>
            <ul className="space-y-4 text-stone-600">
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Uruguaiana, RS - Brasil
              </li>
              <li className="flex items-center gap-3 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@sanmartin73.org.br
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Trabalhos às Terças-feiras, 20:00h
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <img src="https://raw.githubusercontent.com/fabiomarques/logos/main/logogl.png" alt="GLRS" className="h-24 object-contain mb-4 grayscale" />
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-[0.3em] text-center md:text-right">
              Grande Loja do Estado do <br/>Rio Grande do Sul
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center text-stone-400 text-[10px] uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} Loja Maçônica José de San Martin Nº 73. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">Desenvolvido com Honra e Fraternidade</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
