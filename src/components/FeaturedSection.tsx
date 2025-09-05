
import React from 'react';
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturedSection = () => {
  const { language } = useLanguage();
  
  const featuredProducts = [
    {
      id: 1,
      name: language === 'en' ? 'Industrial Containers' : 'Ipari konténerek',
      description: language === 'en' 
        ? 'High-durability plastic containers for industrial use' 
        : 'Nagy teherbírású műanyag konténerek ipari felhasználásra',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: language === 'en' ? 'Custom Packaging' : 'Egyedi csomagolás',
      description: language === 'en' 
        ? 'Tailored packaging solutions for various industries' 
        : 'Egyedi csomagolási megoldások különböző iparágak számára',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: language === 'en' ? 'Precision Parts' : 'Precíziós alkatrészek',
      description: language === 'en' 
        ? 'Precisely engineered plastic components for manufacturing' 
        : 'Precízen tervezett műanyag alkatrészek gyártáshoz',
      image: '/placeholder.svg'
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">
            {language === 'en' ? 'Featured Products' : 'Kiemelt termékek'}
          </h2>
          <Link 
            href="/products" 
            className="mt-4 md:mt-0 text-blue-600 hover:text-blue-800 font-medium"
          >
            {language === 'en' ? 'View all products' : 'Összes termék megtekintése'} →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-32 w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link 
                  href={`/products/${product.id}`} 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {language === 'en' ? 'Learn more' : 'Tudj meg többet'} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
