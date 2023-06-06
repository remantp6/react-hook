import React from "react";

const Child = () => {
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

export default Child;
