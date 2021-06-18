import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import SidebarLeftMain from "./SidebarLeft/SidebarLeftMain";
import "./SidebarLeft/SidebarLeft.css";
import Sidebar from "./Sidebar/Sidebar";
import PostFeed from "./PostFeed/PostFeed";
// import MyLoader from "../Loaders/MyLoader";
import GetPosts from "../HomePage/MainFeed/GetPosts";

export default class HomePage extends Component {
  state = {
    user: {},
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    try {
      const bearerTokenHedri =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4YWVmOWEzYTNkNzAwMTUxY2IwNTQiLCJpYXQiOjE2MjM3NjQ3MjksImV4cCI6MTYyNDk3NDMyOX0.Y_86hS0H_3nodj7yLyRmp7q1ATdiHj_4FURWkrzM82I";
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        {
          headers: {
            Authorization: bearerTokenHedri,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("This is sidebar profile data", data);
        this.setState({ user: data, isLoading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { user, isLoading } = this.state;
    return (
      <>
        <Container>
          <Row>
            <Col xs={3}>
              <SidebarLeftMain user={user} isLoading={isLoading} />
            </Col>
            <Col xs={6}>
              <PostFeed user={user} isLoading={isLoading} />
              <GetPosts isLoading={isLoading} />
            </Col>
            <Col xs={3}>
              <Sidebar isLoading={isLoading} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
