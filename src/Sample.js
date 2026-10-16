import React from "react";
import { useState } from "react";

function Counter(){
  const [count, setCount] = useState(2);
  return (
    <>
      <h1>{count}</h1>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <button onClick={() => {setCount(count * 5);}}>Increment</button>
      <button onClick={() => {setCount(count / 10);}}>Decrement</button>
    </>
  );
};

export default Counter;
