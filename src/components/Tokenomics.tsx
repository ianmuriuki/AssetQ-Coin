import React from 'react';
import { PieChart, Wallet, Users, Building } from 'lucide-react';

const distribution = [
  { label: 'DAMS Ecosystem', percentage: 40, color: 'bg-blue-600' },
  { label: 'Public ICO', percentage: 20, color: 'bg-blue-500' },
  { label: 'Development', percentage: 15, color: 'bg-blue-400' },
  { label: 'Team & Advisors', percentage: 10, color: 'bg-blue-300' },
  { label: 'Community Rewards', percentage: 15, color: 'bg-blue-200' }
];

export default function Tokenomics() {
  return (
    <div className="py-20 bg-blue-50" id="tokenomics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            AssetQ Tokenomics
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Total Supply: 1 Billion AssetQ Tokens
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {distribution.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-4 h-4 rounded ${item.color} mr-4`}></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{item.label}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${item.color} rounded-full h-2`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Utility within DAMS</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <PieChart className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Transaction Fees</h4>
                  <p className="text-gray-600">Paid in AssetQ for all trades and verifications</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Wallet className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Staking Rewards</h4>
                  <p className="text-gray-600">Stake AssetQ for rewards and governance power</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Community Incentives</h4>
                  <p className="text-gray-600">Earn through referrals and participation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}