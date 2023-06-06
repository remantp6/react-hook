import React from "react";
import { createContext } from "react";
import Child1 from "./Child1";

const userContext = createContext();
const Parent = () => {
  const userDetails = {
    name: "Remanta",
    gender: "male",
  };
  return (
    <>
      <userContext.Provider value={userDetails}>
        <Child1 />
      </userContext.Provider>
    </>
  );
};
export default Parent;
export { userContext };
