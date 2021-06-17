import { Avatar } from "@material-ui/core";
import * as Icons from "react-bootstrap-icons";
import React from "react";
import "../MainFeed/MainFeed.css";
import InputOptions from "../MainFeed/InputOptions";
import { useState } from "react";

const MainFeed = ({ post }) => {
  return (
    <div className="MainFeed">
      <div className="MainFeedHeader">
        <Avatar src={post.user.image} />
        <div className="MainHeaderInfo">
          <h2>{post.user.name + " " + post.user.surname || ""}</h2>
          <p>{post.user.title || ""}</p>
        </div>
      </div>
      <div className="MainFeedBody">
        <p>{post.text}</p>
        <img src={post.image}></img>
      </div>
      <hr></hr>
      <div className="MainFeedBodyButtons">
        <InputOptions Icon={Icons.HandThumbsUp} title="Like" />
        <InputOptions Icon={Icons.ChatLeftText} title="Comments" />
        <InputOptions Icon={Icons.ShareFill} title="Share" />
        <InputOptions Icon={Icons.ArrowRightCircle} title="Send" />
        {/* <GetPosts /> */}
      </div>
    </div>
  );
};

export default MainFeed;
