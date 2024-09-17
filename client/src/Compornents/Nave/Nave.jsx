import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="path_to_logo" // Replace with actual logo path
            alt="TravelTreck Logo"
            className="h-10 w-auto"
          />
          <div>
            <h1 className="text-xl font-bold text-blue-500">TravelTreck</h1>
            <p className="text-sm text-gray-500">Unveil the Wonders of Sri Lanka</p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 text-gray-700">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-500">
            Contact us
          </Link>
        </div>

        {/* Buttons */}
        <div className="space-x-4">
          <Link to="/signin">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Sign in
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-400">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
