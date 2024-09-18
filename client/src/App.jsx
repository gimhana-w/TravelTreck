import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Compornents/Home/Home.jsx';
import SignIn from './Compornents/log&register/Login.jsx'; // Assuming the path to your SignIn component
import SignUp from './Compornents/log&register/Register.jsx';
import Dashboard from './Compornents/Admin/Dashbord.jsx';


function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard/>} /> {/* Sign In route */}
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
