import { useState } from "react";
import { ref, push } from "firebase/database";
import { database, db } from "../config/firebase-cf";
import { UseGetUserData } from "../hooks/UseGetUserData";
import { collection, addDoc } from "firebase/firestore";

function useCreateToDo() {
  // const { name } = UseGetUserData();
  const name = "Selim";
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState(null);
  const generateUniqueTaskID = () => {
    return Date.now().toString() + Math.random().toString(36).substring(7);
  };
  console.log("first");
  const createToDo = async (taskname) => {
    try {
      const todoCloudRef = collection(db, "created");
      setIsCreating(true);
      const todoRef = ref(database, `Görevler/${name}`);
      const now = new Date();
      now.setHours(now.getHours() + 3);

      const taskID = generateUniqueTaskID();

      const todo = {
        task: taskname,
        taskID: taskID,
        createdBy: name,
        currentDev: name,
        isDone: false,
        createdAt: now.toISOString(),
      };
      const todo2 = {
        task: taskname,
        taskID: taskID,
        createdBy: name,
        createdAt: now.toISOString(),
      };

      await addDoc(todoCloudRef, todo2);
      await push(todoRef, todo);
      setIsCreating(false);
    } catch (error) {
      setError(error);
    }
  };

  return { createToDo, isCreating, error };
}

export default useCreateToDo;
