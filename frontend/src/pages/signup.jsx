import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios"; // Import axios

const Signup = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle input field changes
  const change = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const res = await axios.post(
        'http://localhost:1000/api/v1/signup', // Your signup endpoint
        values // Send the form values as the request body
      );
      toast.success('Signup successful!'); // Show success message
      navigate("/login"); // Navigate to login page
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <ErrorPage /> // You need to create this component if it's not done already
      ) : (
        <div className="h-screen bg-green-100 flex items-center justify-center">
          <div className="w-4/6 md:w-3/6 lg:w-2/6 flex flex-col items-center justify-center">
            {/* Link to Home */}
            <Link to="/" className="text-2xl font-bold mb-6">
              PODCASTER
            </Link>

            {/* Form container */}
            <div className="mt-6 w-full">
              {/* Username Field */}
              <div className="w-full flex flex-col mb-4">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="mt-2 px-2 py-2 rounded outline-none border border-black"
                  required
                  placeholder="Username"
                  name="username"
                  value={values.username}
                  onChange={change}
                />
              </div>

              {/* Email Field */}
              <div className="w-full flex flex-col mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="mt-2 px-2 py-2 rounded outline-none border border-black"
                  required
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={change}
                />
              </div>

              {/* Password Field */}
              <div className="w-full flex flex-col mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="mt-2 px-2 py-2 rounded outline-none border border-black"
                  required
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={change}
                />
              </div>

              {/* Signup Button */}
              <div className="w-full flex flex-col mt-4">
                <button
                  className="bg-green-900 font-semibold text-xl text-white rounded py-2"
                  onClick={handleSubmit}
                >
                  Signup
                </button>
              </div>

              {/* Login Link */}
              <div className="w-full flex flex-col mt-4">
                <p className="text-center">
                  Already have an account?{" "}
                  <Link to="/login" className="font-semibold hover:text-blue-600">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* Toast Container for toasts */}
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default Signup;
