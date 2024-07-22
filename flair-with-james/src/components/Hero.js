import React, { useEffect, useState } from 'react';
import Header from './Header';
import bgImage from '../images/giacomo-2.png';
import '../App.css'; // Ensure you import the CSS file

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="hero" className="relative text-white flex flex-col items-center bg-black min-h-screen overflow-hidden">
      <Header />

      {/* Image Container with Shadow */}
      <div className="relative mt-10 w-full sm:w-3/4 mx-auto">
        <img
          src={bgImage}
          alt="Giacomo Gelo Signorino"
          className="w-full h-auto object-cover opacity-70"
        />
        <div className="absolute inset-0 border-2 border-rose-700" style={{ boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.7)' }} />

        {/* Textbox Overlay */}
        <div className={`absolute top-0 left-0 w-full h-full ${animate ? 'fade-in' : ''}`} style={{ padding: '20px' }}>
          <div className="bg-black bg-opacity-50 border-2 border-rose-700 text-center mx-1 sm:mx-4 rounded-lg flex flex-col justify-center items-center p-2 sm:p-4 h-full overflow-hidden">
            <p className="responsive-text text-sm sm:text-xl">
              <span className="fade-in-text" style={{ fontFamily: '"Rubik Mono One", monospace' }}>Elevate Your Skills with a Master Bartender.</span><br />
              <span className="fade-in-text" style={{ fontFamily: '"Rubik Mono One", monospace' }}>Choosing James' flair bartending course means learning from the best.</span><br />
              <span className="fade-in-text" style={{ fontFamily: '"Rubik Mono One", monospace' }}>James, is a world-renowned Italian bartender who has traveled the globe, showcasing his exceptional flair bartending skills.</span><br />
              <span className="fade-in-text" style={{ fontFamily: '"Rubik Mono One", monospace' }}>James has mastered the art of flair bartending, captivating audiences with his dynamic performances.</span><br />
            </p>
            <button style={{ fontFamily: '"Shadows Into Light", cursive', fontSize: '30px' }} className="responsive-button text-white px-4 sm:mt-2 sm:px-8 p-2 border-2 border-rose-700 bg-transparent hover:bg-rose-700 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out rounded-lg">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Text Container Under the Image */}
      <div className="text-lg text-white w-full max-w-xl mx-auto text-center p-4 sm:p-8 flex flex-col items-center">
        <div className={`transition-opacity duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`} style={{
          fontFamily: '"Red Rose", serif',
          fontSize: '16px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '5px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <span className="responsive-text fade-in-text">James, also known as Giacomo Gelo Signorino, is a stylish Italian bartender who has traveled the world, showcasing his exceptional flair bartending skills.</span><br />
          <span className="responsive-text fade-in-text">With years of experience and a passion for the craft, James has mastered the art of flair bartending, captivating audiences with his dynamic performances.</span><br />
          <span className="responsive-text fade-in-text">Now, he shares his expertise through exclusive courses designed to elevate your bartending skills to new heights.</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
