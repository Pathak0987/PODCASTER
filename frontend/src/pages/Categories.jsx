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
  ];

  return (
    <div className="h-screen lg:h-[78vh]">
      <div className="px-4 lg:px-12 py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((item, index) => (
          <Link
            to={item.to}
            key={index}
            className={`rounded-lg shadow-lg overflow-hidden relative ${item.color} hover:scale-105 transform transition-all`}
          >
            <div className="p-6 flex flex-col justify-center items-center">
              <h2 className="text-2xl font-semibold mb-4">{item.name}</h2>
              <div className="w-full flex justify-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-lg h-[15vh] md:h-[18vh] lg:h-[20vh] object-cover"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
