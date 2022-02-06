import "./register.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });

      console.log(res.data);
      res.data && window.location.replace("/login");
    } catch (e) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label className="registerLabel">Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="registerLabel">Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="registerLabel">Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <Link className="link" to="/login">
        <button className="loginButton" type="submit">
          Login
        </button>
      </Link>
      {error && (
        <span style={{ color: "red", marginTop: "1.4rem", fontSize: "1.8rem" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
}
