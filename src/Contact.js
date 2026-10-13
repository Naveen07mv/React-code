import React from "react";
import { Link,Outlet,} from "react-router-dom";
 const Contact=()=>{
    return(
         <>
            <Link to="payment">payment</Link><br/>
            <Outlet/>
         </>
    )
 }
 export default Contact