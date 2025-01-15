import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(res.ok){
        navigate('/sign-in');
      }
    } catch (error) {}
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8 w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 text-center mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Password
            </label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          <button className="w-full py-2 border border-gray-300 rounded-md text-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
            Continue with Google
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
