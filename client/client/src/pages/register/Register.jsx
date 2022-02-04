import "./register.css";

import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label className="registerLabel">Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your Username..."
        />
        <label className="registerLabel">Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label className="registerLabel">Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <Link className="link" to="/login">
        <button className="loginButton">Login</button>
      </Link>
    </div>
  );
}
