import { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "../config/firebase-cf";
import { UseGetUserData } from "../hooks/UseGetUserData";
function useCreateToDo() {
  const { name } = UseGetUserData();
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState(null);
  const createToDo = async (taskname) => {
    try {
      setIsCreating(true);
      const todoRef = ref(database, "Görevler");
      const now = new Date();
      now.setHours(now.getHours() + 3);
      const todo = {
        task: taskname,
        createdBy: name,
        createdAt: now.toISOString(),
      };
      console.log("todo", todo);
      await push(todoRef, todo);
      setIsCreating(false);
    } catch (error) {
      setError(error);
    }
  };
  return { createToDo, isCreating, error };
}

export default useCreateToDo;
