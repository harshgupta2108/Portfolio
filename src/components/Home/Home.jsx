import React from "react";
import Social from "./Social.jsx";
import Data from "./Data.jsx";
import Image from "../../assets/harsh.png";

function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-12 space-y-8 lg:space-y-0">
      {/* Left Section - Social with Slide Animation */}
      <div className="lg:w-1/4 flex justify-center lg:justify-start lg:items-center animate-slideFromTop">
        <Social />
      </div>

      {/* Center Section - Data */}
      <div className="lg:w-1/2 text-center flex justify-center lg:items-center">
        <Data />
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/4 flex justify-center lg:justify-end lg:items-center">
        <img
          src={Image}
          alt="Your Image"
          className="w-60 h-60 rounded-full object-cover"
        />
      </div>
    </div>
  );
}

export default Home;
