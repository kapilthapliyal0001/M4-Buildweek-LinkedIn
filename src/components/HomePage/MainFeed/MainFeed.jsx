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
} from "react-bootstrap";
import {useState} from "react";

const MainFeed = ({post}) => {
  function greetUser() {
    console.log("Hi there, user!");
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
            </div>
          </Accordion.Toggle>
        ) : (
          <div className="MainFeedBodyButtons text-muted">
            <InputOptions Icon={Icons.HandThumbsUp} title="Like" />
            <InputOptions Icon={Icons.ChatLeftText} title="Comments" />
            <InputOptions Icon={Icons.ShareFill} title="Share" />
            <InputOptions Icon={Icons.ArrowRightCircle} title="Send" />
            <div onClick={DeletePost}>
              <InputOptions Icon={Icons.TrashFill} title="Delete" />
            </div>
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
    </Accordion>
  );
};

export default MainFeed;
