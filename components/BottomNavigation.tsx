import React from 'react';
import { Home, Search } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 py-3 px-8">
      <div className="flex justify-between items-center">
        <div 
          className={`flex flex-col items-center space-y-1 cursor-pointer transition-colors ${activeTab === 'home' ? 'text-white' : 'text-gray-500'}`}
          onClick={() => setActiveTab('home')}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs font-medium">HOME</span>
        </div>
        
        <div 
          className={`flex flex-col items-center space-y-1 cursor-pointer transition-colors ${activeTab === 'search' ? 'text-white' : 'text-gray-500'}`}
          onClick={() => setActiveTab('search')}
        >
          <Search className="w-6 h-6" />
          <span className="text-xs font-medium">SEARCH</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;