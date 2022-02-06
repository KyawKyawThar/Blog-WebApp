import React from "react";
import "./postdetails.css";
import { Link } from "react-router-dom";

export default function PostDetails({ post }) {
  // const PF = "http://localhost:5000/images/";
  const PF = "https://metachain-blog-app.herokuapp.com/images/";
  return (
    <div className="postdetails">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}

      <div className="postInfo">
        <div className="postInfoContainer">
          {post.categories.map((c, i) => (
            <span className="postcat" key={i}>
              {c}
            </span>
          ))}
        </div>
        <Link to={`post/${post._id}`} className="link">
          <span className="postTitle">{post.title} </span>
        </Link>

        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>

        <p className="postDesc">{post.desc}</p>
      </div>
    </div>
  );
}
