import React, { useContext, useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import "./settings.css";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "https://metachain-blog-app.herokuapp.com/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });

    const updateUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;

      data.append("name", filename);
      data.append("file", file);
      updateUser.profilePic = filename;

      try {
        await axios.post("/upload", data);
      } catch (e) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updateUser);
      console.log(res.data);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (e) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          {/*<span className="settingsTitleDelete">Delete Account</span>*/}
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label className="settingsProfile">Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
              className="settingImg"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label className="userLabel">Username</label>
          <input
            type="text"
            placeholder={user.username}
            name="name"
            className="settingInput"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="userLabel">Email</label>
          <input
            type="email"
            placeholder="safak@gmail.com"
            name="email"
            className="settingInput"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="userLabel">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="settingInput"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <SideBar />
    </div>
  );
}
