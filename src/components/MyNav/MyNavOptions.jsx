import React from "react";
import "./MyNavOptions.css";
import { Avatar } from "@material-ui/core";

const MyNavOptions = ({ Icons, title, avatar }) => {
  return (
    <div className="myNavOptions">
      {Icons && <Icons className="myNavOptionsIcon" />}
      {avatar && <Avatar className="myNavOptionsIcon" src={avatar} />}
      <a className="myNavOptionsTitle" href={"/" + title}>
        {title}
      </a>
    </div>
  );
};

export default MyNavOptions;
