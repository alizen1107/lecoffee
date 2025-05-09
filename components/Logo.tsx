import React from 'react';
import { Coffee } from 'lucide-react';

interface LogoProps {
  type: 'coffee' | 'cookie';
}

const Logo: React.FC<LogoProps> = ({ type }) => {
  return (
    <div className="flex items-center">
      <h2 className="text-2xl font-bold text-white">
        {type === 'coffee' ? 'LECOFFEE' : 'LECOOKIES'}
      </h2>
      <span className="ml-1 text-lg italic font-light text-yellow-400">Premium</span>
    </div>
  );
};

export default Logo;