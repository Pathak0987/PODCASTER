import React, { useState } from "react";
import { Link } from "react-router-dom"; // Correct import statement

const Signup = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      console.log(values); // Logs the form values to the console
    } catch (error) {
      console.log(error); // Logs any errors to the console
    }
  };

  return (
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
              <Link to="/Login" className="font-semibold hover:text-blue-600">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
