import { Avatar } from "@material-ui/core";
import * as Icons from "react-bootstrap-icons";
import React from "react";
import "../MainFeed/MainFeed.css";
import InputOptions from "../MainFeed/InputOptions";

const MainFeed = ({ name, description, post, Icon }) => {
  return (
    <div className="MainFeed">
      <div className="MainFeedHeader">
        <Avatar />
        <div className="MainHeaderInfo">
          <h2>name</h2>
          <p>description</p>
        </div>
      </div>
      <div className="MainFeedBody">
        <p>post</p>
      </div>
      <div className="MainFeedBodyButtons">
        <InputOptions Icon={Icons.HandThumbsUp} title="Like" />
        <InputOptions Icon={Icons.ChatLeftText} title="Comments" />
        <InputOptions Icon={Icons.ShareFill} title="Share" />
        <InputOptions Icon={Icons.ArrowRightCircle} title="Send" />
      </div>
    </div>
  );
};

export default MainFeed;
