import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(term.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(term.toLowerCase()))
    );
    
    setFilteredProducts(filtered);
  };

  return (
    <div className="pb-20">
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search products..."
            className="w-full bg-gray-800 bg-opacity-50 text-white py-3 px-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <Search className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
        </div>
      </div>
      
      {filteredProducts.length > 0 ? (
        <div className="space-y-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-400">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;