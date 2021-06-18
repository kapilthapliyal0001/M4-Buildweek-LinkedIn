import { Component } from "react";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./MyNav.css";
import {
  HouseDoorFill,
  PeopleFill,
  BagDashFill,
  ChatDotsFill,
  BellFill,
  Search,
  Grid3x3GapFill,
} from "react-bootstrap-icons";
import { Avatar } from "@material-ui/core";
import myPic from "../MyNav/myPic.jpg";
import "./MyNavOptions.css";

// import MyNavOptions from "./MyNavOptions";
// import myPic from "../MyNav/myPic.jpg";
import {
  InputGroup,
  Container,
  Form,
  Col,
  Row,
  FormControl,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
class MyNav extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="headerLeft">
          <img
            src="https://www.flaticon.com/svg/static/Icon/svg/174/174857.svg"
            alt="logo"
          />
          <div className="headerSearch">
            <Search />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="headerRight">
          <div className="myNavOptions">
            <HouseDoorFill className="myNavOptionsIcon" />
            <a className="myNavOptionsTitle" href="/home">
              Home
            </a>
          </div>

          <div className="myNavOptions">
            <PeopleFill className="myNavOptionsIcon" />
            <a className="myNavOptionsTitle" href="/mynetwork}">
              My Network
            </a>
          </div>
          <div className="myNavOptions">
            <BagDashFill className="myNavOptionsIcon" />
            <a className="myNavOptionsTitle" href="/Jobs}">
              Jobs
            </a>
          </div>
          <div className="myNavOptions">
            <ChatDotsFill className="myNavOptionsIcon" />
            <a className="myNavOptionsTitle" href={"/Messaging"}>
              Messaging
            </a>
          </div>
          <div className="myNavOptions">
            <BellFill className="myNavOptionsIcon" />
            <a className="myNavOptionsTitle" href="/Notifications">
              Notifications
            </a>
          </div>
          <div className="myNavOptions">
            <div className="myNavOptionsIcon" src={Avatar} />
            <a className="myNavOptionsTitle" href="profile/me">
              Me
            </a>
          </div>
          <div
            className="myNavOptions"
            style={{ borderLeft: "2px solid gray " }}
          >
            <Grid3x3GapFill className="myNavOptionsIcon" />
            <a className="myNavOptionsTitle" href="/work">
              Work
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(MyNav);
