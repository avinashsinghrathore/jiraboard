import React from "react";
import "./Tag.css";

function Tag(props) {
  return (
    <>
      <button className="tag">{props.tagname}</button>
    </>
  );
}

export default Tag;
