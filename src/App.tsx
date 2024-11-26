import React from 'react';
import { ArrowRight, Shield, Globe, Coins, ChevronDown, Github, Twitter, Discord } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <Hero />
      <Features />
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default App;