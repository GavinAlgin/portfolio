// src/App.tsx
import React, { useEffect, useState } from "react";
import BentoGrid from "./components/BentoGrid";
import ContactUs from "./components/ContactUs";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import PortfolioSlide from "./components/PortfolioSlide";
import LoadingPage from "./lib/LoadingPage";
import Footers from "./components/Footers";

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
    <div>
      <Navbar />
      <HeroSection />
      <BentoGrid />
      <PortfolioSlide />
      <ContactUs />
      <Footers />
    </div>
  );
}

export default App;
