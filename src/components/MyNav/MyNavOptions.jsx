import React from "react";
import "./MyNavOptions.css";
import { Avatar } from "@material-ui/core";

const MyNavOptions = ({ Icons, title, avatar }) => {
  return (
    <div className="myNavOptions">
      {Icons && <Icons className="myNavOptionsIcon" />}
      {avatar && <Avatar className="myNavOptionsIcon" src={avatar} />}
      <h4 className="myNavOptionsTitle">{title}</h4>
    </div>
  );
};

export default MyNavOptions;
