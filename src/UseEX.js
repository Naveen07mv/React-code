import React from "react";
import { useState } from "react";
function Counter(){
  const [count, setCount] = useState(0);
//   function handleI(){
//     setCount(count+1)
//   }
//   function handleD(){
//     setCount(count-1)
//   }
  return (
    <>
    <center>
      <h1>{count}</h1>
      <button onClick={() => {setCount(count + 100);}}>Increment</button>
      <button onClick={() => {setCount(count - 100);}}>Decrement</button>
      {/* <button onClick={handleI}>I</button>
      <button onClick={handleD}>D</button> */}
    </center>  
    </>
  );
};

export default Counter;