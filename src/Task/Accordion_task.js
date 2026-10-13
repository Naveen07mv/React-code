import React from 'react'
import { useState } from 'react'
import './Accordion_task.css'

function Accordion_task() {
  const [open, setOpen] = useState(null)

  const questions = [
    {
      question: "1. Tell me about yourself?",
      answer: "I am an engineering student interested in web development. I enjoy learning new technologies and building projects using React, JavaScript, HTML, and CSS."
    },
    {
      question: "2. What projects have you developed?",
      answer: "I have developed projects like a Personal Portfolio Website, Task Management Dashboard, and Shopping Cart application using React and CSS."
    }
  ]
  return (
    <div>
        <div className="accordion-page">
            <h1>Frequently Asked Questions</h1>

            <div className="accordion-container">
                {questions.map((item,index)=>(
                    <div className="accordion-item" key={index}>
                        <div
                            className="accordion-question"
                            onClick={()=>setOpen(open===index?null:index)}
                        >
                            <span>{item.question}</span>
                            <span>{open===index?"−":"+"}</span>
                        </div>

                        {open===index && (
                            <div className="accordion-answer">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Accordion_task

