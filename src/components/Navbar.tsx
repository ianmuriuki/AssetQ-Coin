import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggles the menu state
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              AssetQ
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#tokenomics" className="text-gray-700 hover:text-blue-600 transition-colors">Tokenomics</a>
            <a href="#roadmap" className="text-gray-700 hover:text-blue-600 transition-colors">Roadmap</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Launch App
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-lg shadow-lg">
            <a 
              href="#features" 
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Features
            </a>
            <a 
              href="#tokenomics" 
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              onClick={() => setIsMenuOpen(false)} 
            >
              Tokenomics
            </a>
            <a 
              href="#roadmap" 
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Roadmap
            </a>
            <button 
              className="block w-full px-4 py-2 bg-blue-600 text-white text-center rounded-b-lg hover:bg-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Launch App
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
