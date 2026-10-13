import {React,useState,useEffect} from 'react'

function Counternum() {
    const[count,setcount]=useState(0);
    const[count1,setcount1]=useState(0);
    // useEffect(()=>{
    //         document.title="count"
            
    // },[])
    // useEffect(()=>{
            
    //         setcount(42);
    // },[count])
    //   useEffect(()=>{
            
    // })
    function timeout(){
        setTimeout(
            ()=>{
                console.log("test");   
            },10000
        );
    }
    function interval(){
        setInterval(()=>{
            console.log("test2");  
        },1000
    )
    }
  return (
    <div>
        {count}<br/>
      <button onClick={()=>{setcount(count+1)}}>+</button>
      <button onClick={()=>{setcount(count-1)}}>-</button>
      <button onClick={()=>{setcount(0)}}>reset</button><br/>
      {count1}<br/>
      <button onClick={()=>{setcount1(count1+1)}}>+</button>
      <button onClick={timeout}>time</button>
      <button onClick={interval}>Interval</button>
    </div>
  )
}

export default Counternum
