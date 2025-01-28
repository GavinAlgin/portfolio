// src/components/CustomCursor.tsx
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-6 h-6 rounded-full bg-black pointer-events-none z-50"
      style={{
        left: mousePos.x - 10 + 'px',
        top: mousePos.y - 10 + 'px',
      }}
    />
  );
};

export default CustomCursor;
