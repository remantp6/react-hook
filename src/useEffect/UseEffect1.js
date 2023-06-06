import { React, useState, useEffect } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []); //if there is no empty array as dependency  it will render at every 2 sec
  //after first render of component
  return (
    <>
      <p>useEffect without any dependency</p>
      <h2>I have rendered {count} times</h2>
    </>
  );
};

export default UseEffect1;
