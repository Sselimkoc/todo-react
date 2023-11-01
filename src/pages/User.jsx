import React, { useState } from "react";
import "../assets/User.css";
import { useNavigate } from "react-router-dom";
import userData from "../UserData/Data";
function User() {
  const users = userData;
  const [logUser, setLogUser] = useState(null);

  const selectUser = (user) => {
    setLogUser(user);
  };
  const navigate = useNavigate();
  const login = (user) => {
    navigate(`/${user.name}/${user.id}`);
  };
  console.log("user", logUser);
  return (
    <div className="user">
      <div className="user-container">
        <img className="image" src="https://i.imgur.com/vRuq4eP.png" alt="" />
        <div className="user-buttons">
          {users.map((user) => (
            <div
              key={user.id}
              className="user-btn"
              a
              onClick={() => {
                selectUser(user);
                login(user);
              }}
            >
              {user.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default User;
