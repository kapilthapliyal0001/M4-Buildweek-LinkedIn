import React, { Component } from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import "../ProfilePage.css";
import ProfileExperienceSingle from "./ProfileExperienceSingle";
import ProfileExperiencePost from "./ProfileExperiencePost";
import { withRouter } from "react-router-dom";
class ProfileExperience extends Component {
  state = {
    selected: null,
    experience: [],
    showModalExpPost: false,
  };

  closeExpModalPost = () => {
    this.setState({ showModalExpPost: false });
  };
  componentDidMount = async () => {
    const userId =
      this.props.match.params.id === "me"
        ? "60c73bf1291930001560aba3"
        : this.props.match.params.id;
    const endpointGetMyProfile = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
    const bearerTokenHedri =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2JmMTI5MTkzMDAwMTU2MGFiYTMiLCJpYXQiOjE2MjM2Njk3NDUsImV4cCI6MTYyNDg3OTM0NX0.Lk5Z-l56SBkY6YCIvoiHpVg_0J0rEZHaO4PzAuep3bo";

    try {
      let getResponse = await fetch(endpointGetMyProfile, {
        headers: {
          Authorization: bearerTokenHedri,
          "Content-Type": "application/json",
        },
      });

      let myExpData = await getResponse.json();
      console.log("myExperience", myExpData);
      this.setState({ experience: myExpData });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { experience, selected } = this.state;
    return (
      <>
        <Card className="my-2" id="expProfile">
          <Card.Title id="expProfile_title" className="mt-3 mb-3 mx-3">
            <span>{this.props.title}</span>
            <Plus
              id="pencil-icon"
              onClick={() => this.setState({ showModalExpPost: true })}
            />
          </Card.Title>
          <Card.Body id="expProfile_body" className="pt-0 mt-0">
            {experience.map((exp) => (
              <Col>
                <ProfileExperienceSingle
                  role={exp.role}
                  location={exp.area}
                  date={exp.startDate}
                  company={exp.company}
                  desc={exp.description}
                  selected={selected}
                  id={exp._id}
                  image={
                    exp.image
                    // "https://res.cloudinary.com/dmqsfltrf/image/upload/v1607933865/linkedin/d5ncpqvqrjwdxixjuyjr.ico"
                  }
                />
              </Col>
            ))}
          </Card.Body>
        </Card>
        <ProfileExperiencePost
          open={this.state.showModalExpPost}
          close={this.closeExpModalPost}
        />
      </>
    );
  }
}
export default withRouter(ProfileExperience);
