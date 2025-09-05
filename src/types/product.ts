
export interface Product {
  id: string;
  category: string;
  name: {
    en: string;
    hu: string;
    de: string;
  };
  desc: {
    en: string;
    hu: string;
    de: string;
  };
  images: string[];
  badges: string[];
  specs: {
    volume: string;
    size?: string; // Made optional
    material: string;
    pallet: string;
  };
  colors?: Array<{
    code: string;
    color: string;
  }>;
}
