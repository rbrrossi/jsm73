
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'san-martin', label: 'José de San Martin' },
    { id: 'historia', label: 'História' },
    { id: 'sobre', label: 'A Loja' },
    { id: 'membros', label: 'Área do Obreiro' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-stone-200 overflow-hidden">
              <img src="/jsm73/img/logo.png" alt="Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div>
              <h1 className="text-stone-800 text-sm font-bold masonic-title leading-tight">JOSÉ DE SAN MARTIN</h1>
              <p className="text-stone-500 text-xs tracking-widest font-semibold uppercase">Nº 73 • Uruguaiana</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-semibold tracking-wide transition-colors uppercase ${
                  activeSection === item.id 
                    ? 'text-amber-600 border-b-2 border-amber-600' 
                    : 'text-stone-600 hover:text-amber-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-stone-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
