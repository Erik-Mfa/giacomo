import React from 'react';

const ContactForm = () => (
  <section id="contact" className="bg-gray-200 text-black py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-6xl font-bold text-center mb-8" style={{ fontFamily: '"Phudu", sans-serif', color: '#ff0000'}}>Get in Touch</h2>
      <div className="flex justify-center items-start">
        <form className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
              <input
                type="text"
                name="name"
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition duration-300"
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
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition duration-300"
                placeholder="Enter your email"
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
              <textarea
                name="message"
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full h-32 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition duration-300"
                placeholder="Enter your message"
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg shadow-lg hover:bg-orange-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  </section>
);

export default ContactForm;
