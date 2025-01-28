"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Developer information categories
const categories = [
  {
    title: "about me",
    content: [
      "Name: Gavin Algin",
      "Role: Full-Stack Developer",
      "Location: Polokwane, South Africa",
      "Experience: 2+ Years",
    ],
  },
  {
    title: "programming",
    content: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Node.js", "Python", "C++", "MySQL", "Firebase", "Supabase",],
  },
  {
    title: "designing",
    content: ["Figma", "Sketch", "Adobe XD", "Framer", "WonderMockkit", "WordPress"],
  },
  {
    title: "education",
    content: [
      "B.Sc. in Computer Science",
      "Cisco Badges in Software Engineering",
      "Certifications: AWS, Google Cloud",
    ],
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 md:px-0">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold leading-tight text-center"
      >
        Explore my{" "}
        <motion.span
          className="text-gray-400"
          whileHover={{ scale: 1.1, color: "#ffffff" }}
        >
          {categories[activeIndex].title}
        </motion.span>
        .
      </motion.h1>

      <motion.p
        key={activeIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6 text-gray-400 text-lg text-center"
      >
        {categories[activeIndex].content.join(" • ")}
      </motion.p>

      {/* Frosted Glass Effect on Buttons Container */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 bg-white/10 backdrop-blur border border-white/15 rounded-full px-3 py-2">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-6 py-2 rounded-full transition ${
              activeIndex === index
                ? "bg-white text-black"
                : "text-gray-400 border-gray-600 hover:bg-gray-800"
            }`}
          >
            {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
