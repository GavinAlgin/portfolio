"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const icons = [
  {
    name: 'Icon1',
    component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffff" fill="none">
        <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: 'Icon2',
    component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    )
  },
  {
    name: 'Icon3',
    component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color ="#fff" fill="none">
        <rect width="20" height="20" x="2" y="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    )
  },
  {
    name: 'Icon4',
    component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none">
        <path d="M12 2L2 22h20L12 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    )
  },
  {
    name: 'Icon5',
    component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffff" fill="none">
        <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Icon6',
    component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none">
        <path d="M12 2L2 22h20L12 2z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: 'Icon7',
    component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none">
        <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: 'Icon8',
    component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none">
        <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Icon9',
    component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffff" fill="none">
        <path d="M12 2L2 22h20L12 2z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: 'Icon10',
    component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffff" fill="none">
        <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Icon11',
    component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none">
        <path d="M12 2L2 22h20L12 2z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: 'Icon12',
    component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffff" fill="none">
        <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Icon13',
    component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffff" fill="none">
        <path d="M12 2L2 22h20L12 2z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  }
];

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
    icons: [icons[0].component, icons[1].component, icons[2].component, icons[3].component],
  },
  {
    title: "programming",
    content: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Node.js", "Python", "C++", "MySQL", "Firebase", "Supabase",],
    icons: [icons[4].component, icons[5].component, icons[6].component, icons[7].component],
  },
  {
    title: "designing",
    content: ["Figma", "Sketch", "Adobe XD", "Framer", "WonderMockkit", "WordPress"],
    icons: [icons[8].component, icons[9].component, icons[10].component, icons[11].component],
  },
  {
    title: "education",
    content: [
      "B.Sc. in Computer Science",
      "Cisco Badges in Beginner Data Science & Cyber Security",
      "Certifications: AWS, Google Cloud",
    ],
    icons: [icons[12].component],
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const iconVariants = {
    animate: {
      y: [0, -10, 10, 0], 
      x: [0, -20, 20, 0],  
      scale: [1, 1.2, 1],  
      rotate: [0, 10, -10, 0],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 5,
        ease: "easeInOut",
      },
    },
  };

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

      {/* Floating Icons */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center pointer-events-none">
        {categories[activeIndex].icons.map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            variants={iconVariants}
            animate="animate"
            style={{
              top: `${(index + 1) * 15}%`, 
              left: `${(index + 1) * 10}%`,
              zIndex: 10,
            }}
          >
            {/* <Icon className="w-12 h-12 text-gray-400" />  */}
            {Icon}
          </motion.div>
        ))}
      </div>

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
