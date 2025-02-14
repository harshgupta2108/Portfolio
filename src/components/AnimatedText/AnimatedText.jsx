import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedText = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div ref={ref} className="flex flex-col items-center justify-center h-screen text-center px-4">
      {/* First Line Animation: Left to Right */}
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-gray-900 dark:text-white font-[Pacifico]"
      >
        From <span className="text-[#3FFF00]">Vision</span> to <span className="text-[#3FFF00]">Execution</span>
      </motion.h1>

      {/* Second Line Animation: Right to Left */}
      <motion.h2
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-2xl text-gray-700 dark:text-gray-300 mt-2 font-[Pacifico]"
      >
        Let’s <span className="text-[#3FFF00]">Make It Real!</span>
      </motion.h2>
    </div>
  );
};

export default AnimatedText;
