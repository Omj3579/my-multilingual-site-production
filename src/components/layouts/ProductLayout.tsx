import React from 'react';

interface ProductLayoutProps {
  children: React.ReactNode;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content starts from top - header will overlay the first section */}
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default ProductLayout;
