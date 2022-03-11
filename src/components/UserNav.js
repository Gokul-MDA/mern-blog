import React from "react";
import "../assets/styles/userNav.css";
import { Link, useNavigate } from "react-router-dom";

function UserNav() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="userNav-container">
        <div className="userNav-title">Blog</div>
        <div className="userNav-buttons">
          <Link className="userNav-button" to="">
            Our Story
          </Link>
          <Link className="userNav-button" to="/Create">
            Write
          </Link>
          <Link className="userNav-button" to="/Login">
            Sign In
          </Link>
          <button
            className="userNav-button userNav-register"
            onClick={() => {
              navigate("/Register");
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserNav;
