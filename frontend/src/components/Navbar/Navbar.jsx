import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [MobileNav, setMobileNav] = useState(false);

  // Define the navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "All Podcasts", path: "/all-podcasts" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="px-6 md:px-8 lg:px-12 py-4 relative">
      <div className="flex items-center justify-between">
        {/* Brand Name */}
        <div className="logo brand-name w-2/6 flex items-center gap-4">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/658/658047.png" 
            alt="Logo" 
            className="h-12" 
          />
          <Link 
            to="/" 
            className="text-3xl font-bold text-gray-800 hover:text-blue-500"
          >
            Podcaster
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center justify-center space-x-6">
          {navLinks.map((items, i) => (
            <Link
              key={i}
              to={items.path}
              className="text-lg text-gray-700 hover:text-blue-500 transition-all duration-300"
            >
              {items.name}
            </Link>
          ))}
        </div>

        {/* Login / Sign Up Buttons (Desktop) */}
        <div className="hidden lg:flex items-center justify-end space-x-4">
          <Link 
            to="/login"
            className="px-6 py-2 border border-gray-600 rounded-full text-gray-800 hover:bg-gray-100 transition-all duration-300"
          >
            Login
          </Link>
          <Link 
            to="/signup"
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden w-4/6 flex items-center justify-end">
          <button 
            className="text-4xl"
            onClick={() => setMobileNav(!MobileNav)}
          >
            <IoReorderThreeOutline />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-blue-100 z-50 transition-transform duration-300 ${MobileNav ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="p-8 flex items-center justify-end text-3xl">
          <button 
            onClick={() => setMobileNav(!MobileNav)} 
            className="bg-black text-white rounded-full p-2"
          >
            <ImCross />
          </button>
        </div>
        
        <div className="h-full flex-col items-center justify-center space-y-8">
          {navLinks.map((items, i) => (
            <Link
              key={i}
              to={items.path}
              className="text-3xl text-gray-800 hover:font-semibold transition-all duration-300"
            >
              {items.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="text-3xl text-gray-800 hover:font-semibold transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-3xl text-gray-800 hover:font-semibold transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
