import React from "react";
import { BsFill } from "react";
import "../MainFeed/InputOptions.css";

const InputOptions = ({ title, color, Icon }) => {
  return (
    <div className="inputOptions">
      <Icon style={{ color: color }} />
      <h4 className="inputOptionsText">{title}</h4>
    </div>
  );
};

export default InputOptions;
