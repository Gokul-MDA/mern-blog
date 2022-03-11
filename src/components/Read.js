import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assets/styles/Read.css";
import Nav from "./Nav";
import image from "../assets/images/login.jpg";

function Read() {
  const id = localStorage.getItem("id");
  const [blog, setBlog] = useState([]);
  const [author, setAuthor] = useState([]);
  // const author = blog.author.user_name;
  useEffect(() => {
    axios
      .get(`http://192.168.43.198:5000/core/${id}`)
      .then((response) => {
        setBlog(response.data);
        setAuthor(response.data.author);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Nav />
      <div className="read-wrapper">
        <div className="read-container">
          <div className="authorImage">
            <img src={image} alt="" />
            <p>{author.user_name}</p>
          </div>
          <div className="read-blog-title">{blog.title}</div>
          <div className="read-blog-content">{blog.content}</div>
          <img src={`../assets/uploads/${blog.image}`} alt="..." />
          {blog.image}
        </div>
        <div className="read-authorDetails">
          <div className="upgradeButton">
            <button className="upgrade-button">Upgrade</button>
            <input
              className="home-searchBar"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="read-author">
            <img src={image} alt="" />
            <p className="read-authorName">{author.user_name}</p>
            <p className="read-authorBio">{author.bio}</p>
            {/* <a href={author.linkedin}>hi</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
