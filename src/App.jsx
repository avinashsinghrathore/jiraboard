import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import closedIcon from "./assets/icon_ok.jpg";

function App() {
  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="Ready for development" />
        <TaskColumn title="In progress" />
        <TaskColumn title="Ready for test" />
        <TaskColumn title="Closed" icon={closedIcon} />
      </main>
    </div>
  );
}

export default App;
