import React from 'react';
import { Github, Twitter } from 'lucide-react'; // lucide-react icons
import { FaTelegramPlane } from 'react-icons/fa'; // react-icons for Telegram

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">AssetQ</h3>
            <p className="text-gray-400 leading-relaxed">
              Transforming asset management on the Internet Computer Protocol
              with secure and transparent blockchain technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#tokenomics" className="text-gray-400 hover:text-white transition-colors">Tokenomics</a></li>
              <li><a href="#roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Community</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Twitter size={24} className="text-gray-400 hover:text-white" />
                <a href="https://twitter.com/decentr_assets" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Github size={24} className="text-gray-400 hover:text-white" />
                <a href="https://github.com/ianmuriuki/AssetQ-Coin" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors">
                  Github
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaTelegramPlane size={24} className="text-gray-400 hover:text-white" />
                <a href="https://t.me/yourtelegramlink" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors">
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 AssetQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
