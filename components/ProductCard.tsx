import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, removeFromCart, items } = useCart();
  
  const quantity = items.find(item => item.product.id === product.id)?.quantity || 0;

  const cardVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: 'rgba(234, 179, 8, 0.3)',
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 rounded-xl p-4 mb-6"
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="flex items-center justify-between">
        {product.category === 'coffee' ? (
          <>
            <div className="w-1/2">
              <motion.img 
                src={product.image} 
                alt={product.name} 
                className="w-32 h-32 object-cover rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="w-1/2 pl-4">
              <h3 className="text-white text-xl font-semibold mb-2">{product.name}</h3>
              {product.description && (
                <p className="text-gray-400 text-sm mb-2">{product.description}</p>
              )}
              <div className="flex justify-between items-center mt-4">
                <p className="text-white font-bold">{product.price} AZN</p>
                <div className="flex items-center space-x-2">
                  {quantity > 0 && (
                    <motion.button
                      className="w-8 h-8 rounded-full bg-red-500 bg-opacity-20 flex items-center justify-center"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <Minus className="w-5 h-5 text-red-500" />
                    </motion.button>
                  )}
                  <motion.button
                    className="w-8 h-8 rounded-full bg-yellow-500 bg-opacity-20 flex items-center justify-center"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => addToCart(product)}
                  >
                    <Plus className="w-5 h-5 text-yellow-500" />
                  </motion.button>
                  <AnimatePresence>
                    {quantity > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-gray-900"
                      >
                        {quantity}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-1/4">
              <motion.img 
                src={product.image} 
                alt={product.name} 
                className="w-24 h-24 object-cover rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="w-3/4 pl-4">
              <h3 className="text-white text-xl font-semibold mb-2">{product.name}</h3>
              
              {product.ingredients && product.ingredients.length > 0 && (
                <div className="mb-3">
                  <p className="text-gray-400 text-xs mb-1">Ingredients:</p>
                  <p className="text-gray-400 text-xs">{product.ingredients.join(', ')}</p>
                </div>
              )}
              
              <div className="flex justify-between items-center mt-4">
                <p className="text-white font-bold">{product.price} AZN</p>
                <div className="flex items-center space-x-2">
                  {quantity > 0 && (
                    <motion.button
                      className="w-8 h-8 rounded-full bg-red-500 bg-opacity-20 flex items-center justify-center"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <Minus className="w-5 h-5 text-red-500" />
                    </motion.button>
                  )}
                  <motion.button
                    className="w-8 h-8 rounded-full bg-yellow-500 bg-opacity-20 flex items-center justify-center"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => addToCart(product)}
                  >
                    <Plus className="w-5 h-5 text-yellow-500" />
                  </motion.button>
                  <AnimatePresence>
                    {quantity > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-gray-900"
                      >
                        {quantity}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;