import React from "react";
import InputPodcast from "../Addpodcast/inputPodcast";
import { Link } from "react-router-dom";

const YourPodcasts = () => {
  return (
    <div className="px-4 lg:px-12 my-6">
      <div className="flex items-center justify-between gap-6 mb-6">
        <h1 className="text-2xl font-semibold md:font-bold text-gray-800">
          Your Podcasts
        </h1>
        <Link
          to="/add-podcast"
          className="bg-green-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition-all ease-in-out"
        >
          Add Podcast
        </Link>
      </div>

      {/* Conditionally render InputPodcast component when on /add-podcast route */}
      <div>
        <InputPodcast /> {/* This will render the InputPodcast component */}
      </div>

      {/* Example of list of podcasts (optional, to enhance visual appeal) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example Podcast Card */}
        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700">Podcast Title</h2>
          <p className="text-gray-500 mt-2">Short description of the podcast...</p>
          <Link
            to="/podcast/1"
            className="text-blue-600 mt-4 block text-sm hover:text-blue-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YourPodcasts;
