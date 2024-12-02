import React, { useEffect } from "react"; // Import React and useEffect together
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'; // Navbar component
import Home from './pages/Home'; // Home component
import MainLayout from './layout/MainLayout'; // Main layout
import AuthLayout from './layout/AuthLayout'; // Auth layout
import Signup from "./pages/signup";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import AllPodcasts from "./pages/AllPodcasts";
import Profile from "./pages/profile";
import axios from "axios"; // Import axios
import ErrorPage from "./pages/ErrorPage";
import AddPodcast from "./pages/AddPodcast";
import { useDispatch } from "react-redux";
import InputPodcast from "./components/Addpodcast/inputPodcast";

const App = () => {
  const dispatch = useDispatch(); // Use dispatch to dispatch actions

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1000/api/v1/check-cookie", // Corrected URL
          { withCredentials: true } // Ensure cookies are sent
        );
        if (res.data.message === true) {
          dispatch(authActions.login()); // Dispatch login action
        }
        console.log(res.data.message); // Log the response
      } catch (error) {
        console.error("Error fetching data:", error); // Handle errors
      }
    };

    fetchData(); // Call the async function
  }, []); // Ensure dispatch is included as dependency for useEffect

  return (
    <div className="App">
      <Router>
        {/* Navbar will always be displayed */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} /> 
            <Route path="/categories" element={<Categories />} />
            <Route path="/all-podcasts" element={<AllPodcasts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-podcast" element={<AddPodcast />} />
            <Route path="/input-podcast" element={<InputPodcast />} />
          </Route>

          {/* Auth Layout for authentication-related pages */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="signup" element={<Signup />} /> {/* Fixed path to lowercase */}
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
