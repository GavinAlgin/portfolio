import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const IncognitoSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [iconPositions, setIconPositions] = useState<{ x: number; y: number }[]>([]);
  const icons = ['75', '75', '7 5', '75', '75']; // Example icon data
  const centerX = window.innerWidth / 2; // Center X position
  const centerY = window.innerHeight / 2; // Center Y position
  const radius = 100; // Distance from the center to place icons

  useEffect(() => {
    // Initialize icon positions around the center
    const initialPositions = icons.map((_, index) => {
      const angle = (index / icons.length) * 2 * Math.PI; // Calculate angle for each icon
      return {
        x: centerX + radius * Math.cos(angle) - 32, // Subtract half the icon width
        y: centerY + radius * Math.sin(angle) - 32  // Subtract half the icon height
      };
    });
    setIconPositions(initialPositions);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 relative">
      {/* Centered Text */}
      <div className="absolute text-2xl font-bold text-gray-800 z-10">
        Centered Text
      </div>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="w-16 h-16 flex justify-center items-center bg-blue-500 rounded-full text-white absolute"
          initial={{ scale: 1 }}
          animate={{
            scale: isHovered ? 1.2 : 1,
            x: iconPositions[index]?.x || 0,
            y: iconPositions[index]?.y || 0,
            rotate: isHovered ? [0, 10, -10, 0] : 0, // Add rotation when hovered
            opacity: isHovered ? 0.8 : 1, // Slightly fade when hovered
            transition: { duration: 0.5, ease: 'easeInOut' }
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

export default IncognitoSection;
