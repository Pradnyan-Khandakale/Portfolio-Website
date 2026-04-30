import React from "react";
import { experiences } from "../../constant.js";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 px-[8vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">EXPERIENCE</h2>

        {/* 🔄 Purple → Green */}
        <div className="w-32 h-1 bg-green-500 mx-auto mt-4"></div>

        <p className="text-gray-700 dark:text-gray-400 transition-colors duration-300 mt-4 text-lg font-semibold">
          A collection of my work experience and roles across organizations
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-green-500/30 md:-translate-x-1/2"></div>

        {/* Experience Items */}
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={exp.id}
              className={`relative mb-20 flex w-full ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* 🔄 Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-white dark:bg-gray-900 border-4 border-green-500 flex items-center justify-center transition-colors duration-300">
                <img
                  src={exp.img}
                  alt={exp.company}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>

              {/* 🔄 Experience Card */}
              <div
                data-aos={isLeft ? "fade-right" : "fade-left"}
                className={`w-full md:w-[46%] bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/20 rounded-2xl
                p-6 md:p-8 pl-14 md:pl-8 
                shadow-md dark:shadow-[0_0_25px_rgba(34,197,94,0.35)]
                
                transition-all duration-300 delay-150
                hover:scale-[1.02]
                hover:shadow-lg dark:hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]
                
                ${isLeft ? "md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"}`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">{exp.company}</p>
                    <p className="text-xs text-gray-500 mt-1">{exp.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-400 transition-colors duration-300 text-sm leading-relaxed">
                  {exp.desc}
                </p>

                {/* 🔄 Skills */}
                <div className="mt-4">
                  <h4 className="text-gray-900 dark:text-white transition-colors duration-300 font-medium mb-2">Skills:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="px-3 py-1 text-xs rounded-md 
                        bg-green-500/80 text-white border border-green-300/30
                        transition duration-300 hover:bg-green-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
