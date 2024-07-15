import React from 'react';

const ContactForm = () => (
  <section id="contact" className="bg-gradient-to-br from-red-600 via-red-500 to-purple-600 text-black py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-6xl font-bold text-center mb-8 transform transition-all duration-300 hover:scale-105" style={{ 
        fontFamily: '"Permanent Marker", cursive', 
        color: '#FFFFFF', 
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        textTransform: 'uppercase',
        letterSpacing: '2px'
      }}>
        Get in Touch
      </h2>
      <div className="flex justify-center items-start">
        <form className="max-w-lg w-full bg-white p-8 rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
              <input
                type="text"
                name="name"
                className="mt-1 p-3 border border-gray-300 rounded-full w-full focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition duration-300"
                placeholder="Enter your name"
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
              <input
                type="email"
                name="email"
                className="mt-1 p-3 border border-gray-300 rounded-full w-full focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition duration-300"
                placeholder="Enter your email"
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
              <textarea
                name="message"
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full h-32 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition duration-300"
                placeholder="Enter your message"
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-purple-500 text-white py-3 px-4 rounded-full shadow-lg hover:from-red-600 hover:to-purple-600 transition duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactForm;
