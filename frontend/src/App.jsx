import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <DemoSection />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
