import React from 'react'
import "./Contact_task.css"
function Contact_task() {
  return (
    <div className='contact-body'>
         <div className="contact-page">
            <h2 className="contact-title">Contact Me 📞</h2>

            <div className="contact-box">
                <form className="contact-form">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                    />

                    <label>Message</label>
                    <textarea
                        placeholder="Write your message"
                        rows="5"
                        required
                    ></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact_task
