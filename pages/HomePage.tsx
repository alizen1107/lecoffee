import React from 'react';
import ProductSection from '../components/ProductSection';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  const coffeeProducts = products.filter(product => product.category === 'coffee');
  const cookieProducts = products.filter(product => product.category === 'cookie');

  return (
    <div className="pb-20">
      <ProductSection type="coffee" products={coffeeProducts} />
      <div className="my-8 flex justify-center">
        <div className="w-16 h-0.5 bg-gray-700"></div>
      </div>
      <ProductSection type="cookie" products={cookieProducts} />
    </div>
  );
};

export default HomePage;