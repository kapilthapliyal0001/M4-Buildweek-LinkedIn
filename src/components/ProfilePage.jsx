import React, { Component } from "react";
import JumboProfile from "./Profile/JumboProfile";
import { Col } from "react-bootstrap";

export default class ProfilePage extends Component {
  state = {
    user: "",
  };

  componentDidMount = async () => {
    // const userId = "60c73bf1291930001560aba3";
    const endpointGetMyProfile = `https://striveschool-api.herokuapp.com/api/profile/`;
    const bearerTokenHedri =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2JmMTI5MTkzMDAwMTU2MGFiYTMiLCJpYXQiOjE2MjM2Njk3NDUsImV4cCI6MTYyNDg3OTM0NX0.Lk5Z-l56SBkY6YCIvoiHpVg_0J0rEZHaO4PzAuep3bo";

    try {
      let getResponse = await fetch(endpointGetMyProfile, {
        headers: {
          Authorization: bearerTokenHedri,
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(this.state.user),
      });
      if (Response.ok) {
        let myProfileData = await getResponse.json();
        console.log(myProfileData);
        this.setState({ user: myProfileData });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        {/* <Col xs={8}>
          <JumboProfile
            userId={this.state.user._id}
            name={this.state.user.name}
            surname={this.state.user.surname}
            img={this.state.user.image}
            bio={this.state.user.bio}
            title={this.state.user.bio}
            area={this.state.user.area}
          />
        </Col> */}
      </div>
    );
  }
}
