import React from "react";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";
import Header from "../components/Profile/Header";

const Profile = () => { // Fixed function declaration
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Corrected useSelector

  return (
    <div>
      {isLoggedIn ? ( // Corrected ternary operator placement
        <>
          <Header /> {/* Render Header if logged in */}
        </>
      ) : (
        <ErrorPage /> // Show ErrorPage if not logged in
      )}
    </div>
  );
};

export default Profile;
