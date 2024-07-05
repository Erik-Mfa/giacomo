import React from 'react';

const Contact = () => (
  <section id="contact" className="bg-gray-200 text-black py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
      <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input 
            type="text" 
            name="name" 
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition duration-300"
            placeholder="Enter your name"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input 
            type="email" 
            name="email" 
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition duration-300"
            placeholder="Enter your email"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Message</span>
          <textarea 
            name="message" 
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition duration-300" 
            rows="5"
            placeholder="Enter your message"
          ></textarea>
        </label>
        <button 
          type="submit" 
          className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg shadow-lg hover:bg-orange-700 transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
