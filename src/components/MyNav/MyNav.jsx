import React from "react";
import "./MyNav.css";
import * as Icon from "react-bootstrap-icons";
import MyNavOptions from "./MyNavOptions";
import myPic from "../MyNav/myPic.jpg";

const MyNav = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="logo"
        />
        <div className="headerSearch">
          <Icon.Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="headerRight">
        <MyNavOptions Icons={Icon.HouseDoorFill} title="Home" />
        <MyNavOptions Icons={Icon.PeopleFill} title="My Network" />
        <MyNavOptions Icons={Icon.BagDashFill} title="Jobs" />
        <MyNavOptions Icons={Icon.ChatDotsFill} title="Messaging" />
        <MyNavOptions Icons={Icon.BellFill} title="Notifications" />
        <MyNavOptions avatar={myPic} title="me" />
        <MyNavOptions
          Icons={Icon.Grid3x3GapFill}
          title="Work"
          style={{ borderLeft: "2px solid gray " }}
        />
      </div>
    </div>
  );
};

export default MyNav;
