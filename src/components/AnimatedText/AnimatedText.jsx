import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clipboard, Check } from "lucide-react";

const AnimatedText = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const email = "manavrastogi501@gmail.com"; // Change to your email
  const [copied, setCopied] = useState(false);

  // Function to copy email to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen text-center px-4"
    >
      {/* Animated Heading */}
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-gray-900 dark:text-white font-[Pacifico]"
      >
        From <span className="text-[#3FFF00]">Vision</span> to <span className="text-[#3FFF00]">Execution</span>
      </motion.h1>

      {/* Subheading Animation */}
      <motion.h2
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-2xl text-gray-700 dark:text-gray-300 mt-2 font-[Pacifico]"
      >
        Let’s <span className="text-[#3FFF00]">Make It Real!</span>
      </motion.h2>

      {/* Animated Box */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative mt-10 bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center"
      >
        {/* Animated Text Inside the Box */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-xl  font-semibold text-gray-900 dark:text-white mb-4"
        >
          "Your next <span className="text-[#3FFF00]">big</span> project <span className="text-[#3FFF00]">starts here</span>!"
        </motion.p>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="bg-gray-200 dark:bg-gray-700 p-4 px-6 rounded-full flex items-center gap-4 shadow-md cursor-pointer 
          hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
          onClick={copyToClipboard}
        >
          {/* Show Clipboard Icon or Check Icon */}
          {copied ? <Check size={20} className="text-green-500" /> : <Clipboard size={20} className="text-gray-700 dark:text-gray-300" />}
          <span className="text-lg font-medium text-gray-900 dark:text-white">{email}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedText;
