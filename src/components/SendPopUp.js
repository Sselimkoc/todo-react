import React from "react";
import { UseGetUserData } from "../hooks/UseGetUserData";
import UseGetUsers from "../hooks/UseGetUsers";
export function SendPopUp() {
  const { users } = UseGetUsers();
  const { name } = UseGetUserData();
  return (
    <>
      <div className="gif-container">
        <img
          src="#"
          alt="GIF Resim"
        />
      </div>
      <div className="user-btn-pop-ct">
        {users.map((user) => (
          <div key={user.name}>
            {user.name !== name ? (
              <button className="user-btn-pop">{user.name}</button>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}
