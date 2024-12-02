import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { authActions } from "../store/auth";
import ErrorPage from "./ErrorPage";

const Login = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Set initial values for email and password
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile");
    }
  }, [isLoggedIn, navigate]);

  // Handle input change for form fields
  const change = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Handle form submit (for login)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!values.email || !values.password) {
      toast.error("Email and password are required!");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:1000/api/v1/login", // API endpoint
        values,
        { withCredentials: true } // Include cookies for authentication
      );
      dispatch(authActions.login(res.data)); // Dispatch login action with user data
      navigate("/profile"); // Navigate to the profile page on success
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      toast.error(errorMessage); // Show toast message
      console.error("Login error:", error);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <ErrorPage />
      ) : (
        <div className="h-screen bg-green-100 flex items-center justify-center">
          <div className="w-4/6 md:w-3/6 lg:w-2/6 flex flex-col items-center justify-center">
            {/* Link to Home */}
            <Link to="/" className="text-2xl font-bold mb-6">
              PODCASTER
            </Link>

            {/* Form container */}
            <div className="mt-6 w-full">
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

              {/* Login Button */}
              <div className="w-full flex flex-col mt-4">
                <button
                  className="bg-green-900 font-semibold text-xl text-white rounded py-2"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>

              {/* Signup Link */}
              <div className="w-full flex flex-col mt-4">
                <p className="text-center">
                  Do not have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-semibold hover:text-blue-600"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Toast Container */}
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default Login;
