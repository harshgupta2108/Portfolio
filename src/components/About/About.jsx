import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImage from "../../assets/new.jpeg"; // Replace with your actual image path

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center px-6 bg-gray-100 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-4xl"
      >
        {/* Profile Image Animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0 mb-6 md:mb-0 md:mr-8"
        >
          <img
            src={profileImage}
            alt="Your Name"
            className="w-40 h-40 rounded-full shadow-lg"
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl"
        >
          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[
              { label: "Experience", value: "1 year" },
              { label: "Completed", value: "5+ projects" },
              { label: "Support", value: "24/7" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition"
              >
                <div className="text-xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* About Text with Animation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-700 font-[Pacifico] dark:text-[#3FFF00] mb-6"
          >
            I am a passionate Feont End Developer with expertise in 
            (HTML, CSS, JavaScript, React.js, Bootstrap) and Database (MongoDB , MySQL). I also specialize in GitHub for
            version control and JWT authentication.
            <br />
            I have a strong interest in Data Science, Generative AI, and Power
            BI, and I’m always eager to explore new technologies to create
            scalable, innovative solutions.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
