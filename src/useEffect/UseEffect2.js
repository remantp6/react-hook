import { React, useState, useEffect } from "react";

const UseEffect2 = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  const handleEffect = () => {
    setCount((count) => count + 1);
  };
  useEffect(() => {
    setTimeout(() => {
      setCalculation(() => count * 2);
    }, 2000);
  }, [count]); //while clickOn count state variable
  // value of calculation is updated after 2 second (2000ms)
  //by setCalculation(() => count*2)
  return (
    <>
      <h4>{count}</h4>
      <button onClick={handleEffect}>+</button>
      <p>If the count variable updates, the effect will run again:</p>
      <h4>{calculation}</h4>
    </>
  );
};

export default UseEffect2;
