import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const res = await axios.get("/categories");
      // console.log(res.data);
      setCats(res.data);
    };
    fetchCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <h3 className="sidebarTitle">ABOUT ME</h3>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
          className="sidebarImg"
        />
        <p className="sidebarText">
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>

        <h3 className="sidebarTitle">CATEGORIES</h3>
        <ul className="sidebarList">
          {cats.map((c, i) => (
            <Link to={`/?cat=${c.name}`} className="link" key={i}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>

        <h3 className="sidebarTitle">FOLLOW US</h3>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
