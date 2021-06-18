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
import linkedin from "./linkedin.png";

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
  componentDidMount = () => {};

  render() {
    return (
      <div className="header">
        <div className="headerLeft">
          <img src={linkedin} alt="logo" />
          <div className="headerSearch">
            <Search />

            <Form
              className="mt-2"
              onSubmit={() =>
                this.props.history.push(`/search/${this.props.query}`)
              }
            >
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i id="search-icon" class="bi bi-search"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="query"
                  value={this.props.query}
                  onChange={this.props.handleChange}
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </InputGroup>
            </Form>
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
            <a className="myNavOptionsTitle" href="/network">
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
            <Avatar src={myPic} style={{ height: "30px", width: "30px" }} />
            <a className="myNavOptionsTitle" href="profile/me">
              Me
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </span>
            </a>
          </div>

          <div
            className="myNavOptions"
            style={{ borderLeft: "1px solid gray " }}
          >
            <Grid3x3GapFill
              className="myNavOptionsIcon"
              style={{ marginLeft: "15px" }}
            />
            <a
              className="myNavOptionsTitle"
              href="/work"
              style={{ marginLeft: "15px" }}
            >
              Work{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(MyNav);
