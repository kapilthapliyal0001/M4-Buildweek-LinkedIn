import React from "react";
import { useState, useRef } from "react";
import { Overlay, Popover } from "react-bootstrap";
import { BsFillCaretDownFill } from "react-bootstrap-icons";
import "./Divider.css";

const Divider = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  return (
    <div className="divider">
      <button onClick={handleClick}>
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref.current}
          containerPadding={20}
        >
          <Popover id="popover-contained" className="dividerHover">
            <Popover.Content className="dividerHover">Top</Popover.Content>
            <Popover.Content className="dividerHover">Recent</Popover.Content>
          </Popover>
        </Overlay>
        <hr></hr>
        <span className="dividerSpan1">Sort by: </span>
        <span className="dividerSpan2">Top</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            class="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Divider;
