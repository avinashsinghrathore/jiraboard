import React from "react";
import "./TaskForm.css";
import Tag from "./Tag";
import { useState } from "react";

function TaskForm() {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "Ready for development",
    tags: [],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(taskData);
  }

  function selectedTag(tag) {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  }
  console.log(taskData);

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
            <Tag tagName="DEV" selectedTag={selectedTag} />
            <Tag tagName="QA" selectedTag={selectedTag} />
            <Tag tagName="Product Owner" selectedTag={selectedTag} />
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
