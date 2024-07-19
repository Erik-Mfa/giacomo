import React from 'react';

const WhatHeWillTeach = () => (
  <section
    id="what-he-will-teach"
    className="bg-white text-black p-12 relative"
    style={{ fontFamily: '"Holtwood One SC", serif' }}
  >
    <div className="container mx-auto text-center p-12">
      <h2 className="text-5xl font-bold mb-12">What I Will be Teaching</h2>
      <ul className="text-lg mb-10">
        <li className="mb-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Advanced Pouring Techniques</li>
        <li className="mb-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Juggling and Object Manipulation</li>
        <li className="mb-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Signature Cocktail Creations</li>
        <li className="mb-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Entertaining an Audience</li>
        <li className="mb-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Flair Bartending Choreography</li>
      </ul>
      <div className="relative mb-12">
        <video 
          src="/images/giacomo-2.png" 
          controls 
          className="rounded-lg shadow-lg mx-auto w-2/3 lg:w-1/2 transition-transform transform hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 rounded-lg"></div>
          <div className="animate-pulse bg-orange-600 rounded-full p-2 shadow-lg"></div>
        </div>
      </div>
    </div>

  </section>
);

export default WhatHeWillTeach;
