import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    count === 0 ? setCount(0) : setCount(count - 1);
  }
  return (
    <>
      <h1>useState</h1>
      <div className="count">
        <button onClick={incrementCount}>+</button>
        <h2>{count}</h2>
        <button onClick={decrementCount}>-</button>
      </div>
    </>
  );
};

export default Counter;
