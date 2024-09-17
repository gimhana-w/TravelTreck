// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow px-4 py-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">Hello, Chamodi 👋</h2>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="border rounded px-3 py-1 focus:outline-none"
        />
        <img
          src="path_to_user_image" // Update this with the actual image path
          alt="User Avatar"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
