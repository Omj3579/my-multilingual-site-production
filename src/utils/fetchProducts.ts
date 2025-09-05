import fs from 'fs';
import path from 'path';

// Types for better safety
export interface Product {
  id: string;
  name: Record<string, string>;
  images?: string[];
  desc?: Record<string, string>;
  longDesc?: Record<string, string>;
  keyFeatures?: Record<string, string[]>;
  [key: string]: any;
}

export interface CategoryDescriptions {
  [categoryId: string]: {
    labels?: Record<string, string>;
    content?: Record<string, { description: string }>;
    image?: string;
  };
}

// Fetch all products for a category
export const fetchProductsByCategory = (categoryId: string): Product[] => {
  try {
    const filePath = path.join(
      process.cwd(),
      'public/products/categories/jsonfiles/transformed',
      `${categoryId}.json`
    );
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading products for category "${categoryId}":`, error);
    return [];
  }
};

// Fetch a single product by ID
export const fetchProductById = (categoryId: string, productId: string): Product | null => {
  const products = fetchProductsByCategory(categoryId);
  return products.find((product) => product.id === productId) || null;
};

// Fetch all category descriptions (multilingual)
export const fetchCategoryDescriptions = (): { categories?: CategoryDescriptions; productsPage?: any } => {
  try {
    const filePath = path.join(
      process.cwd(),
      'public/products/categories',
      'category_descriptions_multilingual.json'
    );
    if (!fs.existsSync(filePath)) return {};
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading category descriptions:', error);
    return {};
  }
};