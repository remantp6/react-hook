import React from "react";
import "./App.css";
import Counter from "./useState/Counter";
import Form from "./useState/Form";
import UseEffect1 from "./useEffect/UseEffect1";
import UseEffect2 from "./useEffect/UseEffect2";
import Parent from "./UseContext/Parent";
import Reducer from "./UseReducer/Reducer";
import UseRef1 from "./UseRef/UseRef1";
import UseRef2 from "./UseRef/UseRef2";
import UseMemo from "./UseMemo/UseMemo";
import UseMemo1 from "./UseMemo/UseMemo1";
import UseCallBack from "./UseCallback/UseCallBack";
import Thumbnail from "./components/Thumbnail";

const App = () => {
  return (
    <>
      <Thumbnail />
      <Counter />
      <Form />
      <UseEffect1 />
      <UseEffect2 />
      <Parent />
      <Reducer />
      <UseRef1 />
      <UseRef2 />
      <UseMemo />
      <UseMemo1 />
      <UseCallBack />
    </>
  );
};

export default App;
