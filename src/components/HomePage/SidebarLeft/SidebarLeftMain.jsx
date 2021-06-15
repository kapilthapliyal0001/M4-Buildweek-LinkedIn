import React from "react";
import { Card, Image } from "react-bootstrap";

class LeftColumnHomeFeed extends React.Component {
  state = {
    user: {},
    userExperiences: [],
  };

  componentDidMount = async () => {
    try {
      const bearerTokenHedri =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2JmMTI5MTkzMDAwMTU2MGFiYTMiLCJpYXQiOjE2MjM2Njk3NDUsImV4cCI6MTYyNDg3OTM0NX0.Lk5Z-l56SBkY6YCIvoiHpVg_0J0rEZHaO4PzAuep3bo";

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.match.params.id}`,
        {
          headers: {
            Authorization: bearerTokenHedri,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ user: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <LeftColumnOne
          name={this.props.user.name}
          surname={this.props.user.surname}
          title={this.props.user.title}
          area={this.props.user.area}
          image={this.props.user.image}
        />
        <LeftColumnTwo />
      </>
    );
  }
}

export default LeftColumnHomeFeed;
