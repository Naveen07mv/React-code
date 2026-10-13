import React, { useEffect, useState } from "react";
import "./App.css";
import './Task2.css'
const TaskTracker = () => {
  const [tasks, setTasks] = useState([
    { id: 101, title: "Complete Assessment", details: { priority: "High", isCompleted: false } },
    { id: 103, title: "Complete projects", details: { priority: "High", isCompleted: true } }
  ]);

  useEffect(() => {
    fetch("http://localhost:8888/")
      .then(response => response.json())
      .then(data => setTasks(data))
  }, [])
  const handleTitleChange = (id, newTitle) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, title: newTitle } : task
    ));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, details: { ...task.details, isCompleted: true } } : task
    ));
  };

  return (
    <div className="one">
      {tasks.map((task) => {
        const { title, details: { priority, isCompleted } } = task;
        return (
          <div key={task.id} className="task-card" >
            <h2>Task: {title}</h2>
            {priority === "High" && <span className="badge">URGENT!</span>}

            <div className="box">

              <input 
                type="text" 
                value={title} 
                onChange={(e) => handleTitleChange(task.id, e.target.value)} 
                placeholder="Update title"
              />
              <button onClick={() => toggleComplete(task.id)} disabled={isCompleted}>
                {isCompleted ? "Completed" : "Mark as Done"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskTracker;