import React, { useState, useEffect } from 'react';
import logo from '../assets/apps-2-ai-fill.png';
import resume from '../assets/Gavin Algin Resume.pdf';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Algin Gavin Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 backdrop-blur bg-transparent ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}>
        <div className="p-4 flex justify-between items-center">
          <button className="flex items-center space-x-2 text-black font-semibold py-2 px-4 rounded-full bg-white">
            <img src={logo} alt="Logo" className="w-full h-5" />
            <span>Gavin.</span>
          </button>

          <div className="ml-auto flex items-center space-x-4">
            <div className="relative rounded-full px-6 py-1 text-sm text-gray-300 ring-1 ring-white/10 hover:ring-white/20 hidden md:block">
              <motion.div
                className="absolute left-2 top-[40%] transform -translate-y-1/2 bg-lime-300 rounded-full w-2 h-2"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 0.8, ease: 'easeInOut', repeat: Infinity }}
              />
              Available For Work.{' '}
              <a href="#" className="font-semibold text-white underline underline-offset-2">
                Download My Resume <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <button
              className="bg-white text-black py-2 px-6 rounded-full hover:bg-black hover:text-white transition duration-200"
              onClick={downloadResume}>
              Resume.
            </button>

            <button className="text-white text-2xl md:hidden" onClick={toggleMenu}>
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex flex-col items-center justify-center z-50">
          <button className="text-white text-2xl mb-4" onClick={toggleMenu}>
            Close
          </button>
          <nav className="flex flex-col items-center space-y-4">
            <a href="#home" className="text-white text-xl" onClick={toggleMenu}>
              Home
            </a>
            <a href="#skills" className="text-white text-xl" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#experience" className="text-white text-xl" onClick={toggleMenu}>
              Experience
            </a>
            <a href="#contact" className="text-white text-xl" onClick={toggleMenu}>
              Contact
            </a>
          </nav>
        </div>
      )}

      {/* Spacer to push content below fixed navbar */}
      <div className="h-[72px]" />
    </>
  );
};

export default Navbar;
