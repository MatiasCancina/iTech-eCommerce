import React from "react";

const Counter = ({ counter, setCounter, max }) => {
  const increase = () => counter < max && setCounter(counter + 1);
  const decrease = () => counter > 1 && setCounter(counter - 1);

  return (
    <div className="flex items-center gap-3">
      <button onClick={decrease} className="active:bg-blue-600">
        -
      </button>
      <p>{counter}</p>
      <button onClick={increase} className="active:bg-blue-600">
        +
      </button>
    </div>
  );
};

export default Counter;
