import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userData from "../UserData/Data";

function UserButton(authname) {
  console.log("authname", authname);
  const users = userData;
  const filteredUsers = users.filter((user) => user.id !== authname);
  const navigate = useNavigate();

  const selectUser = (user) => {
    login(user);
  };

  const login = (user) => {
    navigate(`/${user.name}/${user.id}`);
  };

  return (
    <div>
      {filteredUsers.map((user) => (
        <div
          key={user.id}
          className="user-btn"
          onClick={() => selectUser(user)}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default UserButton;
