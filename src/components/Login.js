import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <form>
        <table>
          <tr>
            <td>Email :</td>
            <td>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Password :</td>
            <td>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </td>
          </tr>
          <tr></tr>
        </table>
      </form>
      <button onClick={submit}>Login</button>
    </div>
  );
}

export default Login;
