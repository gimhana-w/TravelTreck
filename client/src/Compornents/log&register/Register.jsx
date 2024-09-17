import React from 'react';
import Navbar from '../Nave/Nave.jsx'; // Adjust the path according to your folder structure
import Footer from '../footer/Footer.jsx'; // Adjust the path according to your folder structure

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex">
        {/* Left Section */}
        <div className="w-1/2 h-screen bg-gradient-to-r from-blue-700 to-blue-500 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">TravelTreck</h1>
          <p className="text-lg mb-6">Make your travel plan with us</p>
          <button className="px-6 py-3 bg-white text-blue-700 font-bold rounded-md hover:bg-gray-100">
            Read More
          </button>
        </div>

        {/* Right Section */}
        <div className="w-1/2  h-screen flex flex-col justify-center items-center bg-white">
          <div className="w-full max-w-md px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hello!</h2>
            <p className="text-gray-600 mb-4">Sign Up to Get Started</p>

            <form className="space-y-4">
              <div className="relative">
                <label className="sr-only">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Full Name"
                />
                <div className="absolute left-3 top-3 text-gray-500">
                  <i className="fas fa-user"></i>
                </div>
              </div>

              <div className="relative">
                <label className="sr-only">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Email Address"
                />
                <div className="absolute left-3 top-3 text-gray-500">
                  <i className="fas fa-envelope"></i>
                </div>
              </div>

              <div className="relative">
                <label className="sr-only">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Password"
                />
                <div className="absolute left-3 top-3 text-gray-500">
                  <i className="fas fa-lock"></i>
                </div>
              </div>

              <button className="w-full px-4 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SignUp;
