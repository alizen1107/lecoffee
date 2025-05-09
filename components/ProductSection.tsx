import React from 'react';
import Logo from './Logo';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductSectionProps {
  type: 'coffee' | 'cookie';
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ type, products }) => {
  return (
    <div className="mb-8">
      <Logo type={type} />
      <div className="mt-4 space-y-2">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;