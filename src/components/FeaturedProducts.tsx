
import React from 'react';
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const FeaturedProducts = () => {
  // Sample product data - replace with actual products later
  const products = [
    {
      id: 1,
      name: "Műanyag alkatrészek",
      description: "Ipari felhasználásra szánt precíziós műanyag alkatrészek.",
      image: "placeholder.svg"
    },
    {
      id: 2,
      name: "Háztartási termékek",
      description: "Különböző háztartási felhasználásra tervezett műanyag termékek.",
      image: "placeholder.svg"
    },
    {
      id: 3,
      name: "Autóipari komponensek",
      description: "Autóipar számára fejlesztett speciális műanyag alkatrészek.",
      image: "placeholder.svg"
    },
    {
      id: 4,
      name: "Egyedi megrendelések",
      description: "Teljesen egyedi igényekre szabott műanyag termékek gyártása.",
      image: "placeholder.svg"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-blue-800">Termékeink</h2>
        <p className="text-gray-600 text-center mb-8">Fedezze fel minőségi műanyag termékeinket</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </CardContent>
              <CardFooter>
                <Link 
                  href={`/products/${product.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-block w-full text-center py-2 border-t border-gray-100"
                >
                  Részletek
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            href="/products" 
            className="bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block"
          >
            Összes termék megtekintése
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
