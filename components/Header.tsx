import React from 'react';
import LocationSelector from './LocationSelector';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-indigo-500 bg-opacity-70 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
      </div>
      
      <LocationSelector />
    </div>
  );
};

export default Header;