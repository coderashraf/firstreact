
import React from "react"
import '../App.css'
import { useState } from "react";

const FunctionComponent = () =>{
  const [isActive, setActive] = useState("false");

  function dispFuncComp(){
    setActive(!isActive);
  }
  
    return (
      <div id="FuncComp" >
        <button onClick={dispFuncComp}>To see styling in functional component</button>
        <div className={isActive ? "none" : "card"}>
          <h3>This is created using functional component</h3>
          <p>This is done using external CSS</p>
          <p>This is done using inline CSS</p>
        </div>
      </div>
    );
  }
export default FunctionComponent