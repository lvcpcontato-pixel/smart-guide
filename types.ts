
export type Category = 'Tudo' | 'Restaurantes' | 'Lanches' | 'Cafés & Doces' | 'Happy Hour' | 'Wellness' | 'Mercados' | 'Serviços';

export interface Location {
  id: string;
  name: string;
  category: Category;
  insight: string;
  walkingTime: string;
  priceRange: '$' | '$$' | '$$$';
  mapLink: string;
  isEconomic: boolean;
}
