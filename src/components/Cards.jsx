import React, { useState } from "react";
import CardLayout from "./CardLayout";
import CounterButton from "./CounterButton";

const Cards = () => {
  const [clickMessage, setClickMessage] = useState("Click the button!");
  const [name, setName] = useState("");
  const [doubleText, setDoubleText] = useState("Double-click the box below!");

  return (
    <>
      {/* onClick Card */}
      <CardLayout title="Click Event">
        <p className="text-blue-600 text-sm">{clickMessage}</p>
        <CounterButton
          label="Click Me"
          onClick={() => setClickMessage("You clicked me!")}
        />
      </CardLayout>

      {/* onChange Card */}
      <CardLayout title="Change Event">
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
      </CardLayout>

      {/* onDoubleClick Card */}
      <CardLayout title="DoubleClick Event">
        <div
          onDoubleClick={() => setDoubleText("You double-clicked me!")}
          className="border-2 border-blue-300 rounded-md p-3 cursor-pointer hover:bg-blue-50 w-full text-sm"
        >
          <p className="text-blue-600">{doubleText}</p>
        </div>
      </CardLayout>
    </>
  );
};

export default Cards;
