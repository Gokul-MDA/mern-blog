import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assets/styles/profile.css";
import Nav from "./Nav";

function Profile() {
  const [data, setData] = useState([]);
  const [user_name, setName] = useState("");
  const [bio, setBio] = useState();
  const [linkedin, setLinkedin] = useState("");
  const id = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`http://192.168.43.198:5000/profile/${id}`)
      .then((response) => setData(response.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`http://192.168.43.198:5000/profile/edit/${id}`, {
        user_name,
        bio,
        linkedin,
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Nav />
      <div className="Profile">
        <p className="profile-heading">About you</p>
        <form>
          <label className="profile-label" htmlFor="name">
            Name
          </label>
          <br />
          <input
            type="text"
            name="user_name"
            defaultValue={data.user_name}
            className="profile-input"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <p className="input-details">
            Your name appears on your profile page, as your byline, and in your
            responses.It is a required field
          </p>
          <label className="profile-label" htmlFor="bio">
            Short bio
          </label>
          <br />
          <input
            type="text"
            name="bio"
            defaultValue={data.bio}
            className="profile-input"
            onChange={(e) => setBio(e.target.value)}
          />
          <br />
          <p className="input-details">
            Your short bio appears on your profile and next to your stories. Max
            160 characters
          </p>
          <label className="profile-label" htmlFor="name">
            LinkedIN Profile
          </label>
          <br />
          <input
            type="text"
            name="linkedin"
            defaultValue={data.linkedin}
            className="profile-input"
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <br />
          <p className="input-details">
            Your linkedIn profile appears on your profile and next to your
            stories.
          </p>
          <button className="profile-button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
