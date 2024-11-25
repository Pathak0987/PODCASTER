import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import Navbar from './components/Navbar/Navbar';

// Define placeholder components for each route
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const AllPodcasts = () => <h2>All Podcasts Page</h2>; // Placeholder for AllPodcasts

const App = () => {
  return (
    <Router>
      {/* Add Navbar component here so it appears on all pages */}
      <Navbar />

      <Routes>
        {/* Define the Routes and the Components they map to */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/all-podcasts" element={<AllPodcasts />} />
      </Routes>
    </Router>
  );
};

export default App;
