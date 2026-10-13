import React from "react";
import ChildB from "./childB";
const ChildA=({trail})=>{
    return(
        <div style={{border:'1px solid blue',margin:'10px',width:'20cm'}}>
        <h1>childA {trail.name}</h1>
        <ChildB t={trail}/>
        </div> 
    )
}
export default ChildA