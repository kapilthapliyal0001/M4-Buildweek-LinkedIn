import {Component} from "react";
import {Col, Row, Container, Button, Image} from "react-bootstrap";
import "./Sidebar.css";

// get the fontawesome imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe, faQuestionCircle} from "@fortawesome/fontawesome-free-solid";

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
      let ran_a = Math.floor(Math.random() * 10);
      let ran_b = Math.floor(Math.random() * 10) + ran_a + 1;
      this.setState({
        profiles: data.slice(ran_a, ran_b),
      });
      console.log(this.state.profiles);
    } catch (error) {
      console.log(error, "The error");
    }
  };
  render() {
    return (
      <>
        <Container>
          {/* Srction to see the main body of the page Day1 */}
          <Row>
            <Col xs={12} md={8}>
              Content for the main page
            </Col>

            {/*  Side bar start */}
            <Col xs={6} md={4} className="sidebar-container">
              {/* Button First sidebar-section starts */}
              <div className="first-sidebar-container pb-1">
                <div className="sidebar-btn mt-2 mb-2 d-flex justify-content-between">
                  <div className="ml-3">
                    <Button
                      className="rounded-pill btn-sm long-btn"
                      variant="primary"
                    >
                      English
                    </Button>{" "}
                    <Button
                      className="rounded-pill btn-sm long-btn"
                      variant="outline-dark"
                    >
                      {" "}
                      Italiano
                    </Button>
                  </div>
                  <FontAwesomeIcon
                    className="button-icon globe-icon mr-4"
                    icon={faGlobe}
                  />
                </div>
                <div className="d-flex justify-content-around m-2">
                  <span> Edit Public profile and url</span>
                  <FontAwesomeIcon
                    className="button-icon question-icon"
                    icon={faQuestionCircle}
                  />
                  <div>{""}</div>
                </div>
              </div>
              {/* Advertisement section starts */}
              <div className="advertisement">
                <Image
                  className="pt-2 pb-2 pr-3 m-2 w-45"
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-minimal-coffee-advertisement-design-template-a0f6db1e4cef609cc1865d9e44feb5f6_screen.jpg?ts=1601233298"
                  alt="advertisement"
                  fluid
                />
              </div>

              {/* People also viewed section */}
              <div className="people pt-3 ">
                <span className="pl-3 pb-3 text">People also viewed</span>
                <div className="pl-3 pt-2">
                  {/* Loading random profiles */}
                  {this.state.profiles.map((p) => (
                    <>
                      <div className="d-flex" key={p._id}>
                        {/* <div className="profile-img mt-1"> */}
                        {/* {" "} */}
                        <Image
                          className="w-25 img-circle profile-img mt-1"
                          src={p.image}
                          fluid
                          roundedCircle
                        ></Image>
                        {/* </div> */}
                        <div className="profile-details ml-4 mb-2">
                          <div className="profile-name">
                            {p.name} {p.surname}
                          </div>
                          <div className="profile-title">{p.title}</div>
                          <div className="profile-message">
                            <Button
                              className="rounded-pill btn-sm"
                              variant="outline-dark"
                            >
                              Message
                            </Button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Sidebar;
