import React from 'react'
import './Project_task.css'
 const projects = [
        {
            name: "Portfolio Website",
            description: "A personal portfolio website built using React and CSS."
        },
        {
            name: "Task Management Dashboard",
            description: "An application to add, complete, and delete tasks."
        },
        {
            name: "Shopping Cart",
            description: "A shopping application with products, prices, and quantity management."
        }
    ]

function Project_task() {
  return (
    <div className="project-page">
            <h1>My Projects</h1>

            <div className="project-container">
                {projects.map((project) => (
                    <div className="project-card" key={project.name}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Project_task
