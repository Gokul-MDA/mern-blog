import React from "react";
import { useNavigate } from "react-router";
import { HomeOutlined, AccountCircle, Create } from "@material-ui/icons";
import "../assets/styles/nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <div className="nav-title">Blog</div>
      <div className="buttons">
        <Link to="/Home" className="icons">
          <HomeOutlined style={{ fontSize: 35, color: "black" }} />
        </Link>
        <Link to="/Create" className="icons">
          <Create style={{ fontSize: 35, color: "black" }} />
        </Link>
      </div>
      <div className="login-button">
        <Link to="/Login">
          <AccountCircle style={{ fontSize: 35, color: "black" }} />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
