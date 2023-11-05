import React, { useState } from "react";
import useCreateToDo from "../hooks/useCreateToDo";

export default function Task() {
  const [taskName, setTaskName] = useState("");
  const { createToDo } = useCreateToDo(); //sürekli render olmasını nasıl engellerım
  const handleTaskNameChange = (e) => {
    e.preventDefault();
    setTaskName(e.target.value);
  };
  const handleAddTask = () => {
    createToDo(taskName);
    setTaskName("");
  };
  return (
    <>
      <input
        placeholder="Görev ekleyin..."
        required
        type="text"
        value={taskName}
        onChange={handleTaskNameChange}
      />
      <button onClick={handleAddTask}>add</button>
    </>
  );
}
