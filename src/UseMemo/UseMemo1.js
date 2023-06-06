import React from "react";
import { useState, useMemo } from "react";
import Child from "./Child";

const UseMemo1 = () => {
  const [count, setCount] = useState(0);
  const genRandNum = useMemo(() => Math.random() * 10, []); //it tells not to change
  console.log("I am rendered app component"); //value in next render as it use the memoized value from cache
  return (
    <div>
      <br />
      {genRandNum} {/*here usememo memoized value so variable inside {} */}
      <br />
      <h4>useMemo hook demo</h4>
      {count}
      <br />
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <Child />
    </div>
  );
};

export default UseMemo1;
