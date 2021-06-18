import {Avatar} from "@material-ui/core";
import * as Icons from "react-bootstrap-icons";
import React from "react";
import "../MainFeed/MainFeed.css";
import InputOptions from "../MainFeed/InputOptions";
import MyLoader from "../../Loaders/MyLoader";
import {
  Image,
  Card,
  Accordion,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
  Modal,
} from "react-bootstrap";
import {useState} from "react";

const MainFeed = ({post}) => {
  const [edited, setEdited] = useState(false);
  const [postText, setPostText] = useState(post.text);
  const obj = {text: postText};

  // function to edit post

  function EditPost() {
    if (post.user._id === "60c8aef9a3a3d700151cb054") {
      setEdited(!edited);
    } else {
      alert("You can't Edit someone's post!!!");
    }
  }

  async function SubmitEdit() {
    console.log("Editing Final", post._id);

    try {
      console.log(
        `https://striveschool-api.herokuapp.com/api/posts/${post._id}`
      );
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${post._id}`,
        {
          method: "PUT",
          body: JSON.stringify(obj),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4YWVmOWEzYTNkNzAwMTUxY2IwNTQiLCJpYXQiOjE2MjM3NjQ3MjksImV4cCI6MTYyNDk3NDMyOX0.Y_86hS0H_3nodj7yLyRmp7q1ATdiHj_4FURWkrzM82I",
          },
        }
      );
      alert("The post has been EDITED! ");
      EditPost();
      // .then((result) => {
      //   console.log(result, "The text has been deleted");
      //   // console.log("text posted Image left and check it down");
      //   return result;
      // });
    } catch (error) {
      console.log(error);
      console.log("There is some error");
    }
  }

  // function to delete the post;

  async function DeletePost() {
    console.log("Delete the post", post._id);
    if (post.user._id === "60c8aef9a3a3d700151cb054") {
      try {
        console.log(
          `https://striveschool-api.herokuapp.com/api/posts/${post._id}`
        );
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/posts/${post._id}`,
          {
            method: "DELETE",
            // body: JSON.stringify(this.state.feed),
            headers: {
              // "Content-type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4YWVmOWEzYTNkNzAwMTUxY2IwNTQiLCJpYXQiOjE2MjM3NjQ3MjksImV4cCI6MTYyNDk3NDMyOX0.Y_86hS0H_3nodj7yLyRmp7q1ATdiHj_4FURWkrzM82I",
            },
          }
        );
        alert("The post has been deleted! ");
        // .then((result) => {
        //   console.log(result, "The text has been deleted");
        //   // console.log("text posted Image left and check it down");
        //   return result;
        // });
      } catch (error) {
        console.log(error);
        console.log("There is some error");
      }
    } else {
      alert("You can only delete your Posts!!");
    }
  }

  return (
    <Accordion defaultActiveKey="0">
      <Card className="MainFeed p-0">
        <div className="MainFeedHeader p-3">
          <Avatar src={post.user.image} />
          <div className="MainHeaderInfo">
            <h2>{post.user.name + " " + post.user.surname || ""}</h2>
            <p>{post.user.title || ""}</p>
          </div>
        </div>

        <p className="p-3">{post.text}</p>
        <Image src={post.image} className="img-fluid" />
        <hr className="p-0 m-0"></hr>
        {post.user._id === "60c8aef9a3a3d700151cb054" ? (
          <Accordion.Toggle
            id="accordion_toggle_button"
            as={Button}
            eventKey="1"
            className="d-flex justify-content-between"
          >
            <div className="MainFeedBodyButtons text-muted ">
              <InputOptions Icon={Icons.HandThumbsUp} title="Like" />
              <InputOptions Icon={Icons.ChatLeftText} title="Comments" />
              <InputOptions Icon={Icons.ShareFill} title="Share" />
              <InputOptions Icon={Icons.ArrowRightCircle} title="Send" />
              <div onClick={DeletePost}>
                <InputOptions Icon={Icons.TrashFill} title="Delete" />
              </div>
              <div onClick={EditPost}>
                <InputOptions Icon={Icons.PencilFill} title="Edit" />
              </div>
            </div>
          </Accordion.Toggle>
        ) : (
          <div className="MainFeedBodyButtons text-muted" id="otr-usr">
            <InputOptions Icon={Icons.HandThumbsUp} title="Like" />
            <InputOptions Icon={Icons.ChatLeftText} title="Comments" />
            <InputOptions Icon={Icons.ShareFill} title="Share" />
            <InputOptions Icon={Icons.ArrowRightCircle} title="Send" />
            {/* <div onClick={DeletePost}>
              <InputOptions Icon={Icons.TrashFill} title="Delete" />
            </div> */}
            {/* <div onClick={EditPost}>
              <InputOptions Icon={Icons.PencilFill} title="Edit" />
            </div> */}
          </div>
        )}
        <Accordion.Collapse eventKey="1">
          <Row>
            <Col>
              <InputGroup>
                <FormControl
                  placeholder="Update post text..."
                  id="input_accordion_update"
                />
              </InputGroup>
            </Col>
          </Row>
        </Accordion.Collapse>
      </Card>
      {edited ? (
        <Modal show={edited} onHide={!edited}>
          <Modal.Header closeButton>
            <Modal.Title>EDIT❤️ your post ✍🏻</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl
              id="post_inputfield"
              placeholder="Edit the text"
              value={postText}
              onChange={(e) => {
                console.log(e.target.value, "Modal typing");
                return setPostText(e.target.value);
              }}
            />
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-around">
            <Button variant="light" onClick={EditPost}>
              Discard
            </Button>
            <Button variant="success" onClick={SubmitEdit}>
              Change
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <></>
      )}
    </Accordion>
  );
};

export default MainFeed;
