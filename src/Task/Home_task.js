import React from 'react'
import './Home_task.css'
import About_task from './About_task';
import Accordion_task from './Accordion_task';
import Contact_task from './Contact_task';
import Login_task from './Login_task';
import Project_task from './Project_task';
import Skills_task from './Skills_task';
import { Routes, Route, Link } from 'react-router-dom';
function Home_task() {
    return (
        <div className='bodyHome'>
            <header className="header">
                <h1 className='logo'>My Potfolio</h1>
            <center className='linkalain'>
                <Link to='/home' style={{ marginRight: "50px" }}>Home</Link>
                <Link to='/about' style={{ marginRight: "50px" }}>About</Link>
                <Link to='/contact' style={{ marginRight: "50px" }}>Contact</Link>
                <Link to='/login' style={{ marginRight: "50px" }}>Login</Link>
                <Link to='/accordion' style={{ marginRight: "50px" }}>Accordion</Link>
                <Link to='/project' style={{ marginRight: "50px" }}>Project</Link>
                <Link to='/skills' style={{ marginRight: "50px" }}>Skills</Link>
            </center></header>
            <Routes>
                <Route path="/" element={<Home_task />} />
                <Route path='/about' element={<About_task />} />
                <Route path="/contact" element={<Contact_task />} />
                <Route path="/login" element={<Login_task />} />
                <Route path='/accordion' element={<Accordion_task />} />
                <Route path="/project" element={<Project_task />} />
                <Route path="/skills" element={<Skills_task />} />
            </Routes>
            <div className='homeMain'>
                <center>
                <h1>Welcome to my portFolio</h1>
                <p>Hi I'm Srinaveen</p>
                <p>Student||Full stack developer</p>
                <p>Muthayammal engineering college,Rasipuram</p>
                <p></p>
                </center>
            </div>
            <footer className="footer">
                <p>© 2026 My Website | My Portfolio</p>
            </footer>
        </div>
    )
}

export default Home_task
