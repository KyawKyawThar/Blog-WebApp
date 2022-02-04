import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label className="settingsProfile">Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
            />
          </div>
          <label className="userLabel">Username</label>
          <input
            type="text"
            placeholder="Safak"
            name="name"
            className="settingInput"
          />
          <label className="userLabel">Email</label>
          <input
            type="email"
            placeholder="safak@gmail.com"
            name="email"
            className="settingInput"
          />
          <label className="userLabel">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="settingInput"
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
