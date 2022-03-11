import React from "react";
import "../assets/styles/nav.css";
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Home from "../assets/images/home.svg";
import edit from "../assets/images/edit.svg";
import user from "../assets/images/user.svg";
import bell from "../assets/images/bell-ring.svg";
import bookmark from "../assets/images/bookmark.svg";

function Nav() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  let isLoggedIn = true;
  if (token == null) {
    isLoggedIn = false;
  }

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload(true);
  };

  return (
    <div className="nav-container">
      <div className="nav-title">Blog</div>
      <div className="buttons">
        <Link to="/" className="icons">
          <img src={Home} alt="" className="nav-Icon" />
        </Link>
        <Link to="" className="icons">
          <img src={bell} alt="" className="nav-Icon" />
        </Link>
        <Link to="" className="icons">
          <img src={bookmark} alt="" className="nav-Icon" />
        </Link>
        {isLoggedIn ? (
          <Link to="/Create" className="icons">
            <img src={edit} alt="" className="nav-Icon create-Icon" />
          </Link>
        ) : (
          <Link to="/Login">
            <img src={edit} alt="" className="nav-Icon create-Icon" />
          </Link>
        )}
      </div>
      <div className="login-button">
        {isLoggedIn && (
          <NavDropdown title={<img src={user} alt="" className="nav-Icon" />}>
            <NavDropdown.Item onClick={logout}>Sign Out</NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate("/Profile")}>
              Settings
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate("/MyPost")}>
              Manage Publications
            </NavDropdown.Item>
          </NavDropdown>
        )}
      </div>
    </div>
  );
}

export default Nav;
