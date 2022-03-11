import axios from "axios";
import Nav from "./Nav";
import UserNav from "./UserNav";
import React, { useEffect, useState } from "react";
import "../assets/styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  const token = localStorage.getItem("token");
  let isLoggedIn = true;
  if (token == null) {
    isLoggedIn = false;
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://192.168.43.198:5000/core/")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  var setBlog = (data) => {
    var { _id } = data;
    localStorage.setItem("id", _id);
  };

  return (
    <div className="home">
      {isLoggedIn ? <Nav /> : <UserNav />}
      <div className="home-container">
        {data.map((data, _id) => {
          return (
            <div className="blog-box">
              <div className="blog-details">
                <p className="name">{data.author.user_name}</p>
                <p className="date">{data.time}</p>
              </div>
              <Link to="/Read" style={{ textDecoration: "none" }}>
                <div className="blog-title">
                  <p onClick={() => setBlog(data)}>{data.title}</p>
                </div>
              </Link>
              <Link to="/Read" style={{ textDecoration: "none" }}>
                <div className="blog-content">
                  <p onClick={() => setBlog(data)}>{data.content}</p>
                </div>
              </Link>
              <img src={`../assets/uploads/${data.image}`} alt="" />
            </div>
          );
        })}
      </div>
      <div className="home-recommendedTopis">
        {isLoggedIn && (
          <div className="upgradeButton">
            <button className="upgrade-button">Upgrade</button>
            <input
              className="home-searchBar"
              type="text"
              placeholder="Search"
            />
          </div>
        )}

        <div className="topics">
          <p>Recommended Topics</p>
          <div className="topicLinks">
            <button className="topicButton">Technology</button>
            <button className="topicButton">Money</button>
            <button className="topicButton">Business</button>
            <button className="topicButton">Productivity</button>
            <button className="topicButton">Psychology</button>
            <button className="topicButton">Mindfullness</button>
            <button className="topicButton">Art</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
