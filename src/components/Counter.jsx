import React, { useState } from "react";
import CounterButton from "../components/CounterButton";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Start counting!");

  const handleIncrement = () => {
    setCount(count + 1);
    setMessage("Counting up!");
  };

  const handleDecrement = () => {
    setCount(count - 1);
    setMessage("Counting down!");
  };

  const handleReset = () => {
    setCount(0);
    setMessage("Reset to zero!");
  };

  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center gap-6 bg-white text-blue-700 p-8 rounded-2xl shadow-xl w-80 border border-blue-200">
        <h2 className="text-4xl font-bold">Count: {count}</h2>
        <p className="text-lg text-blue-500">{message}</p>

        <div className="flex gap-3">
          <CounterButton
            onClick={handleDecrement}
            label="Decrement"
            styleClass="bg-blue-100 hover:bg-blue-200 text-blue-700"
          />
          <CounterButton
            onClick={handleReset}
            label="Reset"
            styleClass="bg-blue-500 hover:bg-blue-600 text-white"
          />
          <CounterButton
            onClick={handleIncrement}
            label="Increment"
            styleClass="bg-blue-700 hover:bg-blue-800 text-white"
          />
        </div>
      </div>

    </section>
  );
};

export default Counter;

