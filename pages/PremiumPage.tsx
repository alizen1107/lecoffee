import React from 'react';
import { Crown, Gift, Coffee, CreditCard } from 'lucide-react';

const PremiumPage: React.FC = () => {
  return (
    <div className="pb-20 text-white">
      <div className="flex justify-center mb-6">
        <div className="flex items-center space-x-2">
          <Crown className="w-6 h-6 text-yellow-400" />
          <h2 className="text-2xl font-bold">Premium Benefits</h2>
        </div>
      </div>
      
      <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <Gift className="w-5 h-5 text-yellow-400" />
          <h3 className="text-xl font-semibold">Exclusive Offers</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Premium members get exclusive discounts and early access to seasonal specialties.
        </p>
        <div className="flex justify-between items-center bg-gray-700 bg-opacity-50 p-3 rounded-lg">
          <span>20% off your next order</span>
          <button className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-md font-medium text-sm">
            Claim
          </button>
        </div>
      </div>
      
      <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <Coffee className="w-5 h-5 text-yellow-400" />
          <h3 className="text-xl font-semibold">Free Coffee Monthly</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Enjoy one free coffee of your choice every month as a premium member.
        </p>
        <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
          <div className="bg-yellow-500 h-full" style={{ width: '75%' }}></div>
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span>Next free coffee in 7 days</span>
          <span>75%</span>
        </div>
      </div>
      
      <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <CreditCard className="w-5 h-5 text-yellow-400" />
          <h3 className="text-xl font-semibold">Become Premium</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Upgrade your experience with premium membership for just 15 AZN per month.
        </p>
        <button className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-bold transition-transform hover:scale-105">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default PremiumPage;