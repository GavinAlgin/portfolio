import React, { useState } from 'react';
import logo from '../assets/apps-2-ai-fill.png';
import resume from '../assets/Algin Gavin Resume.pdf';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume; // Set the link to the PDF file
    link.download = 'Algin Gavin Resume.pdf'; // Set the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative bg-white w-full p-4 flex justify-between items-center">
      <button className="flex items-center space-x-2 text-black font-semibold py-2 px-4 rounded-full bg-gray-200">
        <img src={logo} alt='' className='w-full h-5'/>
        <span>Gavin.</span>
      </button>

      <div className="ml-auto flex items-center space-x-4">
        <div className="relative rounded-full px-6 py-1 text-sm/7 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 hidden md:block">
        <motion.div
            className="absolute left-2 top-[40%] transform -translate-y-1/2 bg-lime-300 rounded-full w-2 h-2"
            animate={{ scale: [1, 1.5, 1] }} // Pulsing effect
            transition={{ duration: 0.8, ease: "easeInOut", repeat: Infinity }}
          />
              Available For Work.{' '}
                <a href="#" className="font-semibold text-black">
                  <span aria-hidden="true" className="absolute inset-0" />
                   Download My Resume <span aria-hidden="true">&rarr;</span>
                </a>
        </div>
        <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-white hover:text-black" onClick={downloadResume}>
          Resume.
        </button>
        <button className="text-black text-xl" onClick={toggleMenu}>☰</button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-sm flex flex-col items-center justify-center z-50">
          <button className="text-white text-2xl mb-4" onClick={toggleMenu}>Close</button>
          <nav className="flex flex-col items-center">
            <a href="#home" className="text-white text-xl mb-4" onClick={toggleMenu}>Home</a>
            <a href="#skills" className="text-white text-xl mb-4" onClick={toggleMenu}>Skills</a>
            <a href="#experience" className="text-white text-xl mb-4" onClick={toggleMenu}>Experience</a>
            <a href="#contact" className="text-white text-xl mb-4" onClick={toggleMenu}>Contact</a>
          </nav>
        </div>
      )}
      
    </div>
  );
};

export default Navbar;