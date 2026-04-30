import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme;
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-[9999] p-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      aria-label="Toggle Theme"
      title="Toggle Theme"
    >
      {theme === "light" ? (
        <FiMoon className="w-6 h-6 transition-transform duration-300 hover:rotate-12" />
      ) : (
        <FiSun className="w-6 h-6 transition-transform duration-300 hover:rotate-90" />
      )}
    </button>
  );
};

export default ThemeToggle;
