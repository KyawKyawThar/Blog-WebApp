import React from "react";
import PostDetails from "../postDetails/PostDetails";
import "./posts.css";

export default function Post({ posts }) {
  return (
    <div className="post">
      {posts.map((p, i) => (
        <PostDetails post={p} key={i} />
      ))}
    </div>
  );
}
