import React from 'react';
import Header from './Header';
import bgImage from '../images/giacomo-2.png'; // Adjust path as per your project structure

const Hero = () => (
  <section id="hero" className="relative bg-cover bg-center text-white h-screen flex items-center justify-center" style={{ 
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`, 
    height: '900px'
  }}>
    <div className="absolute inset-0">
      <Header />
      <div className="container mx-auto text-center mt-40 mt-4"> {/* Adjust the top margin here */}
        <h1 className="text-4xl font-bold" style={{ color: '#BF5B04'}}>FLAIR WITH JAMES</h1>
        <p className="mt-4" style={{ color: '#BF5B04'}}>Welcome to the world of flair bartending with James.</p>
        <button className="mt-8 bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-orange-700 transition duration-300 ease-in-out">Explore More</button>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div> {/* Shadow effect */}
  </section>
);

export default Hero;
