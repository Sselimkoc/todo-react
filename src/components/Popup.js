import React from "react";
import "../assets/Popup.css";
import userData from "../UserData/Data";
import { AiFillCloseSquare } from "react-icons/ai";

function Popup(props) {
  const sendUser = props.children;
  console.log("sendUser", sendUser);
  console.log("userData", userData);

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="gif-container">
          <img
            src="https://media.tenor.com/-iIR7TukOEQAAAAd/zenci-göt.gif"
            alt="GIF Resim"
          />
        </div>
        <button onClick={() => props.setTrigger(false)} className="popup-close">
          <AiFillCloseSquare className="btn-exit" size={25} />
        </button>
        <div className="user-btn-pop-ct">
          {userData.map((user) => (
            <div key={user.name}>
              {user.name !== sendUser ? (
                <button className="user-btn-pop">{user.name}</button>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
