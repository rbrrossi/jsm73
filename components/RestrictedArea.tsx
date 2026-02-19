
import React, { useState } from 'react';

const RestrictedArea: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="mb-12">
        <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-600/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold masonic-title mb-4">Área do Obreiro</h2>
        <p className="text-stone-400 text-lg elegant-text max-w-2xl mx-auto">
          Acesso exclusivo para os Irmãos da Loja José de San Martin Nº 73. Aqui você encontrará atas, agenda de trabalhos, tesouraria e material de estudo.
        </p>
      </div>

      {!showLogin ? (
        <button 
          onClick={() => setShowLogin(true)}
          className="px-10 py-4 bg-transparent border-2 border-amber-600 text-amber-600 font-bold rounded-full hover:bg-amber-600 hover:text-white transition-all duration-300 uppercase tracking-[0.2em] text-sm"
        >
          Entrar no Painel Restrito
        </button>
      ) : (
        <div className="bg-stone-800 p-10 rounded-3xl shadow-2xl max-w-md mx-auto border border-stone-700">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="text-left">
              <label className="block text-stone-400 text-xs font-bold uppercase tracking-widest mb-2">CIM / E-mail</label>
              <input 
                type="text" 
                className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:border-amber-500 transition"
                placeholder="Seu identificador"
              />
            </div>
            <div className="text-left">
              <label className="block text-stone-400 text-xs font-bold uppercase tracking-widest mb-2">Palavra de Passe</label>
              <input 
                type="password" 
                className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:border-amber-500 transition"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full py-4 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition uppercase tracking-widest">
              Autenticar
            </button>
            <button 
              type="button"
              onClick={() => setShowLogin(false)}
              className="text-stone-500 text-xs uppercase tracking-widest hover:text-stone-300 transition"
            >
              Voltar
            </button>
          </form>
        </div>
      )}

      <div className="mt-16 flex justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <img src="https://raw.githubusercontent.com/fabiomarques/logos/main/logogl.png" alt="Grande Loja do RS" className="h-20 object-contain" />
        <div className="text-left border-l border-stone-700 pl-4">
          <p className="text-xs font-bold text-stone-300 uppercase tracking-widest">Federada à</p>
          <p className="text-sm font-bold text-stone-500 leading-tight">Grande Loja do Estado <br/>do Rio Grande do Sul</p>
        </div>
      </div>
    </div>
  );
};

export default RestrictedArea;
