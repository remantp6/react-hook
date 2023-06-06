import React, { useState, useEffect, useRef } from "react";

const UseRef1 = () => {
  const [myData, setMyData] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <h1>Learning useRef</h1>
      <p>
        useRef is used to avoid re-renders when updated if we tried to count how
        many times our application renders using useState
      </p>
      <input
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <h4>The numbers of times render {count.current}</h4>
    </>
  );
};

export default UseRef1;
