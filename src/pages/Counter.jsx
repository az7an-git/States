import React, { useState } from "react";
import Card from "../components/Card";
import CounterButton from "../components/CounterButton";

const Counter = () => {
  // states for each card
  const [count, setCount] = useState(0);
  const [counterMessage, setCounterMessage] = useState("Start counting!");
  const [clickMessage, setClickMessage] = useState("Click the button!");
  const [name, setName] = useState("");
  const [doubleText, setDoubleText] = useState("Double-click the box below!");

  return (
    <section className="flex flex-col items-center justify-center py-8">
      {/* layout cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 w-full max-w-6xl">
        {/* Counter Card */}
        <Card title={`Count: ${count}`}>
          <p className="text-blue-500 ">{counterMessage}</p>
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
        </Card>

        {/* onClick Card */}
        <Card title="Click Event">
          <p className="text-blue-600 text-sm">{clickMessage}</p>
          <CounterButton
            label="Click Me"
            onClick={() => setClickMessage("You clicked me!")}
          />
        </Card>

        {/* onChange Card */}
        <Card title="Change Event">
          <input
            type="text"
            value={name}
            maxLength={20}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name..."
            className="border border-blue-300 rounded-md px-3 py-1 w-full text-sm focus:ring focus:ring-blue-200 outline-none truncate"
          />

          <p className="text-blue-500 text-sm">
            {name ? `Your name is: ${name}` : "Start typing above..."}
          </p>
        </Card>

        {/* onDoubleClick Card */}
        <Card title="DoubleClick Event">
          <div
            onDoubleClick={() => setDoubleText("You double-clicked me!")}
            className="border-2 border-blue-300 rounded-md p-3 cursor-pointer hover:bg-blue-50 w-full text-sm"
          >
            <p className="text-blue-600">{doubleText}</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Counter;
