import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';

import Pricing from './components/Pricing';
import UseCases from './components/UseCases';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <DemoSection />
      <Features />
      <UseCases />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
