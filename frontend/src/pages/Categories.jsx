import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: "Comedy",
      color: "bg-purple-200",
      to: "/categories/Comedy",
      img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/07/tkss-1658298331.jpg",
    },
    {
      name: "Business",
      color: "bg-green-200",
      to: "/categories/Business",
      img: "https://img.freepik.com/free-vector/hand-drawn-business-innovation-illustration_23-2149153450.jpg",
    },
    {
      name: "Education",
      color: "bg-red-200",
      to: "/categories/Education",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YuliiBLIAAl0m1LKe87oFxRywvIWR7ZgE4S-I5wDPAcs6e0aPXNO_pdoj4me8HlE9oY&usqp=CAU",
    },
    {
      name: "Hobbies",
      color: "bg-zinc-200",
      to: "/categories/Hobby",
      img: "https://www.campustimes.org/wp-content/uploads/2022/09/Catherine_xie_hobbies_CT-800x560-c-default.png",
    },
    {
      name: "Government",
      color: "bg-indigo-200",
      to: "/categories/Government",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_of_India_logo.svg/1200px-Government_of_India_logo.svg.png",
    },
    {
      name: "International Relations",
      color: "bg-blue-200",
      to: "/categories/InternationalRelations",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-YLBHR4ElNrA04AMTqpZ5jDQeZqZX4xahw&s",
    },
  ];

  return (
    <div className="h-screen lg:h-[78vh] bg-gray-100">
      <div className="px-4 lg:px-12 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {categories.map((item, index) => (
          <Link
            to={item.to}
            key={index}
            className={`rounded-xl shadow-lg overflow-hidden relative ${item.color} hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:rounded-3xl`}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-40 transition-all duration-300 ease-in-out rounded-xl"></div>

            <div className="p-6 flex flex-col justify-center items-center transition-all duration-300 ease-in-out">
              {/* Category Name with Hover Effect */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-900">
                {item.name}
              </h2>

              {/* Image with Hover Zoom and Shadow Effect */}
              <div className="w-full flex justify-center mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-lg h-[15vh] sm:h-[18vh] md:h-[20vh] lg:h-[24vh] object-cover transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl"
                />
              </div>
            </div>

            {/* Optional Skeleton Loader (for when content is loading) */}
            <div className="absolute inset-0 bg-gray-300 opacity-20 hover:opacity-0 transition-all duration-300 ease-in-out rounded-xl"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
