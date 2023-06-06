import React from "react";
import { useContext } from "react";
import { userContext } from "./Parent";

const Child2 = () => {
  const userName = useContext(userContext);
  return (
    <>
      <h3>
        My name is {userName.name} and gender is {userName.gender}
      </h3>
    </>
  );
};

export default Child2;
