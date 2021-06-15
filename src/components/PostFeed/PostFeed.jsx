import {Component} from "react";
import {Container, Image, FormControl, Form, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PostFeed.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendar,
  faGlobe,
  faImages,
  faInfoCircle,
  faNewspaper,
  faQuestionCircle,
  faVideo,
} from "@fortawesome/fontawesome-free-solid";

class PostFeed extends Component {
  state = {
    feed: {
      text: "",
    },
  };

  fetch = () => {
    console.log("Data is there to be POST");
  };

  //   Submit post starts;

  submitPost = (e) => {
    e.preventDefault();
    console.log(" I am been touched");
    try {
      let response = fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(this.state.feed),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4YWVmOWEzYTNkNzAwMTUxY2IwNTQiLCJpYXQiOjE2MjM3NjQ3MjksImV4cCI6MTYyNDk3NDMyOX0.Y_86hS0H_3nodj7yLyRmp7q1ATdiHj_4FURWkrzM82I",
          },
        }
      )
        .then((data) => data.json())
        .then((result) => {
          console.log(result, "The text has been updated");
        })
        .then((finalWork) => {
          this.setState({
            feed: {
              text: "",
            },
          });
          alert("Successfully posted");
        });
    } catch (error) {
      console.log(error);
      console.log("There is some error");
    }
  };

  render() {
    return (
      <>
        <Container className="main-cont">
          <div className="d-flex post-field">
            {/* https://res.cloudinary.com/dmqsfltrf/image/upload/v1606999953/linkedin/dztgrstloinuosiu1nhp.webp */}
            {/* <div className="post-image"> */}
            <Image
              className="img-circle post-img"
              src="https://res.cloudinary.com/dmqsfltrf/image/upload/v1606999953/linkedin/dztgrstloinuosiu1nhp.webp"
              alt="Linkdin Member"
              fluid
              //   roundedCircle
            ></Image>
            {/* </div> */}
            {/* <div className="text"> */}
            {/* <input class="post-text mt-4" type="text" placeholder="POST feed" /> */}
            <div className="mt-4">
              <Form
                onSubmit={(e) => {
                  console.log("ready to be clicked!");
                  this.submitPost(e);
                }}
              >
                <FormControl
                  // type="submit"
                  placeholder="Start a Post"
                  aria-label="text"
                  aria-describedby="basic-addon1"
                  className="form-text-control"
                  value={this.state.feed.text}
                  onChange={(e) => {
                    console.log(e.target.value);
                    return this.setState({feed: {text: e.target.value}});
                  }}
                />
                {/* <Button variant="primary" type="submit">
                  Submit
                </Button> */}
              </Form>
            </div>
            {/* </div> */}
          </div>
          <div className="post-icons d-flex justify-content-around">
            <div className="d-flex">
              <FontAwesomeIcon
                className=" ml-auto mr-4 fa-2x"
                icon={faImages}
              />
              <span>Photos</span>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon className=" ml-auto mr-4 fa-2x" icon={faVideo} />
              <span>Videos</span>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon
                className=" ml-auto mr-4 fa-2x"
                icon={faCalendar}
              />
              <span>Events</span>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon
                className=" ml-auto mr-4 fa-2x"
                icon={faNewspaper}
              />
              <span>Write Article</span>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default PostFeed;
