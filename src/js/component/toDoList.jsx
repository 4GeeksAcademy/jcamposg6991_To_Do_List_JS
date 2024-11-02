
import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");


  const addTask = (task) => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setInputValue("");
    }
  };


  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="toDoList">
      <h1>To do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTask(inputValue)}
        placeholder="What needs to be done?"
      />
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task.text}
            <button className="delete-button" onClick={() => removeTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
