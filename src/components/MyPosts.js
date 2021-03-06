import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import "../assets/styles/MyPost.css";
import image from "../assets/uploads/6dd390bd-2cb5-4df3-b214-2f2dbe7e4b30-1646815005098.jpg";

function MyPosts() {
  const [mypost, setMyPost] = useState([]);
  const id = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`http://192.168.43.198:5000/profile/${id}/userBlog`)
      .then((response) => {
        setMyPost(response.data.blogs);
        console.log(response.data.blogs);
      })
      .catch((err) => console.log(err));
  }, []);

  var setBlog = (mypost) => {
    var { _id } = mypost;
    localStorage.setItem("id", _id);
  };

  return (
    <div className="my-0">
      <Nav />
      <div className="home-container">
        {mypost.map((post, _id) => {
          return (
            <div className="blog-box">
              <div className="blog-details">
                <p className="date">{post.time}</p>
              </div>
              <Link to="/Read" style={{ textDecoration: "none" }}>
                <div className="blog-title">
                  <p onClick={() => setBlog(post)}>{post.title}</p>
                </div>
              </Link>
              <Link to="/Read" style={{ textDecoration: "none" }}>
                <div className="blog-content">
                  <p onClick={() => setBlog(post)}>{post.content}</p>
                </div>
              </Link>
              <img src={`../assets/uploads/${post.image}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyPosts;
