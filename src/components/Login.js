import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://192.168.43.198:5000/api/signin", { email, password })
      .then((response) => {
        localStorage.setItem("token", response.data.message._id);
      })
      .then(console.log(user))
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form_wallpaper">
          <p className="wallpaper-text"> </p>
        </div>
        <div className="form-wrapper">
          <form className="form ">
            <p className="title">Login</p>
            <label className="form-label" htmlFor="name">
              Email
            </label>
            <br />
            <input
              className="form-input"
              type="text"
              name="email"
              value={email}
              placeholder="Enter email address"
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <br />
            <input
              className="form-input"
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <Link style={{ color: "black" }} to="/Register">
              Do not have account ?
            </Link>
            <br />
            <button className="form-button" onClick={submit}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
