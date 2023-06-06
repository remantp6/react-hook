import React from "react";
import { useState } from "react";
import Child from "./Child";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const genRandNum = () => Math.random() * 10;
  console.log("I am rendered app component");
  return (
    <>
      <br />
      {genRandNum()}
      <br />
      <h4>problem without useMemo hook demo</h4>

      {count}
      <br />
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <Child />
    </>
  );
};

export default UseMemo;
