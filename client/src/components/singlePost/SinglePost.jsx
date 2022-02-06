import React, { useContext, useEffect, useState } from "react";
import "./singlepost.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const [post, setPost] = useState({});
  const location = useLocation();
  //console.log(location);
  const pathId = location.pathname.split("/")[2];
  //  console.log(pathId);
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${pathId}`);
      // console.log(res.data);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    fetchPost();
  }, [pathId]);
  console.log(post._id);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (e) {}
  };
  console.log(user.username === post.username);

  //To check handle Update
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      window.location.reload();
      // setUpdateMode(false);
    } catch (e) {}
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}

        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                >
                  {}
                </i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                >
                  {}
                </i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              {post.username}
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>

        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
