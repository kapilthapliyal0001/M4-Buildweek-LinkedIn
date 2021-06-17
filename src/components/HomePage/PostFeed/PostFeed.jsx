import {Component} from "react";
import {
  Container,
  Image,
  FormControl,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PostFeed.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FeedPostImage from "./FeedPostImage";
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
    upload: false,
    close: true,
    image: null,
    post_id: "60cb3cd5956ccd00158537bb",
  };

  fetch = () => {
    console.log("Data is there to be POST");
  };

  //   Submit post starts;
  handleClose = () => {
    console.log("Handle close been clicked!");
    this.setState({upload: false});
  };

  onFileChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  uploadPostImage = async (e) => {
    // when the user submits the button => the text feed written is posted and then the id of the posted text is used again
    // to post an image via this funcnction after the SubmitPost function
    this.submitPost();
    // post id updated.
    console.log("The image needs to be posted");
    this.handleClose();
    const formData = new FormData();
    formData.append("post", this.state.image);
    const url = `https://striveschool-api.herokuapp.com/api/posts/${this.state.post_id}`;
    const bearer_token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4YWVmOWEzYTNkNzAwMTUxY2IwNTQiLCJpYXQiOjE2MjM3NjQ3MjksImV4cCI6MTYyNDk3NDMyOX0.Y_86hS0H_3nodj7yLyRmp7q1ATdiHj_4FURWkrzM82I";
    try {
      let response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: bearer_token,
        },
        body: formData,
      });

      let data = await response.json();
      console.log("The data recieved is: ", data);
      // .then((data) => data.json())
      // .then((result) => {
      //   console.log("The result of the post is: ", result);
      // });
    } catch (error) {
      console.log("error in the image posting : ", error);
    }
  };

  submitPost = (e) => {
    e ? e.preventDefault() : console.log(" I am been touched");

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
          console.log("text posted Image left and check it down");
          return result;
        })
        .then((finalWork) => {
          this.setState({
            // feed: {
            //   text: "Check the image...",
            // },
            post_id: finalWork._id,
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
        <Container className="main-cont my-2 py-3">
          <div className="d-flex post-field">
            <Image
              className="img-circle post-img"
              src="https://res.cloudinary.com/dmqsfltrf/image/upload/v1606999953/linkedin/dztgrstloinuosiu1nhp.webp"
              alt="Linkdin Member"
              fluid
              roundedCircle
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
            <div
              className="d-flex"
              onClick={() =>
                this.setState({upload: this.state.upload ? false : true})
              }
            >
              <FontAwesomeIcon
                className=" ml-auto font-aw-post"
                icon={faImages}
              />
              <span className="ml-2">Photos</span>
            </div>

            <div
              className="d-flex"
              onClick={() =>
                this.setState({upload: this.state.upload ? false : true})
              }
            >
              <FontAwesomeIcon
                className=" ml-auto font-aw-post"
                icon={faVideo}
              />
              <span className="ml-2">Videos</span>
            </div>

            <div
              className="d-flex"
              onClick={() =>
                this.setState({upload: this.state.upload ? false : true})
              }
            >
              <FontAwesomeIcon
                className=" ml-auto font-aw-post"
                icon={faCalendar}
              />
              <span className="ml-2">Events</span>
            </div>
            <div
              className="d-flex"
              onClick={() =>
                this.setState({upload: this.state.upload ? false : true})
              }
            >
              <FontAwesomeIcon
                className=" ml-auto font-aw-post"
                icon={faNewspaper}
              />
              <span className="ml-2">Write Article</span>
            </div>
          </div>
          {/* Modal section to upload images for the Feeds starts */}
          {this.state.upload ? (
            <Modal show={this.state.upload} onHide={this.state.close}>
              <Modal.Header closeButton>
                <Modal.Title>Place to upload the image</Modal.Title>
              </Modal.Header>

              <Form
                onSubmit={(e) => {
                  this.uploadPostImage(e);
                }}
              >
                <Modal.Body>
                  <Form.Group>
                    <Form.Control
                      id="image"
                      type="file"
                      placeholder="Upload image"
                      onChange={this.onFileChange}
                    />
                  </Form.Group>
                </Modal.Body>
              </Form>
              <Modal.Footer>
                <Button variant="primary" onClick={this.uploadPostImage}>
                  Upload Image
                </Button>
                <Button variant="secondary" onClick={this.handleClose}>
                  Discard
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            <div></div>
          )}
        </Container>
      </>
    );
  }
}

export default PostFeed;
