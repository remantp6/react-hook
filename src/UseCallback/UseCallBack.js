import React from "react";
import { useState, useCallback } from "react";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const genRandNum = useCallback(() => Math.random() * 10, []); //here value is changed
  console.log("I am rendered app component"); //as only function is memoized in cache
  //and it returns function
  return (
    <>
      <br />
      {genRandNum()}{" "}
      {/*here usecallback memoized function so invoke function () */}
      <br />
      <h4>useCallback hook demo</h4>
      {count}
      <br />
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </>
  );
};

export default UseCallBack;
