import React from 'react';
import jamesPhoto1 from '../images/giacomo-3.png'; 
import jamesPhoto2 from '../images/giacomo-4.png'; 
import '../App.css'; // Import the custom CSS for animations

const WhoIsJames = () => (
  <section
    id="who-is-james"
    className="bg-red-500 py-12 relative overflow-hidden"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
  >

    {/* Cloud background */}
    <div className="absolute inset-0 bg-clouds"></div>

    {/* First Section */}
    <div className="relative mx-auto flex flex-col md:flex-row items-center justify-center">
      <div className="p-4 relative flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto overflow-hidden">
        {/* Textbox with slip-in effects */}
        <div
          className="flex-1 text-center md:text-left mt-4 md:mt-0 flex flex-col justify-between p-6 md:p-10 bg-black bg-opacity-75 hover:bg-opacity-100 transition duration-300 ease-in-out rounded-t-lg md:rounded-l-lg sticky top-0 z-10"
          style={{ maxHeight: '400px', borderTop: '2px solid #BF5B04' }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-red-500 transition-all duration-300 ease-in-out transform hover:scale-105" style={{ fontFamily: '"Gloria Hallelujah", cursive' }}>Who is James</h2>
          <div className="overflow-hidden">
            <p className="mt-4 text-base md:text-base text-white" style={{ fontFamily: '"Syne", sans-serif' }}>James is a passionate flair bartender with years of experience entertaining crowds around the world. Known for his unique style and impressive skills, he brings excitement and flair to every event.</p>
          </div>
        </div>
        {/* Image with hover effect */}
        <div className="flex-1   md:mt-0 flex justify-center">
          <img 
            src={jamesPhoto1} 
            alt="James" 
            className="w-full h-auto max-w-full transition-transform duration-300 ease-in-out hover:scale-105" 
            style={{ borderRadius: 10 }} 
          />
        </div>
      </div>
    </div>

    {/* Second Section */}
    <div className="relative mx-auto flex flex-col md:flex-row items-center justify-center p-8">
      <div className="p-4 relative flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto overflow-hidden">
        {/* Textbox with slip-in effects */}
        <div
          className="flex-1 text-center md:text-left mt-4 md:mt-0 flex flex-col justify-between p-6 md:p-10 bg-black bg-opacity-75 hover:bg-opacity-100 transition duration-300 ease-in-out rounded-t-lg md:rounded-l-lg sticky top-0 z-10"
          style={{ maxHeight: '350px', borderTop: '2px solid #BF5B04' }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-red-500 transition-all duration-300 ease-in-out transform hover:scale-105" style={{ fontFamily: '"Gloria Hallelujah", cursive' }}>More About James</h2>
          <div className="overflow-auto">
            <p className="mt-4 text-base md:text-base text-white" style={{ fontFamily: '"Syne", sans-serif' }}>James started his career in flair bartending over a decade ago, mastering the art of mixology and entertainment. He has performed at prestigious events and venues worldwide, leaving a lasting impression on everyone he encounters.</p>
          </div>
        </div>
        {/* Image with hover effect */}
        <div className="flex-1   md:mt-0 flex justify-center">
          <img 
            src={jamesPhoto2} 
            alt="James" 
            className="w-full h-auto max-w-full transition-transform duration-300 ease-in-out hover:scale-105" 
            style={{ borderRadius: 10}} 
          />
        </div>
      </div>
    </div>
  </section>
);

export default WhoIsJames;
