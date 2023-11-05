import React, { useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database";
import { database } from "../config/firebase-cf";
import { UseGetUserData } from "./UseGetUserData";

function UseGetUsers() {
  const [todos, setTodos] = useState([]);
  const { name } = UseGetUserData();

  useEffect(() => {
    const todosRef = ref(database, "Görevler/Selim");

    const todoListener = onValue(todosRef, (snapshot) => {
      if (snapshot.exists()) {
        const todoData = snapshot.val();
        const todoArray = Object.keys(todoData).map((taskLocal) => ({
          taskLocal,
          ...todoData[taskLocal],
        }));

        console.log("todoArray", todoArray);
        setTodos(todoArray);
      }
    });

    return () => {
      off(todosRef, "value", todoListener);
    };
  }, [name]);

  return { todos };
}

export default UseGetUsers;
