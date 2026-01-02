
import React from 'react';
import { Location } from '../types';
import { COLORS } from '../constants';

interface LocationCardProps {
  location: Location;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <div className="bg-[#121212] border border-[#222222] rounded-2xl p-6 flex flex-col justify-between hover:border-[#31D889]/50 transition-all duration-300 group">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-[#31D889] transition-colors">
            {location.name}
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-widest border border-[#31D889] text-[#31D889] px-2 py-1 rounded">
            {location.category.replace(' & ', ' & ')}
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-sm mb-4 text-gray-400 font-medium">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{location.walkingTime}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <span className={location.priceRange.includes('$') ? 'text-[#31D889]' : 'text-gray-600'}>$</span>
            <span className={location.priceRange.length >= 2 ? 'text-[#31D889]' : 'text-gray-600'}>$</span>
            <span className={location.priceRange.length >= 3 ? 'text-[#31D889]' : 'text-gray-600'}>$</span>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {location.insight}
        </p>
      </div>

      <div className="pt-4 border-t border-[#222222]">
        <a 
          href={location.mapLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#31D889] transition-colors"
        >
          Abrir no Mapa
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default LocationCard;
