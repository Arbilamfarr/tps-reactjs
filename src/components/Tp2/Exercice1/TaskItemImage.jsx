import React, { useState } from "react";

export default function TaskItemImage({ photo }) {
  const [completed, setComleted] = useState(photo.completed);
  const change = () => setComleted(!completed);
  return (
    <li
      id={photo.id}
      className="list-group-item bg-success my-2 rounded-2 py-2 "
    >
      <input
        type="checkbox"
        className="form-check-input mx-2"
        onChange={change}
        checked={completed}
      ></input>
      <img src={photo.src} style={{ boxSizing:'border-box',border: completed ? "5px solid red" : "none" }} ></img>
     
    </li>
  );
}
