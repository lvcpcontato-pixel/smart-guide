
import React from 'react';
import { Location } from './types';

export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  accent: '#31D889',
};

// Merged data from PDF and Reference Screenshot to ensure the "Economic" filter has data
export const LOCATIONS: Location[] = [
  // From PDF
  {
    id: '1',
    name: 'Bachir Lebanese Ice Cream',
    category: 'Cafés & Doces',
    insight: 'Sorvetes artesanais libaneses, ótimos pra um doce rápido depois do almoço ou fim de expediente.',
    walkingTime: '6 min',
    priceRange: '$$',
    mapLink: 'https://maps.app.goo.gl/nTg77D62dCoKs87P6',
    isEconomic: false,
  },
  {
    id: '2',
    name: 'Z Deli',
    category: 'Lanches',
    insight: 'Hambúrguer clássico e confiável, ideal pra almoço rápido ou sexta mais relax.',
    walkingTime: '8 min',
    priceRange: '$$$',
    mapLink: 'https://maps.app.goo.gl/YGYFpQTcuMTPKUNW8',
    isEconomic: false,
  },
  {
    id: '3',
    name: 'Le Botteghe di Leonardo',
    category: 'Cafés & Doces',
    insight: 'Cantina italiana charmosa, boa pra almoço tranquilo ou café reforçado.',
    walkingTime: '7 min',
    priceRange: '$$',
    mapLink: 'https://maps.app.goo.gl/v1TVLxCncDUp24wf8',
    isEconomic: false,
  },
  {
    id: '4',
    name: 'A Fornada Padaria Jardins',
    category: 'Restaurantes',
    insight: 'Padaria completa com ótimas opções de almoço, café e lanches.',
    walkingTime: '4 min',
    priceRange: '$$',
    mapLink: 'https://maps.app.goo.gl/HvUhqUi57uSeyhEH7',
    isEconomic: false,
  },
  {
    id: '5',
    name: 'Violeta',
    category: 'Restaurantes',
    insight: 'Restaurante casual contemporâneo, bom pra almoços mais longos ou reuniões informais.',
    walkingTime: '9 min',
    priceRange: '$$$',
    mapLink: 'https://maps.app.goo.gl/3Kkn7pwkEfxXKAnk7',
    isEconomic: false,
  },
  {
    id: '6',
    name: 'Tea Connection',
    category: 'Cafés & Doces',
    insight: 'Opções leves, chás e pratos vegetarianos — vibe calma e aconchegante.',
    walkingTime: '6 min',
    priceRange: '$$',
    mapLink: 'https://maps.app.goo.gl/z7kWFe7neXb177L77',
    isEconomic: false,
  },
  {
    id: '7',
    name: 'Casa Santa Luzia',
    category: 'Mercados',
    insight: 'Mercado premium com pratos prontos, cafés e opções rápidas pra levar.',
    walkingTime: '10 min',
    priceRange: '$$$',
    mapLink: 'https://maps.app.goo.gl/BBzeF526yGdykoHZ6',
    isEconomic: false,
  },
  {
    id: '8',
    name: 'Pão de Açúcar',
    category: 'Mercados',
    insight: 'Mercado prático pro dia a dia, lanches rápidos e compras de última hora.',
    walkingTime: '2 min',
    priceRange: '$$',
    mapLink: 'https://maps.app.goo.gl/ruN6vZnwvuDtVLMf6',
    isEconomic: false,
  },
  // From UI Reference Screenshot (Economic focus)
  {
    id: '9',
    name: 'Palma de Ouro',
    category: 'Restaurantes',
    insight: 'Aquele PF de padaria que conforta a alma e o bolso. Clássico da Tietê.',
    walkingTime: '5 min',
    priceRange: '$',
    mapLink: 'https://maps.app.goo.gl/HvUhqUi57uSeyhEH7', // Placeholder link based on others
    isEconomic: true,
  },
  {
    id: '10',
    name: 'Violeta Bar e Restaurante',
    category: 'Restaurantes',
    insight: "O famoso 'PF do Violeta'. Farto, honesto e com aquele tempero de casa de mãe.",
    walkingTime: '15 min',
    priceRange: '$',
    mapLink: 'https://maps.app.goo.gl/3Kkn7pwkEfxXKAnk7', // Shared with higher end Violeta
    isEconomic: true,
  },
  {
    id: '11',
    name: 'Rei do Mate',
    category: 'Lanches',
    insight: 'Aquele pão de queijo com copão de chá que salva qualquer tarde corrida entre calls.',
    walkingTime: '6 min',
    priceRange: '$',
    mapLink: 'https://maps.app.goo.gl/nTg77D62dCoKs87P6', // Placeholder
    isEconomic: true,
  },
  {
    id: '12',
    name: 'OXXO',
    category: 'Mercados',
    insight: 'Sempre aberto, sempre gelado. Bom para bebidas e snacks de última hora.',
    walkingTime: '5 min',
    priceRange: '$',
    mapLink: 'https://maps.app.goo.gl/ruN6vZnwvuDtVLMf6', // Placeholder
    isEconomic: true,
  }
];

export const CATEGORIES: { label: string; value: string; icon: string }[] = [
  { label: 'Tudo', value: 'Tudo', icon: '' },
  { label: 'Restaurantes', value: 'Restaurantes', icon: '🍽️' },
  { label: 'Lanches', value: 'Lanches', icon: '🍔' },
  { label: 'Cafés & Doces', value: 'Cafés & Doces', icon: '☕' },
  { label: 'Happy Hour', value: 'Happy Hour', icon: '🍻' },
  { label: 'Wellness', value: 'Wellness', icon: '🧘' },
  { label: 'Mercados', value: 'Mercados', icon: '🛒' },
  { label: 'Serviços', value: 'Serviços', icon: '🛠️' },
];
