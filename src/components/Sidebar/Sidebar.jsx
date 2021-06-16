import {Component} from "react";
import {Col, Row, Container, Button, Image} from "react-bootstrap";
import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";

// get the fontawesome imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faGlobe,
  faInfoCircle,
  faQuestionCircle,
} from "@fortawesome/fontawesome-free-solid";

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
      let ran_a = Math.floor(Math.random() * 4) + 30;
      let ran_b = Math.floor(Math.random() * 4) + ran_a + 1;
      // checking my data
      // let obj = await data
      //   .filter((m) => m.email.includes("ari"))
      //   .then((c) => {
      //     console.log(c, "this is my id").error();
      //   });
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
          {/* Srction to see the main body of the page Day2 */}
          <Row>
            {/*  Side bar start */}
            <Col className="sidebar-container">
              {/* Add to your feed section */}
              <div className="people pt-3 ">
                <div className="d-flex justify-content-between">
                  <span className="pl-3 pb-3 text">Add to your feed</span>
                  <FontAwesomeIcon
                    className=" ml-auto mr-4 fa-2x"
                    icon={faInfoCircle}
                  />
                </div>
                <div className="pl-3 pt-2">
                  {/* Loading random profiles */}
                  {this.state.profiles.map((p) => (
                    <div key={p._id}>
                      <div className="d-flex img-cont">
                        {/* <div className="profile-img mt-1"> */}
                        {/* {" "} */}
                        <Image
                          className="w-25 img-circle profile-img mt-1"
                          src={p.image}
                          alt="Linkdin Member"
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
                              + Follow
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="d-flex ml-2 my-2 pl-2">
                  <div>
                    <span className="text-recomendations">
                      View all reccomendations
                    </span>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      className="button-icon globe-icon ml-auto mr-4 fa-lg"
                      icon={faArrowRight}
                    />
                  </div>
                </div>
              </div>
              <div className="people pt-3 ">
                <div className="d-flex justify-content-between">
                  <span className="pl-3 pb-3 text">
                    Today's Most viewed Courses
                  </span>
                  <FontAwesomeIcon
                    className=" ml-auto mr-4 fa-2x"
                    icon={faInfoCircle}
                  />
                </div>
                {/* Linkedin courses */}
                <div>
                  <div className="d-flex flex-column m-1 pl-1">
                    <span className="most-viewed-head">
                      1. The Six Morning Habits of High Perf...
                    </span>
                    <span className="most-viewed-foot pl-3">
                      Pete Mockaitis | How to Be Awesome at Yo...
                    </span>
                  </div>
                  <div className="d-flex flex-column m-1 pl-1">
                    <span className="most-viewed-head">
                      2. What is Graphic Design ?
                    </span>
                    <span className="most-viewed-foot pl-3">Sean Adams</span>
                  </div>
                  <div className="d-flex flex-column m-1 pl-1">
                    <span className="most-viewed-head">
                      3. Excel Essential Training Office 365..
                    </span>
                    <span className="most-viewed-foot pl-3">Dennis Taylor</span>
                  </div>
                </div>
                {/* See all courses */}
                <div className="d-flex ml-2 my-3 pl-2">
                  <div>
                    <span className="text-recomendations">
                      Show more on Linkedin Learning
                    </span>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      className="button-icon globe-icon ml-auto mr-4 fa-lg"
                      icon={faArrowRight}
                    />
                  </div>
                </div>
              </div>
              <div className="people pt-2 ">
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
                    + Follow{" "}
                  </Button>
                </div>
              </div>
              {/* Personalizes suggestions */}

              {/*  */}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Sidebar;
