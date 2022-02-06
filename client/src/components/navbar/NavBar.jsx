import "./navbar.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../../context/Context";

export default function NavBar() {
  const { user, dispatch } = useContext(Context);
  // console.log(user);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOG_OUT" });
  };
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-instagram-square"></i>
        <i className="fab fa-pinterest-square"></i>
        <i className="fab fa-twitter-square"></i>
      </div>

      <div className="navbarCenter">
        <ul className="navbarList">
          <Link to="/" className="link">
            <li className="navbarListItem">HOME</li>
          </Link>

          <li className="navbarListItem">ABOUT</li>
          <li className="navbarListItem">CONTACT</li>
          <Link to="/write" className="link">
            <li className="navbarListItem">WRITE</li>
          </Link>
          <Link to="/login" className="link">
            <li className="navbarListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
          </Link>
        </ul>
      </div>
      <div className="navbarRight">
        {user ? (
          <Link to="/settings">
            {user.ProfilePic ? (
              <img className="topImg" src={PF + user.profilePic} alt="" />
            ) : (
              <img
                className="topImg"
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
            )}
          </Link>
        ) : (
          <ul className="navbarList">
            <Link className="link" to="/login">
              <li className="navbarListItem">LOGIN</li>
            </Link>
            <Link className="link" to="/register">
              <li className="navbarListItem">REGISTER</li>
            </Link>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
