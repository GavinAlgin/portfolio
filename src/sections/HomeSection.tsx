import React, { useState, useEffect } from 'react';
import {
  Agreement03Icon,
  AiBrowserIcon,
  AiBrain01Icon,
} from '@hugeicons/react';

const contents = [
  {
    // icon: <Agreement03Icon size={24} />,
    title: 'Launch Your Ideas',
    subtitle: 'Get started in seconds.',
  },
  {
    // icon: <AiBrowserIcon size={24} />,
    title: 'Shine Bright',
    subtitle: 'Stand out from the crowd.',
  },
  {
    // icon: <AiBrain01Icon size={24} />,
    title: 'Build with Love',
    subtitle: 'We care about your vision.',
  },
];

export default function HomeSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % contents.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row w-full h-screen">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-bold mb-6">Stay Updated</h1>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
            Submit
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div
        className="w-full md:w-1/2 relative bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/illustration.png')` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-64 text-center animate-floating">
            <div className="text-blue-600 mb-3">{contents[index].icon}</div>
            <h2 className="text-xl font-semibold">{contents[index].title}</h2>
            <p className="text-gray-600">{contents[index].subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
