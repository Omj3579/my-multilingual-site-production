import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid3X3, List, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Product } from '@/utils/fetchProducts';

interface ProductFiltersProps {
  products: Product[];
  onFilteredProducts: (filtered: Product[]) => void;
  categories?: string[];
}

interface FilterState {
  search: string;
  material: string;
  priceRange: string;
  sortBy: 'name' | 'newest' | 'popular';
  sortOrder: 'asc' | 'desc';
  viewMode: 'grid' | 'list';
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ 
  products, 
  onFilteredProducts,
  categories = []
}) => {
  const { language } = useLanguage();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    material: '',
    priceRange: '',
    sortBy: 'name',
    sortOrder: 'asc',
    viewMode: 'grid'
  });

  // Get unique materials from products
  const uniqueMaterials = Array.from(
    new Set(products.map(p => p.specs?.material || p.material).filter(Boolean))
  );

  useEffect(() => {
    let filtered = [...products];

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(product => 
        (product.name?.[language] || product.name?.en || '').toLowerCase().includes(searchTerm) ||
        (product.desc?.[language] || product.desc?.en || '').toLowerCase().includes(searchTerm) ||
        product.id.toLowerCase().includes(searchTerm)
      );
    }

    // Material filter
    if (filters.material) {
      filtered = filtered.filter(product => 
        (product.specs?.material || product.material) === filters.material
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (filters.sortBy) {
        case 'name':
          aValue = a.name?.[language] || a.name?.en || '';
          bValue = b.name?.[language] || b.name?.en || '';
          break;
        case 'newest':
          // Assuming newer products have higher IDs or use a timestamp
          aValue = a.id;
          bValue = b.id;
          break;
        case 'popular':
          // Could be based on view count, sales, etc.
          aValue = a.popularity || 0;
          bValue = b.popularity || 0;
          break;
        default:
          aValue = a.name?.[language] || a.name?.en || '';
          bValue = b.name?.[language] || b.name?.en || '';
      }

      const comparison = aValue.localeCompare ? 
        aValue.localeCompare(bValue) : 
        aValue - bValue;
      
      return filters.sortOrder === 'asc' ? comparison : -comparison;
    });

    onFilteredProducts(filtered);
  }, [filters, products, language, onFilteredProducts]);
  const handleFilterChange = (key: keyof FilterState, value: string | FilterState[keyof FilterState]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      material: '',
      priceRange: '',
      sortBy: 'name',
      sortOrder: 'asc',
      viewMode: 'grid'
    });
  };

  const hasActiveFilters = filters.search || filters.material || filters.priceRange;
  return (
    <div className="border-b border-gray-200 sticky top-24 z-40 backdrop-blur-md bg-white/95">
      <div className="container mx-auto px-4 py-4">
        {/* Main Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search products...' : 'Termékek keresése...'}
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
              />              {filters.search && (
                <button
                  onClick={() => handleFilterChange('search', '')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={language === 'en' ? 'Clear search' : 'Keresés törlése'}
                  title={language === 'en' ? 'Clear search' : 'Keresés törlése'}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </motion.div>
          </div>

          {/* Filter Controls */}
          <div className="flex items-center gap-3">
            
            {/* Advanced Filters Toggle */}
            <motion.button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 ${
                isFilterOpen || hasActiveFilters
                  ? 'bg-blue-50 border-blue-200 text-blue-700'
                  : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Filter className="h-4 w-4" />
              {language === 'en' ? 'Filters' : 'Szűrők'}
              {hasActiveFilters && (
                <span className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {[filters.search, filters.material, filters.priceRange].filter(Boolean).length}
                </span>
              )}
            </motion.button>            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={`${filters.sortBy}-${filters.sortOrder}`}
                onChange={(e) => {
                  const [sortBy, sortOrder] = e.target.value.split('-');
                  handleFilterChange('sortBy', sortBy);
                  handleFilterChange('sortOrder', sortOrder);
                }}
                className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                aria-label={language === 'en' ? 'Sort products' : 'Termékek rendezése'}
                title={language === 'en' ? 'Sort products' : 'Termékek rendezése'}
              >
                <option value="name-asc">{language === 'en' ? 'Name A-Z' : 'Név A-Z'}</option>
                <option value="name-desc">{language === 'en' ? 'Name Z-A' : 'Név Z-A'}</option>
                <option value="newest-desc">{language === 'en' ? 'Newest First' : 'Legújabb'}</option>
                <option value="popular-desc">{language === 'en' ? 'Most Popular' : 'Legnépszerűbb'}</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>            {/* View Mode Toggle */}
            <div className="flex border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => handleFilterChange('viewMode', 'grid')}
                className={`p-2.5 transition-all duration-200 ${
                  filters.viewMode === 'grid'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
                aria-label={language === 'en' ? 'Grid view' : 'Rács nézet'}
                title={language === 'en' ? 'Grid view' : 'Rács nézet'}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleFilterChange('viewMode', 'list')}
                className={`p-2.5 transition-all duration-200 ${
                  filters.viewMode === 'list'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
                aria-label={language === 'en' ? 'List view' : 'Lista nézet'}
                title={language === 'en' ? 'List view' : 'Lista nézet'}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-4 pt-4 border-t border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Material Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Material' : 'Anyag'}
                  </label>                  <select
                    value={filters.material}
                    onChange={(e) => handleFilterChange('material', e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    aria-label={language === 'en' ? 'Filter by material' : 'Szűrés anyag szerint'}
                    title={language === 'en' ? 'Filter by material' : 'Szűrés anyag szerint'}
                  >
                    <option value="">{language === 'en' ? 'All Materials' : 'Minden anyag'}</option>
                    {uniqueMaterials.map(material => (
                      <option key={material} value={material}>{material}</option>
                    ))}
                  </select>
                </div>

                {/* Size/Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Category' : 'Kategória'}
                  </label>                  <select
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    aria-label={language === 'en' ? 'Filter by category' : 'Szűrés kategória szerint'}
                    title={language === 'en' ? 'Filter by category' : 'Szűrés kategória szerint'}
                  >
                    <option value="">{language === 'en' ? 'All Categories' : 'Minden kategória'}</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  {hasActiveFilters && (
                    <motion.button
                      onClick={clearFilters}
                      className="w-full bg-red-50 text-red-700 border border-red-200 rounded-xl px-4 py-2 hover:bg-red-100 transition-all duration-200 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <X className="h-4 w-4" />
                      {language === 'en' ? 'Clear Filters' : 'Szűrők törlése'}
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-sm text-gray-600"
        >
          {language === 'en' 
            ? `Showing ${products.length} products` 
            : `${products.length} termék megjelenítése`}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductFilters;
