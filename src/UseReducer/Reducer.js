import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return (state += 1);
    case "DEC":
      if (state === 0) {
        return state;
      }
      return state - 1;
    default:
      return state;
  }
};
const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h3>UseReducer</h3>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </>
  );
};

export default Reducer;
