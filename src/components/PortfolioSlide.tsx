import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import expandlyLogo from '../assets/projects_assets/expandly.png';
import expandlyIMG1 from '../assets/projects_assets/Screenshot 2025-06-14 230807.png';
import expandlyIMG2 from '../assets/projects_assets/Screenshot 2025-06-14 230918.png';
import insightIMG from '../assets/projects_assets/iPhone-13-PRO-localhost.png';

// Enhanced StackAnimation with left/right swipe detection & bounce-back
const StackAnimation = ({ images }) => {
  const [stack, setStack] = useState(images);

  const handleDragEnd = (_, info) => {
    const x = info.offset.x;
    const y = info.offset.y;

    if (Math.abs(x) > Math.abs(y) && Math.abs(x) > 50) {
      if (x < 0) {
        // Left swipe → next image (first image to back)
        setStack((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
      } else {
        // Right swipe → previous image (last image to front)
        setStack((prev) => {
          const last = prev[prev.length - 1];
          const rest = prev.slice(0, prev.length - 1);
          return [last, ...rest];
        });
      }
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      className="relative w-[180px] h-[260px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[320px] lg:w-[250px] lg:h-[350px] cursor-grab active:cursor-grabbing"
      whileTap={{ cursor: 'grabbing' }}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
    >
      <AnimatePresence initial={false}>
        {stack.map((img, index) => (
          <motion.img
            key={img + index}
            src={img}
            alt={`stack-${index}`}
            className="absolute w-full h-full object-cover rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              top: `${index * 6}px`,
              left: `${index * 6}px`,
              opacity: 1,
              scale: 1,
              zIndex: stack.length - index,
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            dragListener={true} // Disable drag on images, only container draggable
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

const PortfolioSlide = () => {
  return (
    <section className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full h-full max-w-full px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="relative pt-60 h-full space-y-20">

          {/* Project 1 */}
          <div className="sticky bottom-60 z-[3] -mt-48 grid items-center gap-8 rounded-xl bg-[#494849] px-5 py-10 sm:px-12 lg:grid-cols-2 lg:gap-20 border border-black">
            <div className="max-w-3xl lg:grid lg:gap-32">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl lg:m-0">
                Digital Web & Mobile Development Agency
              </h2>
              <p className="max-w-md text-sm text-[#f7f7f7] sm:text-base">
                A digital company called Expandly. I built a full-stack web platform for booking digital branding services using Vite, React, JavaScript, TailwindCSS, REST API, and Firebase.
              </p>
              <p className="hidden text-2xl font-bold lg:block">// 01</p>
            </div>
            <div className="flex h-[300px] sm:h-[400px] md:h-[480px] w-full items-center justify-center text-[#858585]">
              <StackAnimation images={[expandlyLogo, expandlyIMG1, expandlyIMG2]} />
            </div>
            <p className="block text-2xl font-bold lg:hidden">// 01</p>
          </div>

          {/* Project 2 */}
          <div className="sticky bottom-36 top-auto z-[2] -mt-24 grid items-center gap-8 rounded-xl bg-[#494849] px-5 py-10 sm:px-12 lg:grid-cols-2 lg:gap-20 border border-black">
            <div className="max-w-3xl lg:grid lg:gap-32">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl lg:m-0">
                Full-Stack Mobile Development
              </h2>
              <p className="max-w-md text-sm text-[#f7f7f7] sm:text-base">
                Developed a production-ready mobile e-commerce and LMS app with Next.js, React Native Expo, TypeScript, Supabase, Zustand, and TailwindCSS.
              </p>
              <p className="hidden text-2xl font-bold lg:block">// 02</p>
            </div>
            <div className="flex h-[300px] sm:h-[400px] md:h-[480px] w-full items-center justify-center text-[#858585]">
              <StackAnimation images={[insightIMG, insightIMG, insightIMG]} />
            </div>
            <p className="block text-2xl font-bold lg:hidden">// 02</p>
          </div>

          {/* Project 3 */}
          <div className="sticky bottom-12 top-auto mb-12 grid items-center gap-8 rounded-xl bg-[#494849] px-5 py-10 sm:px-12 lg:grid-cols-2 lg:gap-20 border border-black">
            <div className="max-w-3xl lg:grid lg:gap-32">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl lg:m-0">
                AI/ML Symptom Checker
              </h2>
              <p className="max-w-md text-sm text-[#f7f7f7] sm:text-base">
                Built a full-stack Python/Django app that identifies user symptoms through voice, image scan, or typed input using AI/ML techniques.
              </p>
              <p className="hidden text-2xl font-bold lg:block">// 03</p>
            </div>
            <div className="flex h-[300px] sm:h-[400px] md:h-[480px] w-full items-center justify-center text-[#858585]">
              <StackAnimation images={[expandlyLogo, expandlyLogo, expandlyLogo]} />
            </div>
            <p className="block text-2xl font-bold lg:hidden">// 03</p>
          </div>

        </div>

        <a
          className="text-white mt-12 hover:underline cursor-pointer font-bold text-xl flex items-center justify-center"
          href="https://www.github.com/gavinalgin"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all my Projects.
        </a>
      </div>
    </section>
  );
};

export default PortfolioSlide;
