import React from "react";
import "./MyNav.css";
import * as Icon from "react-bootstrap-icons";
import LinkedInLogo from "../MyNav/linkedin.png";
import MyNavOptions from "./MyNavOptions";
import myPic from "../MyNav/myPic.jpg";

const MyNav = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <img src={LinkedInLogo} alt="logo" />

        <Icon.Search className="headerSearch" />
        <input
          className="headerSearch headerSearchInput"
          placeholder="Search"
          type="text"
        />
      </div>
      <div className="headerRight">
        <MyNavOptions Icons={Icon.HouseDoorFill} title="Home" />
        <MyNavOptions Icons={Icon.PeopleFill} title="My Network" />
        <MyNavOptions Icons={Icon.BagDashFill} title="Jobs" />
        <MyNavOptions Icons={Icon.ChatDotsFill} title="Messaging" />
        <MyNavOptions Icons={Icon.BellFill} title="Notifications" />
        <MyNavOptions avatar={myPic} title="me" />
      </div>
    </div>
  );
};

export default MyNav;
