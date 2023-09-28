import React, { useState } from "react";
import "./counterbutton.css";

const CounterButton: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
      <div className="styled-counterbutton">
        <button className="counter-button" onClick={decrement}>
          -
        </button>
        <span className="styled-count">{count}</span>
        <button className="counter-button" onClick={increment}>
          +
        </button>
      </div>
  );
};

export default CounterButton;
