import { Component } from "react";
import { Col, Row, Card, Button, Image, Accordion } from "react-bootstrap";
import { ArrowRight, InfoSquareFill } from "react-bootstrap-icons";
import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SidebarPerson from "./SidebarPerson";
import ProfilePictureLoader from "../../Loaders/ProfilePictureLoader";

// get the fontawesome imports

class Sidebar extends Component {
  state = {
    profiles: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM1MzExZDcwNDBkZjAwMTU4NWM4MDIiLCJpYXQiOjE2MjM2MDYyMjYsImV4cCI6MTYyNDgxNTgyNn0.X_v8ZgYjqf7ggYTB9FEPB6S9dfBb88D4LKJ80Mn425c",
          },
        }
      );
      let data = await response.json();
      let result = console.log(data, "This is the result of the API");
      //   Updating the state with the profiles

      // checking my data
      // let obj = await data
      //   .filter((m) => m.email.includes("ari"))
      //   .then((c) => {
      //     console.log(c, "this is my id").error();
      //   });
      this.setState({
        profiles: data,
      });
      console.log(this.state.profiles);
    } catch (error) {
      console.log(error, "The error");
    }
  };

  render() {
    const { profiles, isLoading } = this.state;
    const randomInteger = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const mapProfiles = (limit) => {
      return profiles.slice(limit, randomInteger(114, 118)).map((p) => {
        return <SidebarPerson isLoading={this.props.isLoading} p={p} />;
      });
    };
    const mapProfileShowMore = (limit) => {
      return profiles.slice(limit, randomInteger(55, 62)).map((p) => {
        return <SidebarPerson isLoading={this.props.isLoading} p={p} />;
      });
    };
    return (
      <>
        {/* Srction to see the main body of the page Day2 */}
        <Row>
          <Col className="sidebar-container">
            <Card className="p-2">
              <span className="pb-3 d-flex justify-content-between font-weight-bolder">
                Add to your feed <InfoSquareFill />
              </span>

              {this.props.isLoading === true ? (
                <ProfilePictureLoader />
              ) : (
                mapProfiles(randomInteger(105, 110))
              )}
              <Accordion defaultActiveKey="0">
                <Accordion.Collapse eventKey="1">
                  <>{mapProfileShowMore(randomInteger(45, 49))}</>
                </Accordion.Collapse>
                <div className="d-flex ml-2 my-2 pl-2">
                  <div>
                    <Accordion.Toggle
                      as={Button}
                      eventKey="1"
                      id="accordian_toggle_btn"
                    >
                      <span className="text-recomendations">
                        View all reccomendations
                      </span>
                    </Accordion.Toggle>
                  </div>
                  <div>
                    <ArrowRight />
                  </div>
                </div>
              </Accordion>
            </Card>
            <Card className="p-2 text-muted mt-2" id="today_most_viewed">
              <div className="d-flex justify-content-between font-weight-bolder">
                <span className="pb-3">Today's Most viewed Courses</span>
                <InfoSquareFill />
              </div>

              <div>
                <div className="d-flex flex-column">
                  <span className="most-viewed-head">
                    1. The Six Morning Habits of High Perf...
                  </span>
                  <span className="most-viewed-foot">
                    Pete Mockaitis | How to Be Awesome at Yo...
                  </span>
                </div>
                <div className="d-flex flex-column">
                  <span className="most-viewed-head">
                    2. What is Graphic Design ?
                  </span>
                  <span className="most-viewed-foot">Sean Adams</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="most-viewed-head">
                    3. Excel Essential Training Office 365..
                  </span>
                  <span className="most-viewed-foot">Dennis Taylor</span>
                </div>
              </div>
              {/* See all courses */}
              <div className="d-flex ml-2 my-2 ">
                <span className="p-0 text-recomendations">
                  Show more on Linkedin Learning
                </span>
                <ArrowRight />
              </div>
            </Card>
            <Card className="people pt-2 ">
              <div className="ml-2 my-2 pl-2">
                <div className="text-center">
                  <span className="add-personal-txt">
                    Get the latest jobs and Industry news
                  </span>
                </div>
                <div className="d-flex justify-content-center">
                  <Image
                    className="profile-img mt-1 w-25"
                    src="https://static.thenounproject.com/png/17241-200.png"
                    alt="Linkdin Member"
                    fluid
                    roundedCircle
                  ></Image>
                  <Image
                    className="profile-img mt-1 w-25"
                    src="https://www.wallstreet.it/scuola-inglese-senigallia/wp-content/uploads/sites/73/2017/03/poste.png"
                    alt="Linkdin Member"
                    fluid
                    roundedCircle
                  ></Image>
                </div>
                <div className="my-2 text-center d-flex">
                  <span className="add-personal-txt px-5">
                    Hello User, Explore relevant opportunities with Posta
                    Italiane
                  </span>
                </div>
                <Button
                  className="rounded-pill btn-sm adv-button"
                  variant="outline-primary"
                >
                  + Follow
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default Sidebar;
