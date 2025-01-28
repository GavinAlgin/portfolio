import React from 'react';
import { motion } from 'framer-motion';
import illustration from '../assets/illustration.png';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-white relative overflow-hidden px-8">
      {/* Flashlight spots */}
      <div className="absolute inset-0 bg-black opacity-20 rounded-full blur-lg" style={{ top: '20%', left: '10%', width: '300px', height: '300px' }}></div>
      <div className="absolute inset-0 bg-black opacity-20 rounded-full blur-lg" style={{ top: '60%', right: '15%', width: '250px', height: '250px' }}></div>
      <div className="absolute inset-0 bg-black opacity-20 rounded-full blur-lg" style={{ top: '30%', left: '70%', width: '200px', height: '200px' }}></div>

      {/* Text content centered */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md md:max-w-2xl">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gavin Gideon Algin
        </motion.h1>
        <motion.p
          className="mt-4 text-base md:text-lg text-gray-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover amazing creative developer hardwork tailored just for you.
        </motion.p>
      </div>

      {/* Image on the right, larger on bigger screens */}
      <div className="relative z-10 mt-8 md:mt-0 md:ml-12">
        <motion.img
          src={illustration}
          alt="Illustration"
          className="w-full md:w-[600px] lg:w-[800px] h-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
