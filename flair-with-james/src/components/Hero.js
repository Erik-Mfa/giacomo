import React from 'react';
import Header from './Header';
import bgImage from '../images/giacomo-2.png';

const Hero = () => (
  <section id="hero" className="relative bg-cover bg-center text-white h-screen flex items-center justify-center" style={{ 
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${bgImage})`
  }}>
    <div className="absolute inset-0">
      <Header />
      <div className="container mx-auto text-center mt-20">
        <div className="border-4 border-orange-600 p-10 max-w-md mx-auto" style={{ color: '#ff6600', maxWidth: '50%' }}>
          <h1 className="text-7xl font-bold" style={{ color: '#ff6600' }}>FLAIR WITH JAMES</h1>
          <p className="mt-6 text-xl" style={{ color: '#ff6600' }}>
            James, also known as Giacomo Gelo Signorino, is a stylish Italian bartender who has traveled the world, 
            showcasing his exceptional flair bartending skills. With years of experience and a passion for the craft, 
            James has mastered the art of flair bartending, captivating audiences with his dynamic performances. 
            Now, he shares his expertise through exclusive courses designed to elevate your bartending skills to new heights.
          </p>
          <button className="mt-8 bg-orange-700 text-white py-2 px-4 hover:bg-orange-800 transition duration-300 ease-in-out">
            Explore More
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
