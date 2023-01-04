import React from "react";

interface CounterTwoProps {
  count: number;
  handleIncrement?: () => {};
  handleDecrement?: () => {};
}

export const CounterTwo = ({
  count,
  handleIncrement,
  handleDecrement,
}: CounterTwoProps) => {
  return (
    <div>
      <h1>Counter two</h1>
      <p>{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </div>
  );
};
