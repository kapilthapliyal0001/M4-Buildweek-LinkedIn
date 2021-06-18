import { Avatar } from "@material-ui/core";
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
import { useState } from "react";

const MainFeed = ({ post }) => {
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
        <hr></hr>
        {post.user._id === "60c8aef9a3a3d700151cb054" ? (
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <div className="MainFeedBodyButtons">
              <InputOptions Icon={Icons.HandThumbsUp} title="Like" />
              <InputOptions Icon={Icons.ChatLeftText} title="Comments" />
              <InputOptions Icon={Icons.ShareFill} title="Share" />
              <InputOptions Icon={Icons.ArrowRightCircle} title="Send" />
            </div>
          </Accordion.Toggle>
        ) : (
          <div className="MainFeedBodyButtons">
            <InputOptions Icon={Icons.HandThumbsUp} title="Like" />
            <InputOptions Icon={Icons.ChatLeftText} title="Comments" />
            <InputOptions Icon={Icons.ShareFill} title="Share" />
            <InputOptions Icon={Icons.ArrowRightCircle} title="Send" />
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
