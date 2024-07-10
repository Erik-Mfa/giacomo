import React from 'react';
import jamesPhoto1 from '../images/giacomo-3.png'; 
import jamesPhoto2 from '../images/giacomo-4.png'; 
import bgImage from '../images/graffiti-wall.jpg';

const WhoIsJames = () => (
  <section id="who-is-james" className="bg-white py-12" style={{ 
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${bgImage})`
  }}>
    {/* First Section */}
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between p-8">
      {/* Image */}
      <div className="md:w-1/3 mt-4 md:mt-0 md:order-1 relative flex justify-center">
        <img src={jamesPhoto1} alt="James" className="w-full h-auto" style={{ borderRadius: 0 }} />
      </div>
      {/* Textbox */}
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:ml-8 md:order-2 flex flex-col justify-center">
        <div className="bg-black bg-opacity-75 p-10 hover:bg-opacity-100 transition duration-300 ease-in-out">
          <h2 className="text-5xl font-bold text-red-500 transition-all duration-300 ease-in-out transform hover:scale-105 text-white" style={{ fontFamily: '"Gloria Hallelujah", cursive' }}>Who is James</h2>
          <p className="mt-4 text-2xl text-white" style={{ fontFamily: '"Syne", sans-serif' }}>James is a passionate flair bartender with years of experience entertaining crowds around the world. Known for his unique style and impressive skills, he brings excitement and flair to every event.</p>
          <p className="mt-4 text-2xl text-white" style={{ fontFamily: '"Syne", sans-serif' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat nulla id enim mattis, quis scelerisque elit ultricies. Duis in arcu nec dui sollicitudin venenatis.</p>
        </div>
      </div>
    </div>

    {/* Second Section */}
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between mt-16 p-8">
      {/* Image */}
      <div className="md:w-1/3 mt-4 md:mt-0 md:order-2 relative flex justify-center">
        <img src={jamesPhoto2} alt="James" className="w-full h-auto" style={{ borderRadius: 0 }} />
      </div>
      {/* Textbox */}
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:mr-8 md:order-1 flex flex-col justify-center">
        <div className="bg-black bg-opacity-75 p-10 hover:bg-opacity-100 transition duration-300 ease-in-out">
          <h2 className="text-5xl font-bold text-red-500 transition-all duration-300 ease-in-out transform hover:scale-105 text-white" style={{ fontFamily: '"Gloria Hallelujah", cursive' }}>More About James</h2>
          <p className="mt-4 text-2xl text-white" style={{ fontFamily: '"Syne", sans-serif' }}>James started his career in flair bartending over a decade ago, mastering the art of mixology and entertainment. He has performed at prestigious events and venues worldwide, leaving a lasting impression on everyone he encounters.</p>
          <p className="mt-4 text-2xl text-white" style={{ fontFamily: '"Syne", sans-serif' }}>Curabitur non ante non justo luctus pretium. Vestibulum volutpat pharetra enim, a lobortis dui mollis vel. Fusce consectetur, justo id aliquet varius, neque lectus scelerisque libero, in suscipit ligula urna nec magna.</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhoIsJames;
