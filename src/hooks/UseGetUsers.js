import React, { useEffect, useState } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { database } from "../config/firebase-cf";

function UseGetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = ref(database, "Users");
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              name: data,
            })
          );
          console.log("userArray", userArray);
          setUsers((prevUsers) => [...prevUsers, ...userArray]);
        } else {
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return { users };
}

export default UseGetUsers;
