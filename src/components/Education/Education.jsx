import React from "react";
import { education } from "../../constant.js";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-[8vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey and educational background
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-white/30 md:-translate-x-1/2"></div>

        {/* Education Items */}
        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className={`relative mb-20 flex w-full ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-gray-900 border-4 border-[#8245ec] flex items-center justify-center">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>

              {/* Education Card */}
              <div
                className={`w-full md:w-[46%] bg-gray-900 border border-white/20 rounded-2xl
                p-6 md:p-8 pl-14 md:pl-8 shadow-[0_0_25px_rgba(130,69,236,0.35)]
                transition-transform duration-300 hover:scale-[1.02]
                ${isLeft ? "md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"}`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-gray-300">{edu.school}</p>
                    <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
                  </div>
                </div>

                {/* Grade */}
                <p className="text-gray-300 font-medium mb-2">
                  Grade: {edu.grade}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
