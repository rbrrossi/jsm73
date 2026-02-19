
import React from 'react';

const HistorySection: React.FC = () => {
  const milestones = [
    { year: '1978', event: 'Fundação da Loja em Uruguaiana, no extremo oeste gaúcho.' },
    { year: '1985', event: 'Obtenção do título de Benemérita pelos serviços prestados à comunidade.' },
    { year: '2003', event: 'Inauguração da nova ala do Templo, comemorando 25 anos de luz.' },
    { year: '2023', event: 'Comemoração dos 45 anos de trabalhos ininterruptos em favor da humanidade.' },
  ];

  return (
    <section className="py-24 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold masonic-title mb-6">Nossa Trajetória de Luz</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((m, i) => (
            <div key={i} className="relative p-8 border border-stone-800 rounded-xl hover:border-amber-500 transition group">
              <span className="text-6xl font-bold text-stone-800 group-hover:text-stone-700 transition absolute top-4 right-4 z-0">
                {m.year}
              </span>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-amber-500 mb-4 tracking-widest">{m.year}</h3>
                <p className="text-stone-400 leading-relaxed italic">"{m.event}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h3 className="text-3xl masonic-title mb-6 text-stone-100">Raízes na Fronteira Oeste</h3>
            <p className="text-stone-400 mb-6 leading-relaxed">
              A Loja José de San Martin Nº 73 nasceu da necessidade de unir irmãos na fronteira entre Brasil e Argentina, inspirada pelo General que uniu os povos da América. Desde sua fundação em 19-09-78, tem sido um farol de moralidade e progresso social em Uruguaiana.
            </p>
            <p className="text-stone-400 leading-relaxed">
              Nossa história é escrita por homens livres e de bons costumes que dedicam seu tempo ao estudo das artes liberais, à prática da caridade e ao fortalecimento dos laços fraternais que nos unem como uma verdadeira família universal.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" className="rounded-lg shadow-xl h-48 w-full object-cover" alt="Simbolismo" />
            <img src="https://images.unsplash.com/photo-1596443686812-2f45229eebc3?q=80&w=1000&auto=format&fit=crop" className="rounded-lg shadow-xl h-48 w-full object-cover mt-8" alt="Templo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
