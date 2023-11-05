import React from "react";
import "../assets/Popup.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { SendPopUp } from "./SendPopUp";
import Task from "./Task";

function Popup(props) {
  const check = () => {
    switch (props.trigger) {
      case "send":
        return <SendPopUp></SendPopUp>;
      case "task":
        return <Task></Task>;
      default:
        return <h1>No project match</h1>;
    }
  };
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button onClick={() => props.setTrigger("")} className="popup-close">
          <AiFillCloseSquare className="btn-exit" size={25} />
        </button>
        <div>{check()}</div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
