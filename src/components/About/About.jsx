import React from "react";
import profileImage from "../../assets/Manav.png"; // Replace with your actual image path

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md animate-fade-in">
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
          <img
            src={profileImage}
            alt="Your Name"
            className="w-40 h-40 rounded-full shadow-lg"
          />
        </div>

        {/* About Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition">
              <div className="text-xl font-bold">1 year</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Experience</div>
            </div>
            <div className="text-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition">
              <div className="text-xl font-bold">10+ projects</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Completed</div>
            </div>
            <div className="text-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition">
              <div className="text-xl font-bold">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Support</div>
            </div>
          </div>

          {/* About Text */}
          <p className="text-gray-700 font-pacifico dark:text-[#3FFF00] mb-6">
          I am a passionate Full Stack Developer with a strong foundation in Frontend technologies such as HTML, CSS, JavaScript, React.js, and Tailwind CSS. My expertise extends to Backend technologies like Express.js, Node.js, and MongoDB, enabling me to build robust, full-stack web applications. I’m also well-versed in GitHub for version control and JWT for secure authentication.

In addition to web development, I’m enthusiastic about Data Science, Generative AI, and Power BI. I enjoy experimenting with new technologies and constantly improving my skills to create innovative, scalable solutions. I bring creativity, attention to detail, and a dedication to delivering high-quality projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
