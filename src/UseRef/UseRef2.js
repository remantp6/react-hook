import React, { useState, useRef } from "react";

const UseRef2 = () => {
  const [myData, setMyData] = useState("");
  const inputElem = useRef("");
  const handleDOM = () => {
    inputElem.current.style.backgroundColor = "dodgerblue";
  };
  const Reset = () => {
    setMyData("");
    inputElem.current.focus();
  };
  return (
    <>
      <p>It is used to access the DOM element directly</p>
      <input
        ref={inputElem}
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <button value="submit" onClick={handleDOM}>
        Submit
      </button>
      <button value="submit" onClick={Reset}>
        Reset
      </button>
    </>
  );
};

export default UseRef2;
