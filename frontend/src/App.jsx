import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'; // Navbar component
import Home from './pages/Home'; // Home component
import MainLayout from './layout/MainLayout'; // Main layout
import AuthLayout from './layout/AuthLayout'; // Auth layout
import Signup from "./pages/signup";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
const App = () => {
  return (
    <div className="App">
      <Router>
        {/* Navbar will always be displayed */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} /> 
            <Route path="/categories" element={<Categories />} />
          </Route>

          {/* Auth Layout for authentication-related pages */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="Signup" element={<Signup />} /> {/* Signup page */}
            <Route path="/login" element={<Login />} /> 
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
