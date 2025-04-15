import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Header() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    setColorChange(true);
    setTimeout(() => setColorChange(false), 3000);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center z-50 px-6 md:px-10"
    >
      {/* Name with Pacifico Font */}
      <motion.div
        animate={{ color: colorChange ? "#3FFF00" : darkMode ? "#fff" : "#111" }}
        transition={{ duration: 0.3 }}
        className="font-pacifico text-2xl font-bold"
      >
        Harsh Gupta
      </motion.div>

      {/* Desktop Navigation */}
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } } }}
        className="font-pacifico hidden md:flex space-x-8 text-lg font-semibold text-gray-900 dark:text-white"
      >
        {["home", "about", "skills", "services", "projects", "contact"].map((item, index) => (
          <motion.li
            key={index}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <button
              onClick={() => scrollToSection(item)}
              className="relative pb-2 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#3FFF00] transition-all duration-300"
            >
              {item.toUpperCase()}
            </button>
          </motion.li>
        ))}
      </motion.ul>

      {/* Dark Mode Button (Visible on All Screens) */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleDarkModeToggle}
        className="p-2 bg-gray-300 dark:bg-gray-700 rounded-md transition-all duration-300 ml-auto md:ml-0"
      >
        {darkMode ? "🌙" : "☀️"}
      </motion.button>
    </motion.nav>
  );
}

export default Header;
