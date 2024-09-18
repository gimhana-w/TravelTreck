// Dashboard.jsx
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import UsersTable from './UsersTable';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow bg-gray-100">
        <Header />
        
        <main className="p-6">
          <UsersTable />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
