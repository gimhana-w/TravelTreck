// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">Admin</h1>
      <ul className="space-y-4">
        <li><Link to="/users" className="hover:text-blue-400">System users</Link></li>
        <li><Link to="/finance" className="hover:text-blue-400">Finance</Link></li>
        <li><Link to="/vehicles" className="hover:text-blue-400">Vehicle manager</Link></li>
        <li><Link to="/packages" className="hover:text-blue-400">Package</Link></li>
        <li><Link to="/ads" className="hover:text-blue-400">Advertisement</Link></li>
        <li><Link to="/reviews" className="hover:text-blue-400">Reviews</Link></li>
        <li><Link to="/adventure" className="hover:text-blue-400">Adventure</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
