import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-black dark:text-[#3FFF00]">
          &copy; {new Date().getFullYear()} Harsh Gupta. All Rights Reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/harsh-gupta-83514825b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 text-black dark:text-[#3FFF00]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/harshgupta2108"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-black dark:text-[#3FFF00]"
          >
            GitHub
          </a>
          <a
            href="mailto:harshgupta89232108@gmail.com"
            className="hover:text-green-500 text-black dark:text-[#3FFF00]"
          >
            Email
          </a>
        </div>
        <p className="mt-4 text-xs text-black dark:text-[#3FFF00]">
          Built with ❤️ by Harsh | Powered by React & Bootstrap CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
