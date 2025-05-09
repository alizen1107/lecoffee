import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { CartProvider } from './context/CartContext';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'search':
        return <SearchPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-md mx-auto px-4 py-6">
          <Header />
          <AnimatePresence mode="wait">
            <motion.main
              key={activeTab}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="mt-6"
            >
              {renderContent()}
            </motion.main>
          </AnimatePresence>
        </div>
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </CartProvider>
  );
}

export default App;