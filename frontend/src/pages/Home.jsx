import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 px-8 py-16 h-screen">
      <div className="flex items-center justify-between gap-8">
        {/* Left section with heading */}
        <div className="w-full md:w-4/6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Create & listen to the <br />
            <span className="flex items-center justify-center md:justify-start gap-4">
              <span className="text-6xl text-white font-semibold">P</span>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2113/2113324.png"
                alt="headphone"
                className="h-12 w-12 animate-pulse"
              />
              <span className="text-6xl text-white font-semibold">dcast</span>
            </span>
          </h1>
          <p className="text-lg text-white opacity-80 mb-8">
            The best platform for creating and listening to podcasts. Tune in to endless possibilities.
          </p>
          <button className="px-6 py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-100 transition-all duration-300">
            Start Now
          </button>
        </div>

        {/* Right section (empty for now, can add an image/video) */}
        <div className="hidden md:block w-2/6">
          <img 
            src="https://via.placeholder.com/400x400" 
            alt="Podcast Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
