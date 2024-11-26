import React from 'react';
import { Github, Twitter, } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AssetQ</h3>
            <p className="text-gray-400">
              Transforming asset management on the Internet Computer Protocol
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#tokenomics" className="text-gray-400 hover:text-white">Tokenomics</a></li>
              <li><a href="#roadmap" className="text-gray-400 hover:text-white">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com/decentr_assets........." target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
           
              <a href="https://github.com/ianmuriuki/AssetQ-Coin" className="text-gray-400 hover:text-white">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 AssetQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}