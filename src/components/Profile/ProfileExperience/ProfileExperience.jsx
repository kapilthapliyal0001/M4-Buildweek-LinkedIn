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
        ? "60c8aef9a3a3d700151cb054"
        : this.props.match.params.id;
    const endpointGetMyProfile = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
    const bearerTokenHedri =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4YWVmOWEzYTNkNzAwMTUxY2IwNTQiLCJpYXQiOjE2MjM3NjQ3MjksImV4cCI6MTYyNDk3NDMyOX0.Y_86hS0H_3nodj7yLyRmp7q1ATdiHj_4FURWkrzM82I";
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
            {this.props.match.params.id === "me" ? (
              <Plus
                id="pencil-icon"
                onClick={() => this.setState({ showModalExpPost: true })}
              />
            ) : (
              <></>
            )}
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
