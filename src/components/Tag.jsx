import React from "react";
import "./Tag.css";

function Tag(props) {
  const { selectedTag, tagName } = props;
  return (
    <>
      <button
        type="button"
        className="tag"
        onClick={() => {
          selectedTag(tagName);
        }}
      >
        {tagName}
      </button>
    </>
  );
}

export default Tag;
