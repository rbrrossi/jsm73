
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SanMartinBio from './components/SanMartinBio';
import HistorySection from './components/HistorySection';
import AboutLodge from './components/AboutLodge';
import RestrictedArea from './components/RestrictedArea';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ['home', 'san-martin', 'historia', 'sobre', 'membros'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-200 selection:text-amber-900">
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <section id="san-martin">
          <SanMartinBio />
        </section>

        <section id="historia" className="bg-stone-100">
          <HistorySection />
        </section>

        <section id="sobre">
          <AboutLodge />
        </section>

        <section id="membros" className="bg-stone-900 text-stone-100 py-20">
          <RestrictedArea />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
