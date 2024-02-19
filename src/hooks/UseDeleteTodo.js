import { useState, useEffect } from "react";
import { ref, remove } from "firebase/database";
import { database } from "../config/firebase-cf";

const useDeleteTodo = () => {
  const [error, setError] = useState(null);

  const deleteTodo = async (taskLocal) => {
    console.log("taskID", taskLocal);
    const dbRef = ref(database, `Görevler/Selim/${taskLocal}`);
    try {
      await remove(dbRef);
    } catch (error) {
      setError(error);
    }
  };

  return { deleteTodo, error };
};

export default useDeleteTodo;
