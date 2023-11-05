import React, { useState } from "react";
import useCreateToDo from "../hooks/useCreateToDo";
import { MdAddBox } from "react-icons/md";
import "../assets/task.css";
export default function Task() {
  const [taskName, setTaskName] = useState("");
  const { createToDo } = useCreateToDo();
  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName) {
      createToDo(taskName);
      setTaskName("");
    }
  };

  return (
    <div className="task-container">
      <input
        className="task-input"
        placeholder="Görev ekleyin..."
        required
        type="text"
        value={taskName}
        onChange={handleTaskNameChange}
      />
      <button className="add-button" onClick={handleAddTask}>
        <MdAddBox className="add-icon" />
      </button>
    </div>
  );
}
