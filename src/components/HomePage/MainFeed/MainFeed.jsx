import { Avatar } from "@material-ui/core";
import * as Icons from "react-bootstrap-icons";
import React from "react";
import "../MainFeed/MainFeed.css";
import InputOptions from "../MainFeed/InputOptions";
import { useState } from "react";
import PostFeed from "../PostFeed/PostFeed";
import GetPosts from "./GetPosts";

const MainFeed = ({ name, description, post }) => {
  const [posts, setPosts] = useState([]);

  return (
    <div className="MainFeed">
      <div className="MainFeedHeader">
        <Avatar />
        <div className="MainHeaderInfo">
          <h2>{name || ""}</h2>
          <p>{description || ""}</p>
        </div>
      </div>
      <div className="MainFeedBody">
        <p>{post.text}</p>
      </div>
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
