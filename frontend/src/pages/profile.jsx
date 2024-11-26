import React from 'react';

const Profile = () => {
  return (
    <div className="profile-container p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      
      <div className="profile-details">
        <p className="text-lg"><strong>Username:</strong> JohnDoe</p>
        <p className="text-lg"><strong>Email:</strong> johndoe@example.com</p>
        <p className="text-lg"><strong>Member since:</strong> January 2021</p>
      </div>

      {/* You can also add an edit button or further profile options */}
      <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2">
        Edit Profile
      </button>
    </div>
  );
};

export default Profile;
