import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Feed from "./Feed/Feed";
import MainFeed from "./MainFeed/MainFeed";
import SidebarLeftMain from "./SidebarLeft/SidebarLeftMain";
import "./SidebarLeft/SidebarLeft.css";
import Sidebar from "../Sidebar/Sidebar";
import PostFeed from "./PostFeed/PostFeed";
import MyLoader from "../MyLoader";
import GetPosts from "../HomePage/MainFeed/GetPosts";
import Divider from "./MainFeed/Divider";

export default class HomePage extends Component {
  state = {
    user: {},
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    try {
      const bearerTokenHedri =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2JmMTI5MTkzMDAwMTU2MGFiYTMiLCJpYXQiOjE2MjM2Njk3NDUsImV4cCI6MTYyNDg3OTM0NX0.Lk5Z-l56SBkY6YCIvoiHpVg_0J0rEZHaO4PzAuep3bo";

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
              <PostFeed id={user} isLoading={isLoading} />
              <Divider />
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
