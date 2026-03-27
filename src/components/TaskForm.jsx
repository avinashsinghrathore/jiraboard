import React from "react";
import "./TaskForm.css";
import Tag from "./Tag";
import { useState } from "react";

function TaskForm({ setTasks }) {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "Ready for development",
    tags: [],
  });

  function checkTag(tag) {
    return taskData.tags.some((item) => item === tag);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
    // console.log(taskData);
  }

  function selectedTag(tag) {
    setTaskData((prev) => {
      const isSelected = prev.tags.includes(tag);
      const tags = isSelected
        ? prev.tags.filter((item) => item !== tag)
        : [...prev.tags, tag];
      return { ...prev, tags };
    });
  }
  // console.log(taskData);

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter task details"
          onChange={handleChange}
        />
        <div className="task_form_bottom">
          <div>
            <Tag
              tagName="DEV"
              selectedTag={selectedTag}
              selected={checkTag("DEV")}
            />
            <Tag
              tagName="QA"
              selectedTag={selectedTag}
              selected={checkTag("QA")}
            />
            <Tag
              tagName="Product Owner"
              selectedTag={selectedTag}
              selected={checkTag("Product Owner")}
            />
          </div>
          <div className="taskform_select_sec">
            <select
              className="task_status"
              onChange={handleChange}
              name="status"
            >
              <option value="Ready for development">
                Ready for development
              </option>
              <option value="In progress">In progress</option>
              <option value="Ready for test">Ready for test</option>
              <option value="Closed">Closed</option>
            </select>
            <button className="task_submit">+ Add</button>
          </div>
        </div>
      </form>
    </header>
  );
}

export default TaskForm;
