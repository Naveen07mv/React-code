import React from "react";
import { Link, Outlet } from "react-router-dom";
 const About=()=>{
    return(
         <>
        <Link to="contact">contact</Link><br/>
         <Outlet/>
         </>
    )
 }
 export default About