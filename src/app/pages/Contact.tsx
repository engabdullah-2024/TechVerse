import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <main id='contact'  className="pt-20 min-h-screen bg-gray-50 px-6 py-16 flex flex-col">
      <section className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10 md:p-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-600 text-center mb-10">
          We'd love to hear from you! Reach out using any of the methods below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaEnvelope className="text-blue-600 text-3xl mb-3" />
            <h2 className="text-xl font-semibold mb-1">Email</h2>
            <p className="text-gray-600">support@techverse.com</p>
          </div>

          <div className="flex flex-col items-center bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaPhone className="text-green-600 text-3xl mb-3" />
            <h2 className="text-xl font-semibold mb-1">Phone</h2>
            <p className="text-gray-600">+252 613169435</p>
          </div>

          <div className="flex flex-col items-center bg-purple-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-purple-600 text-3xl mb-3" />
            <h2 className="text-xl font-semibold mb-1">Location</h2>
            <p className="text-gray-600">KM4, Mog-Som</p>
          </div>
        </div>

        <form className="mt-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
