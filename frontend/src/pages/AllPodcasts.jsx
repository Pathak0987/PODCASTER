import React from "react";
import { Link } from "react-router-dom";

const AllPodcasts = () => {
  const podcasts = [
    {
      name: "Tech Talks",
      description: "Latest trends in technology, gadgets, and more.",
      img: "https://images.unsplash.com/photo-1604675732284-4c0e3f3d3c3b",
      to: "/podcasts/tech-talks",
    },
    {
      name: "Health & Wellness",
      description: "Insights into health, fitness, and well-being.",
      img: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
      to: "/podcasts/health-wellness",
    },
    {
      name: "Business Insights",
      description: "Discussing the latest in business, entrepreneurship, and finance.",
      img: "https://images.unsplash.com/photo-1593642532954-8e08fca55b55",
      to: "/podcasts/business-insights",
    },
    {
      name: "Travel Adventures",
      description: "Explore exciting travel stories and destinations.",
      img: "https://images.unsplash.com/photo-1518709268804-f6e7bc4bc16f",
      to: "/podcasts/travel-adventures",
    },
    {
      name: "Education & Learning",
      description: "Podcasts for educators and lifelong learners.",
      img: "https://images.unsplash.com/photo-1521747116042-5e7a80d5c3e8",
      to: "/podcasts/education-learning",
    },
  ];

  return (
    <div className="h-screen bg-gray-100">
      <div className="px-4 lg:px-12 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {podcasts.map((podcast, index) => (
          <Link
            to={podcast.to}
            key={index}
            className="rounded-lg shadow-lg overflow-hidden relative bg-white hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-xl"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-40 transition-all duration-300 ease-in-out rounded-lg"></div>

            <div className="p-6 flex flex-col justify-center items-center transition-all duration-300 ease-in-out">
              {/* Podcast Title */}
              <h2 className="text-xl font-semibold text-gray-800 mb-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-900">
                {podcast.name}
              </h2>

              {/* Podcast Description */}
              <p className="text-sm text-gray-600 mb-4 text-center">
                {podcast.description}
              </p>

              {/* Podcast Image */}
              <div className="w-full flex justify-center">
                <img
                  src={podcast.img}
                  alt={podcast.name}
                  className="rounded-lg h-[15vh] sm:h-[18vh] md:h-[20vh] lg:h-[24vh] object-cover transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllPodcasts;
