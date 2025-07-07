// src/App.tsx
import { useEffect, useState } from "react";
import BentoGrid from "./components/BentoGrid";
import ContactUs from "./components/ContactUs";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import LoadingPage from "./lib/LoadingPage";
import Footers from "./components/Footers";
import ProjectsCount from "./components/ProjectsCount";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {  
    const timer = setTimeout(() => {
      setIsLoading(false);  
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div id="MainContent">
      <Navbar />
      <HeroSection />
      <BentoGrid />
      <ProjectsCount />
      <ProjectsSection />
      <ContactUs />
      <br/>
      <Footers />
    </div>
  );
}

export default App;
