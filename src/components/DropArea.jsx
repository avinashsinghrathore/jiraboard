import React from "react";
import "./DropArea.css";
import { useState } from "react";

function DropArea() {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      className={showDrop ? "drop_area" : "hide_drop"}
      onDragEnter={() => {
        setShowDrop(true);
      }}
      onDragLeave={() => {
        setShowDrop(false);
      }}
    >
      Drop area here
    </section>
  );
}

export default DropArea;
