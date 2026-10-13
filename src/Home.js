import React from "react";
import { Link, Outlet ,} from "react-router-dom";
function Home(){
   // const navigate=useNavigate()
    return(
         <>
         <Link to="about">about</Link><br/>
         {/* <button onClick={()=>navigate("about")}>open</button><br/> */}
         <Outlet/>
         </>
    )
 }
 export default Home 
//  useNavigate