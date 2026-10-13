
import React from 'react'
import './Skills_task.css'

function Skills_task() {
    const skills = [
        { name: "Java", percent: 90 },
        { name: "JavaScript", percent: 75 },
        { name: "React", percent: 70 },
        { name: "MongoDB", percent: 65 },
    ]

    return (
        <div className="skills-page">
            <h2>My Skills</h2>
            <p className="skills-subtitle">
                Technologies I have learned and practiced.
            </p>

            <div className="skills-container">
                {skills.map((skill) => (
                    <div className="skill-card" key={skill.name}>
                        <div className="skill-info">
                            <span>{skill.name}</span>
                            <span>{skill.percent}%</span>
                        </div>

                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: skill.percent + "%" }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills_task
