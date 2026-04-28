import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./BlurBlob";

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
    <div className="bg-[#030712]">
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
        color="rgba(34, 197, 94, 0.3)"
      />

      <div
        className="absolute inset-0 
        bg-[linear-gradient(to_right,#22c55e1a_1px,transparent_1px),
        linear-gradient(to_bottom,#22c55e1a_1px,transparent_1px)] 
        bg-[size:14px_24px] 
        [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      ></div>

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
