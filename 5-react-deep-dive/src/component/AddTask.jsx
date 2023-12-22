import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddButtonClick = () => {
    onAddTask(text);
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleAddButtonClick}>Add Task</button>
    </div>
  );
};

export default AddTask;
