import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import GooeyNav from "../lib/GooeyNav/GooeyNav";
import IMG from "../assets/projects_assets/scrnli_zBW2pBml0ptu5Y.png"
import IMG1 from "../assets/projects_assets/scrnli_Ugihd2rF1PNCu2.png"
import IMG2 from "../assets/clothingwebapp.png"
import IMG3 from "../assets/projects_assets/expandly.png"
import IMG4 from "../assets/projects_assets/2.png"
import IMG5 from "../assets/quadAI.png"
import IMG6 from "../assets/projects_assets/Untitled design.png"
import IMG7 from "../assets/projects_assets/billoto.png"

const App = () => {
  const [filter, setFilter] = useState("all");

  // This is the list of projects you want to display
  const projects = [
    {
      id: 1,
      title: "Mathosim Management",
      description: "Built a robust management system tailored to improve operational workflows, featuring dynamic CRUD functionalities, real-time data tracking, and customizable reporting tools. Designed for scalability and ease of use, the system supports multiple user roles and integrates with external APIs for extended functionality.",
      image: IMG,
      type: "Work",
      languages: ["Next.js", "Typescript", "React", "TailwindCSS", "PostgreSQL", "Springboot(Java)",],
      link: "https://github.com/GavinAlgin",
    },
    {
      id: 2,
      title: "Admin Management for Insight Evolution App",
      description: "Developed a comprehensive admin management dashboard for a Learning Management System (LMS) that enables streamlined user, course, and content management. The system features role-based access control, analytics dashboards, and seamless integration with the front-end user portal to ensure efficient operation and enhanced user experience.",
      image: IMG1,
      type: "Freelancing",
      languages: ["Next.js", "Node.js(Express)", "JavaScript", "Supabase", "RESTful APIs", "Shadcn UI"],
      link: "https://github.com/GavinAlgin",
    },
    {
      id: 3,
      title: "Ecommerce Website for GoodMoodDrip",
      description: "Created a fully responsive ecommerce website with secure user authentication, product catalog management, and seamless payment gateway integration. The platform offers an intuitive UI/UX, shopping cart functionality, order tracking, and admin tools for inventory and sales analytics.",
      image: IMG2,
      type: "Freelancing",
      languages: ["Vite", "JavaScript", "React", "Firebase", "TailwindCSS", "Node.js", "MongoDB", "Stripe/Oauth"],
      link: "https://github.com/GavinAlgin",
    },
    {
      id: 4,
      title: "Design and Creation of Website",
      description: "A dedicated design and website creation platform tailored to support local businesses in establishing a strong online presence. This website offers custom web design services, responsive development, and branding solutions aimed at helping small and medium enterprises grow their digital footprint with modern, user-friendly, and SEO-optimized websites.",
      image: IMG3,
      type: "Freelancing",
      languages: ["Vite", "JavaScript", "React", "Firebase", "TailwindCSS",],
      link: "https://github.com/GavinAlgin",
    },
    {
      id: 5,
      title: "TaskCo. Chrome Estension",
      description: "A productive and intelligent browser extension designed specifically for students, enhancing their everyday browsing experience. This tool offers smart features like task management, study reminders, distraction blocking, and quick access to educational resources—helping pupils stay focused, organized, and efficient while online.",
      image: IMG4,
      type: "Projects",
      languages: ["JavaScript", "TailwindCSS", "Django", "Python", "HTML5", "MySQL"],
      link: "https://github.com/GavinAlgin",
    },
    {
      id: 6,
      title: "SAAS Platform for QuadAI.",
      description: "Engineered a scalable AI driven SaaS platform offering automatiove apply to any institutes, subscription-based services with multi-tenant architecture, secure user management, and integrated billing solutions. Features include dashboard analytics, customizable user settings, and automated email notifications for improved customer engagement.",
      image: IMG5,
      type: "Projects",
      languages: ["Next.js", "Typescript", "JavaScript", "React", "TailwindCSS", "MongoDB", "OpenAI"],
      link: "https://github.com/GavinAlgin",
    },
    {
      id: 7,
      title: "Barber Mobile WebApp",
      description: "Developed a user-friendly barber booking web app that allows customers to browse services, book appointments, and receive notifications. Includes an admin panel for managing schedules, stylists, and customer data, optimizing booking efficiency and client satisfaction.",
      image: IMG6,
      type: "Freelancing",
      languages: ["React Native expo", "Typescript", "Supabase", "Zod",],
      link: "https://github.com/GavinAlgin",
    },
    {
      id: 8,
      title: "Re-Creation of Landing Pages",
      description: "Created a variety of demo projects to showcase proficiency in different technologies and frameworks. These include interactive web components, API integrations, and UI/UX experiments demonstrating problem-solving skills and adaptability in diverse development environments.",
      image: IMG7,
      type: "Freelancing",
      languages: ["JavaScript", "TailwindCSS", "HTML5", "Firebase", "GSAP", "Framer Motion"],
      link: "https://github.com/GavinAlgin",
    },
    // More projects can be added here
  ];

  // Function to handle the filtering of projects
  const handleNavClick = (type) => {
    setFilter(type);
  };

  // Filter the projects based on the selected type
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  return (
    <div className="bg-black p-8">
      <div className="container mx-auto">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <GooeyNav
            // You should pass the filter options ("all", "React", "HTML/CSS", "Firebase")
            items={["All", "Projects", "Freelancing",].map((type) => ({
              label: type,
              onClick: () => handleNavClick(type), // Update filter state when clicked
            }))}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* Description Section */}
        <p className="mt-4 mb-8 text-center text-md text-gray-300 mx-8 sm:text-lg lg:text-xl">
          A selection of projects that showcase my approach to design and development. Browse through to find detailed descriptions and technologies used in each project.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
