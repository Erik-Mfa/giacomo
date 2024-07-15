import React from 'react';
import Hero from './components/Hero';
import WhoIsJames from './components/WhoIsJames';
import Videos from './components/Videos';
import WhatHeWillTeach from './components/WhatHeWillTeach';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>

      <Hero />
      <WhatHeWillTeach />
      <WhoIsJames />
      <Videos />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
