
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-900 pt-20">
      {/* Background with parallax-like effect */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop)' }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/80 to-stone-900" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="flex justify-center mb-8">
          {/* Main Logo from User Files - logo.jpg */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-amber-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="/jsm73/img/logo.png" 
              alt="Logo José de San Martin Nº 73" 
              className="relative w-48 h-48 md:w-64 md:h-64 object-contain rounded-full border-4 border-amber-500 shadow-2xl bg-white p-2"
              onError={(e) => {
                // Fallback UI if local path fails
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML += '<div class="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-amber-500 flex items-center justify-center text-stone-100 font-bold text-4xl masonic-title bg-stone-800">JSM 73</div>';
              }}
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold masonic-title mb-4 tracking-tighter leading-tight">
          Benemérita, Augusta e Respeitável <br/>
          <span className="text-amber-500">Loja Simbólica</span>
        </h1>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold masonic-title mb-8 tracking-widest text-stone-100">
          José de San Martin <span className="text-amber-600">Nº 73</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
          <div className="text-stone-400 font-semibold tracking-[0.2em] uppercase text-sm border-r border-stone-700 pr-6 hidden md:block">
            Jurisdicionada à Grande Loja do RS
          </div>
          <div className="text-stone-400 font-semibold tracking-[0.2em] uppercase text-sm border-r border-stone-700 pr-6 hidden md:block">
            Fundada em 19 de Setembro de 1978
          </div>
          <div className="text-stone-400 font-semibold tracking-[0.2em] uppercase text-sm">
            Uruguaiana - RS
          </div>
        </div>

        <div className="mt-16 animate-bounce">
          <button 
            onClick={() => document.getElementById('san-martin')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-3 rounded-full border border-white/20 hover:border-amber-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
