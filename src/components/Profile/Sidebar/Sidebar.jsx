import { Component } from "react";
import { Col, Row, Container, Button, Image, Nav, Card } from "react-bootstrap";
import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { InfoSquareFill, Globe } from "react-bootstrap-icons";

import SidebarPerson from "../../HomePage/Sidebar/SidebarPerson";

class Sidebar extends Component {
  state = {
    profiles: [],
    profiles_other: [],
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
      let ran_a = Math.floor(Math.random() * 4) + 30;
      let ran_b = Math.floor(Math.random() * 4) + ran_a + 1;
      let ran_c = ran_a + 10;
      let ran_d = ran_c + 2;
      // console.log(ran_a, ran_b, ran_c, ran_d);
      // checking my data
      // let obj = await data
      //   .filter((m) => m.email.includes("ari"))
      //   .then((c) => {
      //     console.log(c, "this is my id").error();
      //   });
      this.setState({
        profiles: data.slice(ran_a, ran_b),
        profiles_other: data.slice(ran_c, ran_d),
      });
      console.log(this.state.profiles);
    } catch (error) {
      console.log(error, "The error");
    }
  };
  render() {
    return (
      <>
        {/* Srction to see the main body of the page Day1 */}
        <Row>
          {/*  Side bar start */}
          <Col className="sidebar-container">
            {/* Button First sidebar-section starts */}
            <Card>
              <div className="first-sidebar-container pb-1">
                {/* <div className="sidebar-btn mt-2 mb-2 d-flex"> */}
                <div className="ml-3 mt-1" id="language_btn_container">
                  <Button
                    id="btn_english"
                    className="rounded-pill btn-sm long-btn pl-2"
                    variant="primary"
                  >
                    English
                  </Button>
                  <Button
                    id="btn_italian"
                    className="rounded-pill btn-sm long-btn"
                    variant="outline-dark"
                  >
                    Italiano
                  </Button>
                  {/* </div> */}
                  <Globe id="globe_icon" />
                </div>
                <div className="d-flex justify-content-between m-2">
                  <span
                    className="edit-text ml-3 "
                    style={{ fontSize: "12px" }}
                  >
                    Edit Public profile and url
                  </span>
                  <InfoSquareFill className="mr-2" />
                </div>
              </div>
            </Card>
            {/* Advertisement section starts */}
            <Card className="advertisement mt-2">
              <Image
                className="pt-2 pb-2 pr-3 m-2 w-45"
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-minimal-coffee-advertisement-design-template-a0f6db1e4cef609cc1865d9e44feb5f6_screen.jpg?ts=1601233298"
                alt="advertisement"
                fluid
              />
            </Card>

            {/* People also viewed section */}
            <Card className="mt-2">
              <span className="pl-3 pb-3 text">People also viewed</span>
              <div className="pl-3 pt-2">
                {/* Loading random profiles */}
                {this.state.profiles.map((p) => (
                  <SidebarPerson p={p} />
                ))}
              </div>
            </Card>
            {/*  People you may know */}
            <Card className="mt-2">
              <span className="pl-3 pb-3 text">People you may know</span>
              <div className="pl-3 pt-2">
                {/* Loading random profiles */}
                {this.state.profiles_other.map((p) => (
                  <SidebarPerson p={p} />
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default Sidebar;
