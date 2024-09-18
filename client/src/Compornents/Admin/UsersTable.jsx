// UsersTable.jsx
import React from 'react';

const UsersTable = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add User</button>
        <div className="flex items-center space-x-2">
          <button className="bg-gray-200 px-4 py-2 rounded-lg">Filters</button>
          <button className="bg-gray-200 px-4 py-2 rounded-lg">1 row selected</button>
        </div>
      </div>
      
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100 text-left text-sm uppercase text-gray-600">
            <th className="px-4 py-2">Learners</th>
            <th className="px-4 py-2">Roles</th>
            <th className="px-4 py-2">Occupation</th>
            <th className="px-4 py-2">Objective</th>
            <th className="px-4 py-2">Subscription</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm border-b hover:bg-gray-50">
            <td className="px-4 py-2">
              <input type="checkbox" className="mr-2" />
              Chamodi
            </td>
            <td className="px-4 py-2">Administrator</td>
            <td className="px-4 py-2">Freelance</td>
            <td className="px-4 py-2">Fluent</td>
            <td className="px-4 py-2">Free Trial</td>
            <td className="px-4 py-2 flex space-x-2">
              <button className="text-blue-500">Edit</button>
              <button className="text-red-500">Delete</button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      
      <div className="flex justify-between items-center mt-4">
        <button className="bg-gray-200 px-4 py-2 rounded-lg">Previous</button>
        <span>Page 1 of 10</span>
        <button className="bg-gray-200 px-4 py-2 rounded-lg">Next</button>
      </div>
    </div>
  );
};

export default UsersTable;
