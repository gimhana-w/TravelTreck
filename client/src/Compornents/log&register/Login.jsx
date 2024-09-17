import React from 'react';
import Navbar from '../Nave/Nave.jsx'; // Make sure the path is correct
import Footer from '../footer/Footer.jsx'; // Ensure this is correct

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex">
        {/* Left Section */}
        <div className="w-1/2 h-screen bg-blue-900 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">TravelTreck</h1>
          <p className="text-lg mb-6">Welcome to your travel destination</p>
          <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
            Learn More
          </button>
        </div>

        {/* Right Section */}
        <div className="w-1/2 h-screen flex flex-col justify-center items-center bg-white">
          <div className="w-full max-w-md px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hello Again!</h2>
            <p className="text-gray-600 mb-4">Welcome back, please login to your account</p>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-600">Username</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label className="block text-gray-600">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>

              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Login
              </button>
            </form>

            <div className="mt-4 text-blue-500 hover:underline">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;
