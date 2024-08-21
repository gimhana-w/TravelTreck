// client/src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Tourist Guide and Travel Planner</h1>
      <Link to="/plan-trip" className="btn btn-primary">Plan Your Trip</Link>
    </div>
  );
};

export default HomePage;
