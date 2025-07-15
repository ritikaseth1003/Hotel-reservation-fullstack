import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import "./userprofile.css";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="userProfileContainer">
        <h1 className="userProfileTitle">Your Profile</h1>
        <div className="userProfileCard">
          <div className="userProfilePicture">
            {/* Placeholder image for the profile */}
            <img
              src="data:image/png;base64,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"
              alt="User"
              className="profileImage"
            />
          </div>
          <div className="userProfileInfo">
            <label className="profileLabel">Name:</label>
            <input
              type="text"
              name="name"
              className="profileInput"
              value={userData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <label className="profileLabel">Email:</label>
            <input
              type="email"
              name="email"
              className="profileInput"
              value={userData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <label className="profileLabel">Phone:</label>
            <input
              type="tel"
              name="phone"
              className="profileInput"
              value={userData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            <label className="profileLabel">Bio:</label>
            <textarea
              name="bio"
              className="profileTextarea"
              value={userData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself"
            ></textarea>
          </div>
          <button className="profileButton" onClick={() => alert("Profile updated!")}>
            Save Changes
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
