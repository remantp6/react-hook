import React, { memo } from "react";

const Child1 = () => {
  console.log("Child app rendered");
  return (
    <>
      <p>
        First react rendered parent and child component but after on changing
        state leads re-render of both components
      </p>
    </>
  );
};

export default memo(Child1);
//here memo is a higher order function or component .Higher order component means that
//one component takes another component as parameter
//it wraps around a component to memoize the rendered output and avoid unnecessary renderings.
//This improves performance because it memoizes the result and skips rendering to reuse
//the last rendered result.
