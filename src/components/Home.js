import axios from "axios";
import Nav from "./Nav";
import React, { useEffect, useState } from "react";
import "../assets/styles/Home.css";

function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/core/")
      .then((response) => setData(response.data));
  }, [1000]);

  return (
    <div>
      <Nav />
      <div className="home-container">
        {data.map((data) => {
          return (
            <div className="blog-box">
              <div className="blog-details">{data.time}</div>
              <div className="blog-title">{data.title}</div>
              <div className="blog-content">{data.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
