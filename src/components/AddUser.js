import { ref, push } from "firebase/database";
import { database } from "../config/firebase-cf";
import { UseGetUser } from "../hooks/UseGetUserData";
import { useState } from "react";

function AddUser() {
  const { name, profilePhoto, userID, isAuth } = UseGetUser();
  const userRef = ref(database, "Kullanıcılar");
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState(null);

  const now = new Date();
  now.setHours(now.getHours() + 3);
  const user = {
    name,
    profilePhoto,
    userID,
    createdAt: now.toISOString(),
  };

  const addUser = async () => {
    try {
      setIsCreating(true);
      await push(userRef, user);
      setIsCreating(false);
    } catch (error) {
      setError(error);
      setIsCreating(false);
    }
  };

  return (
    <div>
      <button onClick={addUser}>Kullanıcı Ekle</button>
    </div>
  );
}

export default AddUser;
