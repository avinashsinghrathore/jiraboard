import React from "react";
import Tag from "./Tag";
import deleteIcon from "../assets/iconsdelete.png";
import "./TaskCard.css";

function TaskCard() {
  return (
    <article className="task_card">
      <p className="task_text">This is sample text</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagname="DEV" />
          <Tag tagname="QA" />
        </div>
        <div className="task_delete">
          <img src={deleteIcon} alt="" className="delete_icon" />
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
