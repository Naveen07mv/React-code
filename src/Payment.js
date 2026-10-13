import React from "react";
import { Link,Outlet} from "react-router-dom";
 const Payment=()=>{
    return(
         <>
         <Link to="NotFound">notfound</Link><br/>
         <Outlet/>
         </>
    )
 }
 export default Payment