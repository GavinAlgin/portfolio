import React from 'react';
import { motion } from 'framer-motion';
import Beams from '../lib/Beams';

const tooltipVariants = {
  initial: { opacity: 0, y: -10 },
  hover: {
    opacity: 1,
    y: -30,
    transition: { duration: 0.3 },
  },
};

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center px-4">
      {/* Beams as Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        <motion.div
          className="relative inline-block group cursor-pointer"
          initial="initial"
          whileHover="hover"
        >
          {/* Tooltips */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-4 py-2 text-sm text-white bg-white/10 backdrop-blur-md rounded-lg pointer-events-none shadow-lg"
            variants={tooltipVariants}
          >
            Software Engineer
          </motion.div>

          <motion.div
            className="absolute -top-10 -right-24 px-4 py-2 text-sm text-white bg-white/10 backdrop-blur-md rounded-lg pointer-events-none shadow-lg"
            variants={tooltipVariants}
          >
            Frontend Developer
          </motion.div>

          <motion.div
            className="absolute -bottom-10 -left-28 px-4 py-2 text-sm text-white bg-white/10 backdrop-blur-md rounded-lg pointer-events-none shadow-lg"
            variants={tooltipVariants}
          >
            Backend Developer
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-full ml-6 px-4 py-2 text-sm text-white bg-white/10 backdrop-blur-md rounded-lg pointer-events-none shadow-lg"
            variants={tooltipVariants}
          >
            Full Stack Developer
          </motion.div>

          <motion.div
            className="absolute top-1/2 -left-32 -translate-y-1/2 px-4 py-2 text-sm text-white bg-white/10 backdrop-blur-md rounded-lg pointer-events-none shadow-lg"
            variants={tooltipVariants}
          >
            Software Developer
          </motion.div>

          {/* Name Title */}
          <motion.h1
            className="text-[20vw] sm:text-[18vw] md:text-[14vw] lg:text-[10vw] font-bold text-white leading-none nameTitle"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Gavin Algin.
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <p className="mt-6 text-sm sm:text-md md:text-xl text-[#ddd] max-w-4xl mx-auto">
          I bring value to web and mobile development projects by merging technical expertise with creativity and aesthetics.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
