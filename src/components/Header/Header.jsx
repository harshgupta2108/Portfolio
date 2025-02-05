import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [colorChange, setColorChange] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

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
    setMenuOpen(false); // Close mobile menu on click
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    setColorChange(true);
    setTimeout(() => {
      setColorChange(false);
    }, 3000);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center z-50 px-6 md:px-10"
    >
      {/* Logo with Animated Color Change */}
      <motion.div
        animate={{ color: colorChange ? "#3FFF00" : darkMode ? "#fff" : "#111" }}
        transition={{ duration: 0.3 }}
        className="font-pacifico text-2xl font-bold"
      >
        Manav_Rastogi
      </motion.div>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl dark:text-white">
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navigation Links (Desktop) */}
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
        className="font-pacifico hidden md:flex space-x-8 text-lg font-semibold text-gray-900 dark:text-white"
      >
        {["home", "about", "skills", "services", "projects", "contact"].map((item, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
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

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 right-0 w-2/3 h-full bg-white dark:bg-gray-900 shadow-lg flex flex-col items-center justify-center space-y-6 text-lg font-semibold text-gray-900 dark:text-white md:hidden"
        >
          {["home", "about", "skills", "services", "projects", "contact"].map((item, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToSection(item)}
              className="text-xl"
              whileTap={{ scale: 0.9 }}
            >
              {item.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Dark Mode Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleDarkModeToggle}
        className="hidden md:block p-2 bg-gray-300 dark:bg-gray-700 rounded-md transition-all duration-300"
      >
        {darkMode ? "🌙" : "☀️"}
      </motion.button>
    </motion.nav>
  );
}

export default Header;
