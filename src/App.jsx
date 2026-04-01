import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import closedIcon from "./assets/icon_ok.jpg";

function App() {
  const getLocalStorage = localStorage.getItem("tasks");
  // console.log("getLocalStorage", getLocalStorage);

  // const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useState(JSON.parse(getLocalStorage) || []);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((tasks, index) => index !== taskIndex);
    setTasks(newTask);
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="Ready for development"
          tasks={tasks}
          status="Ready for development"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
        />
        <TaskColumn
          title="In progress"
          tasks={tasks}
          status="In progress"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
        />
        <TaskColumn
          title="Ready for test"
          tasks={tasks}
          status="Ready for test"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
        />
        <TaskColumn
          title="Closed"
          icon={closedIcon}
          tasks={tasks}
          status="Closed"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
        />
      </main>
      <h3>active Card{activeCard}</h3>
    </div>
  );
}

export default App;
