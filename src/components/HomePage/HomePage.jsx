import React, {Component} from "react";
import {Col, Row, Container} from "react-bootstrap";
import Feed from "./Feed/Feed";
import MainFeed from "./MainFeed/MainFeed";
import SidebarLeftMain from "./SidebarLeft/SidebarLeftMain";
import "./SidebarLeft/SidebarLeft.css";
import Sidebar from "../Sidebar/Sidebar";
import PostFeed from "./PostFeed/PostFeed";

export default class HomePage extends Component {
  state = {
    user: {},
  };

  componentDidMount = async () => {
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
        this.setState({user: data});
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {user} = this.state;
    return (
      <>
        <Container>
          <Row>
            <Col xs={3}>
              <SidebarLeftMain user={user} />
            </Col>
            <Col xs={6}>
              <PostFeed id={user} />
              <MainFeed />
            </Col>
            <Col xs={3}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
