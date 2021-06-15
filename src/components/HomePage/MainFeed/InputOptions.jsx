import React from "react";
import "../MainFeed/InputOptions.css";

const InputOptions = ({ title, color, Icon }) => {
  return (
    <div className="inputOptions">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOptions;
