import React from "react";

function Data() {
  const cvUrl = "https://drive.google.com/file/d/1VQrGCUx-2EQ_jFYKlUxIT72ETMbrXIZM/view?usp=drivesdk"; // Dropbox URL

  return (
    <div className="flex  flex-col items-center p-6 space-y-4  animate-diagonal">
      {/* Name and Title */}
      <div className="text-center font-pacifico animate-diagonal">
        <h1 className="text-2xl  text-center font-bold text-gray-800 dark:text-[#3FFF00] flex items-center space-x-2">
        <span>👋</span>
          <span>  Harsh Gupta</span>
          <span>👋</span>
        </h1>
        <h2 className="text-lg text-gray-500 mt-1 dark:text-[#3FFF00] animate-diagonal">
          <h2>Front End Web developer</h2>
          <h2>Tech Enthusiast</h2> 
        </h2>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-center dark:text-[#3FFF00] animate-diagonal">
        <span>I enjoy building things from the ground up and </span>
        <span>turning ideas into functional and engaging experiences in the browser  </span>
      </p>

      {/* Button */}
      <a
        href={cvUrl} // Dropbox CV URL
        download // This ensures the file will be downloaded instead of opened in the browser
        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center animate-diagonal"
      >
        <span className="mr-2">Download my CV</span>
        <span>📄</span>
      </a>
    </div>
  );
}

export default Data;
