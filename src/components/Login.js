import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    axios
      .post("http://localhost:5000/api/signin", { email, password })
      .then((response) => console.log(response.status))
      .then(() => navigate("/Home"))
      .catch(() => alert("password wrong"));
  };
  return (
    <div className="container">
      <div className="wrapper">
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
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <a>
              <Link to="/Register">Do not have account ?</Link>
            </a>
            <br />
            <button className="form-button" onClick={submit}>
              Login
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

export default Login;
