import React from "react";
import { SkillsInfo } from "../../constant.js";

const Skills = () => (
  <section
    data-aos="fade-up"
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[10vw] xl:px-[15vw]
               font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">SKILLS</h2>

      {/* 🔄 Purple → Green */}
      <div className="w-24 h-1 bg-green-500 mx-auto mt-2" />

      <p className="text-gray-700 dark:text-gray-400 transition-colors duration-300 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-x-5 gap-y-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          data-aos="fade-up"
          key={category.title}
          className="
            bg-white dark:bg-gray-900 backdrop-blur-md
            px-6 sm:px-10 py-10
            w-full sm:w-[48%]
            rounded-2xl border border-gray-200 dark:border-white/20
            
            shadow-md dark:shadow-[0_0_20px_rgba(34,197,94,0.25)]
            hover:shadow-lg dark:hover:shadow-[0_0_35px_rgba(34,197,94,0.5)]
            
            transition-colors duration-300 delay-100
          "
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-400 transition-colors duration-300 mb-6 text-center">
            {category.title}
          </h3>

          {/* Skill Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
            {category.skills.map((skill) => (
              <div
                data-aos="fade-up"
                key={skill.name}
                title={skill.name}
                className="
                  flex items-center justify-center gap-2
                  h-14 px-3
                  border-2 border-gray-300 dark:border-gray-700 rounded-full
                  bg-white dark:bg-transparent
                  
                  transition-colors duration-300 delay-100
                  
                  hover:scale-105 
                  hover:border-green-500
                  hover:bg-gray-100 dark:hover:bg-gray-800/50 
                  hover:shadow-md dark:hover:shadow-[0_0_12px_rgba(34,197,94,0.6)]
                "
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-6 h-6 flex-shrink-0"
                />

                <span className="text-xs text-gray-800 dark:text-gray-300 transition-colors duration-300 font-medium whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
