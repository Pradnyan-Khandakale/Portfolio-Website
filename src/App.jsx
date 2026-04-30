import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

// ✅ AOS imports
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  // ✅ Initialize AOS AFTER component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="relative w-full max-w-[100vw] overflow-x-hidden bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      <ThemeToggle />

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
