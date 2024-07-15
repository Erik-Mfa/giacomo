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
      {/* Textbox with slip-in effects */}
      <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0 md:order-1 flex flex-col justify-center z-10 slip-in">
        <div className="bg-black bg-opacity-75 p-10 hover:bg-opacity-100 transition duration-300 ease-in-out rounded-l-lg">
          <h2 className="text-5xl font-bold text-red-500 transition-all duration-300 ease-in-out transform hover:scale-105" style={{ fontFamily: '"Gloria Hallelujah", cursive' }}>Who is James</h2>
          <p className="mt-4 text-2xl text-white" style={{ fontFamily: '"Syne", sans-serif' }}>James is a passionate flair bartender with years of experience entertaining crowds around the world. Known for his unique style and impressive skills, he brings excitement and flair to every event.</p>
          <p className="mt-4 text-2xl text-white" style={{ fontFamily: '"Syne", sans-serif' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat nulla id enim mattis, quis scelerisque elit ultricies. Duis in arcu nec dui sollicitudin venenatis.</p>
        </div>
      </div>
      {/* Image from left with hover effect, closer to the right */}
      <div className="md:w-1/3 mt-4 md:mt-0 md:order-2 relative flex justify-center z-10">
        <img 
          src={jamesPhoto1} 
          alt="James" 
          className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105" 
          style={{ borderRadius: 10, position: 'relative', zIndex: 1 }} 
        />
      </div>
    </div>




    {/* Second Section */}
    <div className="relative mx-auto flex flex-col md:flex-row items-center justify-center p-8">
      {/* Textbox with slip-in effects */}
      <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0 md:order-1 flex flex-col justify-center z-10 slip-in">
        <div className="bg-black bg-opacity-75 p-10 hover:bg-opacity-100 transition duration-300 ease-in-out rounded-l-lg">
          <h2 className="text-5xl font-bold text-red-500 transition-all duration-300 ease-in-out transform hover:scale-105" style={{ fontFamily: '"Gloria Hallelujah", cursive' }}>More About James</h2>
          <p className="mt-4 text-2xl text-white" style={{ fontFamily: '"Syne", sans-serif' }}>James started his career in flair bartending over a decade ago, mastering the art of mixology and entertainment. He has performed at prestigious events and venues worldwide, leaving a lasting impression on everyone he encounters.</p>
          <p className="mt-4 text-2xl text-white" style={{ fontFamily: '"Syne", sans-serif' }}>Curabitur non ante non justo luctus pretium. Vestibulum volutpat pharetra enim, a lobortis dui mollis vel. Fusce consectetur, justo id aliquet varius, neque lectus scelerisque libero, in suscipit ligula urna nec magna.</p>
        </div>
      </div>

      {/* Image from right with hover effect, further to the right */}
      <div className="md:w-1/3 mt-4 md:mt-0 md:order-2 relative flex justify-center z-10" style={{ marginRight: '50px' }}>
        <img 
          src={jamesPhoto2} 
          alt="James" 
          className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105" 
          style={{ borderRadius: 10 }} 
        />
      </div>
    </div>
  </section>
);

export default WhoIsJames;
