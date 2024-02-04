import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import ToDoList from "./components/List";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addToDo = (event) => {
    event.preventDefault();

    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  };

  const deleteToDo = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };

  const editToDO = (index) => {
    const userInput = prompt(`Update To-Do ${index + 1}`);

    if (userInput !== null && userInput.trim() !== "") {
      setTasks((prevTasks) =>
        prevTasks.map((item, itemIndex) =>
          itemIndex === index ? userInput : item
        )
      );
    }
  };

  return (
    <div className="app">
      <h1>To-do List</h1>

      <Input
        value={newTask}
        handleInputChange={handleInputChange}
        addToDo={addToDo}
      />

      <ToDoList
        tasks={tasks}
        deleteMethod={deleteToDo}
        editMethod={editToDO}
      />
    </div>
  );
};

export default App;
