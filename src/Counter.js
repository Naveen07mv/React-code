import React, { useState } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const toggleTheme = () => {
    setIsDark(prevMode => !prevMode);
  };
  return (
    <div className={isDark ? "container dark" : "container"}>
      <h1>Counter App</h1>
      <h2 className="count">{count}</h2>
      <div className="buttons">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="toggle-section">
        <label className="switch">
          <input
            type="checkbox"
            checked={isDark}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
        <span>{isDark ? "Dark Mode" : "Light Mode"}</span>
      </div>
    </div>
    
  );
}

export default Counter;