// src/components/BlurText.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const BlurText: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-black overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Blurred Text */}
      <motion.div
        className="relative text-6xl font-bold text-white text-center"
        style={{
          filter: isHovered ? "blur(0px)" : "blur(4px)",
          WebkitTextStroke: "1px white",
        }}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      >
        The fashionista's diary: Let's Start
        <br />
        <p>Where style speaks, trends resonate, fashion flourishes</p>
        <br />
        <h1>est. 2020.</h1>
      </motion.div>

      {/* Hover Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, transparent 100px, rgba(0, 0, 0, 0.95) 150px)`,
        }}
      />
    </div>
  );
};

export default BlurText;