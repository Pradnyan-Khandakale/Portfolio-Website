import React, { useState, useEffect } from "react";
import { projects } from "../../constant.js";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[12vw] font-sans relative"
    >
      {/* SECTION TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>

        {/* 🔄 Purple → Green */}
        <div className="w-32 h-1 bg-green-500 mx-auto mt-4" />

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of projects highlighting my skills and experience
        </p>
      </div>

      {/* PROJECT GRID */}
      <div
        data-aos="fade-up"
        className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="
              border border-white/20 
              bg-gray-900 backdrop-blur-md 
              rounded-2xl shadow-2xl overflow-hidden cursor-pointer
              
              transition-all duration-300 delay-100
              
              hover:-translate-y-2
              hover:shadow-[0_0_35px_rgba(34,197,94,0.5)]
            "
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-500 line-clamp-3 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="
                      bg-[#0f1a14] text-xs text-green-400 
                      px-2 py-1 rounded-full
                      border border-green-500/20
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          data-aos="fade-up"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
            {/* CLOSE BUTTON */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-50 text-white text-3xl font-bold 
              transition duration-300 hover:text-green-400"
            >
              &times;
            </button>

            {/* CONTENT */}
            <div className="overflow-y-auto max-h-[90vh]">
              <div className="p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[300px] object-contain rounded-xl"
                />
              </div>

              <div className="px-6 pb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {selectedProject.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="
                        bg-[#0f1a14] text-xs text-green-400 
                        px-2 py-1 rounded-full
                        border border-green-500/20
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-1/2 bg-gray-800 
                      hover:bg-green-900 
                      text-gray-300 px-4 py-2 rounded-xl text-center font-semibold
                      transition duration-300
                    "
                  >
                    View Code
                  </a>

                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-1/2 bg-green-600 
                      hover:bg-green-500 
                      text-white px-4 py-2 rounded-xl text-center font-semibold
                      transition duration-300
                      hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]
                    "
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
