import React from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: Record<string, string>;
  images: string[];
  description: Record<string, string>;
}

// In Next.js, you should fetch or receive results via props or query
interface SearchResultsPageProps {
  results?: Product[];
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ results = [] }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {results.length > 0 ? 'Search Results' : 'No Results Found'}
      </h1>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="block border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={product.images[0]}
                alt={product.name['en']}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-800">
                  {product.name['en']}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {product.description['en']}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">
          Sorry, we couldn&#39;t find any products matching your search.
        </p>
      )}
    </div>
  );
};

export default SearchResultsPage;
