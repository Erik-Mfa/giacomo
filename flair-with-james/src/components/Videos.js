import React from 'react';

const Videos = () => (
  <section id="videos" className="bg-gray-200 text-black p-8">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold">Videos</h2>
      <p className="mt-4">Videos showing James' skills will go here.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden bg-gray-300 relative aspect-w-1 aspect-h-1">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/your-video-id-1"
            title="Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          ></iframe>
        </div>
        <div className="rounded-lg overflow-hidden bg-gray-300 relative aspect-w-1 aspect-h-1">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/your-video-id-2"
            title="Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          ></iframe>
        </div>
        <div className="rounded-lg overflow-hidden bg-gray-300 relative aspect-w-1 aspect-h-1">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/your-video-id-3"
            title="Video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          ></iframe>
        </div>
        <div className="rounded-lg overflow-hidden bg-gray-300 relative aspect-w-1 aspect-h-1">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/your-video-id-4"
            title="Video 4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default Videos;
