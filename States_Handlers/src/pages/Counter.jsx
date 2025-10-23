import React, { useState } from "react";
import CardLayout from "../components/CardLayout";
import CounterButton from "../components/CounterButton";
import Cards from "../components/Cards";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [counterMessage, setCounterMessage] = useState("Start counting!");

  return (
    <section className="flex flex-col items-center justify-center py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 w-full max-w-6xl">
        {/* Counter Card */}
        <CardLayout title={`Count: ${count}`}>
          <p className="text-blue-500">{counterMessage}</p>
          <div className="flex justify-center gap-2 w-full">
            <CounterButton
              label="–"
              onClick={() => {
                setCount(count - 1);
                setCounterMessage("Decreased");
              }}
            />
            <CounterButton
              label="Reset"
              variant="secondary"
              onClick={() => {
                setCount(0);
                setCounterMessage("Reset!");
              }}
            />
            <CounterButton
              label="+"
              onClick={() => {
                setCount(count + 1);
                setCounterMessage("Increased");
              }}
            />
          </div>
        </CardLayout>

        {/* Other Cards */}
        <Cards />
      </div>
    </section>
  );
};

export default Counter;
