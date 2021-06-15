import React from "react";
import { Card, Image, Col, Row } from "react-bootstrap";
import SidebarLeftColOne from "./SidebarLeftColOne";
import SidebarLeftColTwo from "./SidebarLeftColTwo";

class SidebarLeftMain extends React.Component {
  state = {
    user: {},
    userExperiences: [],
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
        this.setState({ user: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <SidebarLeftColOne
          name={this.state.user.name}
          surname={this.state.user.surname}
          title={this.state.user.title}
          area={this.state.user.area}
          image={this.state.user.image}
        />
        <SidebarLeftColTwo />
      </>
    );
  }
}

export default SidebarLeftMain;
