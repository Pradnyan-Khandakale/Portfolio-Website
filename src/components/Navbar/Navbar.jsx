import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-white/80 dark:bg-[#050414]/50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-gray-900 dark:text-white py-5 flex justify-between items-center transition-colors duration-300">
        {/* 🔄 Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-green-500">&lt;</span>
          <span className="text-gray-900 dark:text-white transition-colors duration-300">Pradnyan</span>
          <span className="text-green-500">/</span>
          <span className="text-gray-900 dark:text-white transition-colors duration-300">Khandakale</span>
          <span className="text-green-500">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-all duration-300 delay-100
              hover:text-green-400 hover:scale-105
              ${activeSection === item.id ? "text-green-400" : ""}`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Pradnyan-Khandakale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-300 transition-all duration-300 delay-100
            hover:text-green-400 hover:scale-110
            hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.7)]"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/pradnyan-khandakale/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-300 transition-all duration-300 delay-100
            hover:text-green-400 hover:scale-110
            hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.7)]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-green-500 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-green-500 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-white/95 dark:bg-[#050414]/70 backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden transition-colors duration-300">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition duration-300
                hover:text-green-400
                ${activeSection === item.id ? "text-green-400" : ""}`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-4">
              <a
                href="https://github.com/Pradnyan-Khandakale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/pradnyan-khandakale/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
