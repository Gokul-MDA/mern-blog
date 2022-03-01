import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/login.css";

function Register() {
  const navigate = useNavigate();
  const [user_name, setUser_Name] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm_password, setConfirm_Password] = useState();

  const submitForm = () => {
    console.log(user_name);

    axios
      .post(`http://localhost:5000/api/signup`, {
        user_name,
        email,
        password,
        confirm_password,
      })
      .then(() => navigate("/Login"))
      .catch((err) => console.log("error"));
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form-wrapper">
          <form className="form register-form">
            <p className="title">Register</p>
            <label className="form-label" htmlFor="name">
              User Name
            </label>
            <br />
            <input
              className="form-input"
              type="text"
              name="user_name"
              value={user_name}
              onChange={(event) => setUser_Name(event.target.value)}
            />
            <br />

            <label className="form-label" htmlFor="name">
              Email
            </label>
            <br />
            <input
              className="form-input"
              type="text"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />

            <label className="form-label" htmlFor="name">
              Password
            </label>
            <br />
            <input
              className="form-input"
              type="text"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <label className="form-label" htmlFor="name">
              Confirm Password
            </label>
            <br />
            <input
              className="form-input"
              type="text"
              name="confirm_password"
              value={confirm_password}
              onChange={(event) => setConfirm_Password(event.target.value)}
            />
            <br />
            <a>
              <Link to="/Login">Login</Link>
            </a>
            <br />
            <button className="form-button" onClick={submitForm}>
              Register
            </button>
          </form>
        </div>
        <div className="form_wallpaper">
          <p className="wallpaper-text"> </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
