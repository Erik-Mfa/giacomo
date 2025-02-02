import React from 'react';

const Videos = () => (
  <section id="videos" className="bg-gray-200 text-black p-10">
    <div className="container mx-auto text-center mt-4">
      <h2 className="text-5xl font-bold mb-10 transform transition-all duration-300 hover:scale-105" style={{ fontFamily: '"Rock Salt", cursive' }}>Showcase</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
        <div className="relative" style={{ paddingBottom: '56.25%' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual YouTube video URL
            title="Video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition duration-300"
          ></iframe>
        </div>
        <div className="relative" style={{ paddingBottom: '56.25%' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual YouTube video URL
            title="Video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition duration-300"
          ></iframe>
        </div>
        <div className="relative" style={{ paddingBottom: '56.25%' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual YouTube video URL
            title="Video 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition duration-300"
          ></iframe>
        </div>
        {/* Extra video visible only on smaller screens */}
        <div className="relative md:hidden" style={{ paddingBottom: '56.25%' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual YouTube video URL
            title="Video 4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition duration-300"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default Videos;
