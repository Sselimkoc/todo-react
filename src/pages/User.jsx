import React, { useState } from "react";
import "../assets/User.css";
import { auth, provider } from "../config/firebase-cf";
import { signInWithPopup } from "firebase/auth";
import UserButton from "../components/UserButton";

function User() {
  const [isLoggin, setIsLoggin] = useState("");
  const signInWithGoogle = async () => {
    const sign = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: sign.user.uid,
      name: sign.user.displayName,
      profilePhoto: sign.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("Auth", JSON.stringify(authInfo));
    setIsLoggin(authInfo.name);
  };

  return (
    <div className="user">
      <div className="user-container">
        <img className="image" src="https://i.imgur.com/vRuq4eP.png" alt="" />
        <div className="user-buttons">
          {isLoggin ? (
            <UserButton authname={isLoggin}></UserButton>
          ) : (
            <button
              className="google-sign-in-button"
              onClick={signInWithGoogle}
            >
              Google İle Giriş Yap
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
