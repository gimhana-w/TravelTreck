// client/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PlanTripPage from './components/PlanTripPage'; // Plan trip page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plan-trip" element={<PlanTripPage />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
