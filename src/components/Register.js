import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div>
      <form>
        <table>
          <tr>
            <td>Name:</td>
            <td>
              <input
                type="text"
                name="user_name"
                value={user_name}
                onChange={(event) => setUser_Name(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Email:</td>
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
            <td>Password:</td>
            <td>
              <input
                type="text"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Confirm Password:</td>
            <td>
              <input
                type="text"
                name="confirm_password"
                value={confirm_password}
                onChange={(event) => setConfirm_Password(event.target.value)}
              />
            </td>
          </tr>
        </table>
      </form>
      <button onClick={submitForm}>submit</button>
    </div>
  );
}

export default Register;
