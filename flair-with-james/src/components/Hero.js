import React, { useEffect, useState } from 'react';
import Header from './Header';
import bgImage from '../images/giacomo-2.png';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-cover bg-center text-white h-screen flex items-center justify-center bg-black"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '75%',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0">
        <Header />
        <div className="container mx-auto text-center">
          <div className="p-10 max-w-5xl mx-auto">
            <h1 className="text-7xl font-bold text-red-600">FLAIR WITH JAMES</h1>
            <div className="mt-6 text-xl text-black relative  h-32">
              <div
                className={`absolute left-0 top-0 w-full transition-transform duration-1000 ${animate ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'}`}
                style={{ padding: '0 5rem', fontFamily: '"Red Rose", serif', fontSize: '30px'}}  // Add padding for spread effect
              >
                James, also known as Giacomo Gelo Signorino, is a stylish Italian bartender who has traveled the world, showcasing his exceptional flair bartending skills.
              </div>
              <div
                className={`absolute right-0 top-24 w-full transition-transform duration-1000 ${animate ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'}`}
                style={{ padding: '0 5rem', fontFamily: '"Red Rose", serif', fontSize: '30px' }}  // Add padding for spread effect
              >
                With years of experience and a passion for the craft, James has mastered the art of flair bartending, captivating audiences with his dynamic performances. Now, he shares his expertise through exclusive courses designed to elevate your bartending skills to new heights.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;