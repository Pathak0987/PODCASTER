import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home'; // Adjusted import path
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
        {/* Define the Routes and the Components they map to */}
        <Route path="/" element={<Homee />} />
        <Route path="/about" element={<About />} />
        <Route path="/all-podcasts" element={<AllPodcasts />} />
      </Routes>
    </Router>
  );
};

export default App;
