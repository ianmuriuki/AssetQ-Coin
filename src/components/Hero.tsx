import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="block text-gray-900">Transforming Asset Management</span>
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mt-2">
              Powered by ICP
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            AssetQ is revolutionizing global asset management through the Internet Computer Protocol. 
            Secure, transparent, and efficient.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              Buy AssetQ <ArrowRight size={20} />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Swap
            </button>
          </div>
          <div className="mt-20">
            <img 
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200"
              alt="Digital Asset Management"
              className="rounded-xl shadow-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}