import React from 'react';

const Home = () => {
  return (
    <div className="bg-green-100 px-6 lg:px-12 h-screen lg:h-[89vh] flex flex-col items-center justify-center">
      {/* Main Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Left Section */}
        <div className="w-full lg:w-5/6 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
            Create & listen to the <br />
            <span className="flex items-center justify-center lg:justify-start gap-2">
              <span className="text-6xl">P</span>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2113/2113324.png"
                alt="headphone"
                className="h-20"
              />
              <span className="text-6xl">dcast</span>
            </span>
          </h1>
        </div>

        {/* Right Section with "Scroll Down" Button */}
        <div className="hidden lg:block w-1/6">
          <div className="py-4 border border-black text-xl font-semibold rounded-full text-center rotate-90">
            Scroll Down
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section with Text and Button */}
        <div className="text-center lg:text-left">
          <p className="text-xl font-semibold">
            Listen to the most popular podcasts on just one platform - <b>PODCASTER</b>
          </p>
          <button className="px-6 py-4 bg-green-900 text-white font-semibold rounded-full mt-8">
            Login to listen
          </button>
        </div>

        {/* Right Section with App Info */}
        <div className="text-center lg:text-right mt-6 lg:mt-0">
          <p className="text-zinc-600 font-bold">
            Our app contains more than 2000 podcasts for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
