import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home'; // Adjusted import path
import MainLayout from './layout/MainLayout';
import AuthLayout from './layout/AuthLayout';
// Define placeholder components for each route
const Homee = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const AllPodcasts = () => <h2>All Podcasts Page</h2>; // Placeholder for AllPodcasts

const App = () => {
  return (
    <Router>
      {/* Add Navbar component here so it appears on all pages */}
      <Navbar />
      <Home ></Home>
      <Routes>
        {/* Main Layout Route */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homee />} /> {/* Home component will render here */}
        </Route>

        {/* Auth Layout Route */}
        <Route path="/auth" element={<AuthLayout />}>
          {/* You can define additional routes for authentication here */}
        </Route>
        <Route path="/signup" element ={<signup/>} />
      </Routes>
    </Router>
  );
};

export default App;
