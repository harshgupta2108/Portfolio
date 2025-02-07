import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-black dark:text-[#3FFF00]">
          &copy; {new Date().getFullYear()} Manav Rastogi. All Rights Reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/manavrastogi03/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 text-black dark:text-[#3FFF00]"
          >
            LinkedIn
          </a>
          <a
            href="http://github.com/ManavRastogi03"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-black dark:text-[#3FFF00]"
          >
            GitHub
          </a>
          <a
            href="mailto:manavrastogi501@gmail.com"
            className="hover:text-green-500 text-black dark:text-[#3FFF00]"
          >
            Email
          </a>
        </div>
        <p className="mt-4 text-xs text-black dark:text-[#3FFF00]">
          Built with ❤️ by Manav Rastogi | Powered by React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
