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
      <MessageChanger />
      <TextInputExample />
    </section>
  );
};

export default Counter;

// Now Changing Dom Content
const MessageChanger = () => {
  const [message, setMessage] = useState("Hey!");

  const changeMessage = () => {
    setMessage("You clicked ME!");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold text-blue-600">{message}</h2>

      <CounterButton
        onClick={changeMessage}
        label="Change Message"
        styleClass="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      />
    </div>
  );
};

function TextInputExample() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="text-center ">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-80 text-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Enter Your Name
        </h2>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter Name..."
          className="text-blue-600 border focus:ring outline-none rounded-lg px-3 py-2 w-full transition-all duration-200 placeholder:text-gray-400 focus:placeholder:text-transparent"
        />
        <p className="mt-4 text-blue-500 text-lg">
          {name ? `Your name is: ${name}` : "Start typing above..."}
        </p>
      </div>
    </div>
  );
}
