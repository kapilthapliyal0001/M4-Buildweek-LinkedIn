import { Component } from "react";
import {
  CardImage,
  Youtube,
  CalendarDate,
  Newspaper,
} from "react-bootstrap-icons";
import {
  Container,
  Image,
  FormControl,
  Form,
  Button,
  Modal,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PostFeed.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import FeedPostImage from "./FeedPostImage";

class PostFeed extends Component {
  state = {
    feed: {
      text: "",
    },
    upload: false,
    close: true,
    image: null,
    post_id: "60cb3cd5956ccd00158537bb", // subsitute post_id; null text input case;
  };

  componentDidMount() {
    console.log(
      this.props.user,
      "is the id and ",
      this.props.isLoading,
      "is the Loading"
    );
  }

  fetch = () => {
    console.log("Data is there to be POST");
  };

  // React Boostrap Modal class toggling
  handleClose = () => {
    console.log("Handle close been clicked!");
    this.setState({ upload: false });
  };

  // Form Data change state; Upload images;
  onFileChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  // Main function via Modal Submit

  uploadPostImage = async (e) => {
    // when the user submits the button => the text feed written is posted and then the id of the posted text is used again
    // to post an image via this funcnction after the SubmitPost function
    await this.submitPost();
    // post id updated.
    console.log("The image needs to be posted"); // 1
    this.handleClose();
    const formData = new FormData();
    formData.append("post", this.state.image);
    const url = `https://striveschool-api.herokuapp.com/api/posts/${this.state.post_id}`;
    console.log(
      "For the image to load the post id is ::: ",
      this.state.post_id
    );
    const bearer_token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2JmMTI5MTkzMDAwMTU2MGFiYTMiLCJpYXQiOjE2MjM2Njk3NDUsImV4cCI6MTYyNDg3OTM0NX0.Lk5Z-l56SBkY6YCIvoiHpVg_0J0rEZHaO4PzAuep3bo";

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
      alert("Successfully posted");
    } catch (error) {
      console.log("error in the image posting : ", error);
    }
  };

  //   Submit post starts;
  submitPost = async (e) => {
    e ? e.preventDefault() : console.log(" I am been touched");

    try {
      let response = await fetch(
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
            feed: {
              text: "",
            },
            post_id: finalWork._id,
          });
          console.log(
            "Check the post id: ",
            this.state.post_id,
            "is same as ",
            finalWork._id
          );
          console.log("I am being worked first");
        });
    } catch (error) {
      console.log(error);
      console.log("There is some error");
    }
  };
  checkStateUpload = () => {
    this.setState({ upload: this.state.upload ? false : true });
  };

  render() {
    return (
      <>
        <Card className="pb-0" id="post_card">
          <Card.Body id="post_card_body">
            <Form
              onSubmit={(e) => {
                console.log("ready to be clicked!");
                this.submitPost(e);
              }}
            >
              <div id="testest" className="pb-0">
                <Image
                  className="border-white"
                  id="post_img"
                  src={this.props.user.image}
                  alt="Linkdin Member"
                  roundedCircle
                />

                <FormControl
                  id="post_inputfield"
                  placeholder="Start a Post"
                  value={this.state.feed.text}
                  onChange={(e) => {
                    console.log(e.target.value);
                    return this.setState({
                      feed: { text: e.target.value },
                    });
                  }}
                />
              </div>
            </Form>

            <div id="buttonContainer">
              <Button onClick={this.checkStateUpload}>
                <CardImage id="post_icon" style={{ color: "#70b5f9" }} />
                Photos
              </Button>

              <Button onClick={this.checkStateUpload}>
                <Youtube id="post_icon" style={{ color: "#7fc15e" }} />
                Videos
              </Button>

              <Button onClick={this.checkStateUpload}>
                <CalendarDate id="post_icon" style={{ color: "#e7a33e" }} />
                Events
              </Button>
              <Button onClick={this.checkStateUpload}>
                <Newspaper id="post_icon" style={{ color: "#f5987e" }} />
                Write Article
              </Button>
            </div>
          </Card.Body>
        </Card>

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
          <></>
        )}
      </>
    );
  }
}

export default PostFeed;
