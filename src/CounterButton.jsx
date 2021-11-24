import React from "react";

const CounterButton = ({ clickHandler }) => {
  return <button onClick={clickHandler}>Increment</button>;
};

export default CounterButton;
