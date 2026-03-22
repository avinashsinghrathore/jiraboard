import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

function TaskColumn(props) {
  return (
    <>
      <section className="task_column">
        <h2 className="task_column_heading">
          <img src={props.icon} alt="" className="task_column_icon" />
          {props.title}
        </h2>
        <TaskCard />
      </section>
    </>
  );
}

export default TaskColumn;
