import React from 'react';
import jamesPhoto1 from '../images/giacomo-3.png'; // Adjust the path relative to src folder
import jamesPhoto2 from '../images/giacomo-4.png'; // Adjust the path relative to src folder

const WhoIsJames = () => (
  <section id="who-is-james" className="bg-white py-12">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:translate-y-2">
      <div className="md:w-1/2 mt-4 md:mt-0 relative flex justify-center">
        <img src={jamesPhoto1} alt="James" className="rounded-lg shadow-lg w-3/4" />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:ml-8 flex flex-col justify-center">
        <h2 className="text-4xl font-bold" style={{ fontFamily: '"Bungee", sans-serif' }}>Who is James</h2>
        <div className="bg-[#F2D0A7] p-4 rounded-lg shadow-lg mt-4">
          <p className="mt-4" style={{ fontFamily: '"Syne", sans-serif' }}>James is a passionate flair bartender with years of experience entertaining crowds around the world. Known for his unique style and impressive skills, he brings excitement and flair to every event.</p>
          <p className="mt-4" style={{ fontFamily: '"Syne", sans-serif' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat nulla id enim mattis, quis scelerisque elit ultricies. Duis in arcu nec dui sollicitudin venenatis.</p>
        </div>
      </div>
    </div>

    {/* Additional Section */}
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between mt-16 bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:translate-y-2">
      <div className="md:w-1/2 mt-4 md:mt-0 md:order-2 relative flex justify-center">
        <img src={jamesPhoto2} alt="James" className="rounded-lg shadow-lg w-3/4" />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:mr-8 md:order-1 flex flex-col justify-center">
        <h2 className="text-4xl font-bold" style={{ fontFamily: '"Bungee", sans-serif' }}>More About James</h2>
        <div className="bg-[#F2D0A7] p-4 rounded-lg shadow-lg mt-4">
          <p className="mt-4" style={{ fontFamily: '"Syne", sans-serif' }}>James started his career in flair bartending over a decade ago, mastering the art of mixology and entertainment. He has performed at prestigious events and venues worldwide, leaving a lasting impression on everyone he encounters.</p>
          <p className="mt-4" style={{ fontFamily: '"Syne", sans-serif' }}>Curabitur non ante non justo luctus pretium. Vestibulum volutpat pharetra enim, a lobortis dui mollis vel. Fusce consectetur, justo id aliquet varius, neque lectus scelerisque libero, in suscipit ligula urna nec magna.</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhoIsJames;
