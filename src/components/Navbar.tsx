import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              AssetQ
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#tokenomics" className="text-gray-700 hover:text-blue-600 transition-colors">Tokenomics</a>
            <a href="#roadmap" className="text-gray-700 hover:text-blue-600 transition-colors">Roadmap</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Launch App
            </button>
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}