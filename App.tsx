
import React, { useState, useMemo } from 'react';
import { LOCATIONS, CATEGORIES, COLORS } from './constants';
import { Category } from './types';
import LocationCard from './components/LocationCard';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Tudo');
  const [showEconomicOnly, setShowEconomicOnly] = useState(false);

  const filteredLocations = useMemo(() => {
    return LOCATIONS.filter(loc => {
      const categoryMatch = selectedCategory === 'Tudo' || loc.category === selectedCategory;
      const economicMatch = !showEconomicOnly || loc.isEconomic;
      return categoryMatch && economicMatch;
    });
  }, [selectedCategory, showEconomicOnly]);

  return (
    <div className="min-h-screen pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="py-12 md:py-20 border-b border-[#222222] mb-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Boas-vindas ao novo escritório da <br />
          <span style={{ color: COLORS.accent }}>Smart.</span>
        </h1>
        <div className="max-w-2xl">
          <p className="text-gray-400 text-lg md:text-xl font-medium mb-2">
            Rua Oscar Freire, 379. O coração pulsante dos Jardins. 
          </p>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Preparamos um guia de sobrevivência para você não se perder (muito) e achar aquele PF honesto 
            ou o café gourmet para impressionar o cliente. Explore seu novo habitat natural.
          </p>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-md pt-4 pb-6 border-b border-[#222222] mb-10">
        <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value as Category)}
              className={`
                whitespace-nowrap flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold border transition-all duration-300
                ${selectedCategory === cat.value 
                  ? 'bg-[#31D889] text-black border-[#31D889]' 
                  : 'bg-[#121212] text-white border-[#222222] hover:border-[#31D889]/50'}
              `}
            >
              {cat.icon && <span>{cat.icon}</span>}
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={showEconomicOnly}
              onChange={() => setShowEconomicOnly(!showEconomicOnly)}
            />
            <div className="w-11 h-6 bg-[#222222] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#31D889]"></div>
            <span className="ms-3 text-sm font-semibold text-gray-300">
              Mostrar apenas opções econômicas (até R$ 30)
            </span>
          </label>
        </div>
      </div>

      {/* Grid Content */}
      {filteredLocations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="text-5xl mb-4">🤔</div>
          <h3 className="text-xl font-bold text-white mb-2">Nada por aqui (ainda).</h3>
          <p className="text-gray-500 max-w-sm">
            Nenhum local dessa categoria se encaixa no filtro de preço selecionado. 
            Talvez hoje seja o dia de gastar um pouco mais?
          </p>
          <button 
            onClick={() => {
              setSelectedCategory('Tudo');
              setShowEconomicOnly(false);
            }}
            className="mt-6 px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-[#31D889] transition-colors"
          >
            Limpar Filtros
          </button>
        </div>
      )}

      {/* Footer Info */}
      <footer className="mt-20 pt-10 border-t border-[#222222] text-center text-gray-600 text-sm italic">
        <p>Curadoria feita com ❤️ pela equipe da Smart. Preços sujeitos à inflação e ao humor do garçom.</p>
      </footer>
    </div>
  );
};

export default App;
