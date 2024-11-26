import React from "react";
import YourPodcasts from "./YourPodcast"; // Corrected the import path

const Header = () => {
  return (
    <div>
      {/* Profile and Header Section */}
      <div className="bg-green-900 rounded-lg py-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-zinc-300 text-lg font-semibold">Profile</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-zinc-100 font-bold text-center md:text-left transition-all duration-300 ease-in-out">
            The Code Master
          </h1>
          <p className="text-zinc-300 mt-2 text-lg">tcm@gmail.com</p>
        </div>

        {/* Log Out Button */}
        <div className="mt-4 md:mt-0">
          <button className="bg-white px-6 py-3 rounded-lg text-zinc-800 font-semibold hover:shadow-xl hover:bg-zinc-200 transition-all duration-300 ease-in-out">
            Log Out
          </button>
        </div>
      </div>

      {/* YourPodcasts Component */}
      <YourPodcasts /> {/* Display the podcasts section below the profile */}
    </div>
  );
};

export default Header;
