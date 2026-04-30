import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../../assets/profile2.png";
import BlurBlob from "../../BlurBlob";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <BlurBlob
        position={{ top: "50%", left: "50%" }}
        size={{ width: "350px", height: "350px" }}
      />
      
      <div className="relative z-10 flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300 mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white transition-colors duration-300 mb-4 leading-tight break-words">
            Pradnyan Khandakale
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#22c55e] leading-tight">
            <span className="text-gray-900 dark:text-white transition-colors duration-300">I am </span>
            <Typewriter
              words={[
                "a Python Fullstack Developer",
                "a MERN Developer",
                "an AI/ML Enthusiast ",
                "a Data Analyst",
                "a Quick Learner",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-400 transition-colors duration-300 mb-10 mt-8 leading-relaxed">
            Motivated Computer Science fresher seeking AI/ML Engineer, Data
            Analyst, or Full Stack Java Developer roles, with hands-on project
            experience in data analysis, machine learning fundamentals, full
            stack development, and strong problem-solving skills.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/19y00CPGH3SYubY3cu_eWeaufMmrca495/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 shadow-md dark:shadow-[0_0_10px_rgba(34,197,94,0.6),0_0_30px_rgba(34,197,94,0.4)] dark:hover:shadow-[0_0_40px_rgba(34,197,94,0.7)]"
            style={{
              background: "linear-gradient(90deg, #16a34a, #22c55e)",
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div
            className="
    w-40 h-40
    sm:w-56 sm:h-56
    md:w-72 md:h-72
    lg:w-80 lg:h-80
    rounded-full border-4 border-green-400 
    transition-transform duration-300 ease-out
    hover:scale-105
  "
          >
            <img
              src={profileImage}
              alt="Pradnyan Khandakale"
              className="w-full h-full rounded-full object-cover
               shadow-xl dark:shadow-[0_15px_40px_rgba(34,197,94,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
