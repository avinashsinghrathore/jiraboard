import React from "react";
import "./TaskForm.css";
import Tag from "./Tag";

function TaskForm() {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter task details"
        />
        <div className="task_form_bottom">
          <div>
            <Tag tagname="DEV" />
            <Tag tagname="QA" />
            <Tag tagname="Product Owner" />
          </div>
          <div className="taskform_select_sec">
            <select className="task_status">
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
