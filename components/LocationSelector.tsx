import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { locations } from '../data/locations';

const LocationSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(locations.find(loc => loc.isActive)?.name || 'Select Location');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectLocation = (locationName: string) => {
    setSelectedLocation(locationName);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div 
        className="flex items-center space-x-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-white text-xl font-semibold">{selectedLocation}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-white" /> : <ChevronDown className="w-5 h-5 text-white" />}
      </div>
      
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10 transition-all duration-300 transform origin-top scale-100 opacity-100">
          <div className="py-1">
            {locations.map((location) => (
              <div
                key={location.id}
                className="px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer"
                onClick={() => handleSelectLocation(location.name)}
              >
                {location.name}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="text-gray-400 text-xs cursor-pointer hover:text-gray-300 transition-colors">
        See more
      </div>
    </div>
  );
};

export default LocationSelector;