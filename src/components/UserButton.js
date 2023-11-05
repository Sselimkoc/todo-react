import React from "react";
import { useNavigate } from "react-router-dom";
import UseGetUsers from "../hooks/UseGetUsers";

function UserButton() {
  const { users } = UseGetUsers();
  const navigate = useNavigate();
  const selectUser = (user) => {
    login(user);
  };

  const login = (user) => {
    navigate(`/${user.name}/${user.id}`);
  };

  return (
    <div>
      {users.map((user) => (
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
