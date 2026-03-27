import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import closedIcon from "./assets/icon_ok.jpg";

function App() {
  const [tasks, setTasks] = useState([]);
  // console.log(tasks);

  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="Ready for development"
          tasks={tasks}
          status="Ready for development"
        />
        <TaskColumn title="In progress" tasks={tasks} status="In progress" />
        <TaskColumn
          title="Ready for test"
          tasks={tasks}
          status="Ready for test"
        />
        <TaskColumn
          title="Closed"
          icon={closedIcon}
          tasks={tasks}
          status="Closed"
        />
      </main>
    </div>
  );
}

export default App;
