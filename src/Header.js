import {React,useState} from "react";

// console.log((ctime<"03:10:2026")?"online":"offline");
function Header(){
    const [status,setstatus]=useState("");
    const ctime = new Date().toLocaleTimeString
    console.log(ctime);
    if(ctime>="16:07:00"&&status!="grey"){
        console.log("system is offline");
        setstatus("grey")
    }
    return(
        <div style={{width:"100%",height:"100vh",backgroundColor : status}}>
              <center>header</center> 
               <center>{status}</center>
               <button >test</button>
        </div>
    )
}
export default Header;