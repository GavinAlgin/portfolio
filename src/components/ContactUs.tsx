// src/components/ContactUs.tsx
import React from 'react';
import { motion } from 'framer-motion';

const ContactUs: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Flashlight Spots */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-white rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-white rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full opacity-25 blur-3xl"></div>
      </div>

      {/* Glass Effect Card */}
      <motion.div
        className="flex flex-col w-full md:w-1/2 p-6 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Our Locations</h2>
        <p className="mb-2">Location 1: 123 Main St, City, Country</p>
        <p className="mb-2">Location 2: 456 Another St, City, Country</p>
        <p className="mb-2">Location 3: 789 Third St, City, Country</p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="flex flex-col w-full md:w-1/2 p-6 z-10 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Let's Talk</h2>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 mb-4 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-2 mb-4 border border-gray-300 rounded"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;