import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#000");

  function handleChangeColor(e) {
    setColor(e.target.value);
  }

  // simple brightness check in one line
  const textColor =
    parseInt(color.replace("#", ""), 16) > 0xffffff / 2 ? "black" : "white";

  return (
    <div className="flex flex-col items-center">
      <h1 className="m-10 text-5xl font-bold">Color-Picker</h1>

      <div
        className="text-center text-2xl size-55 flex justify-center items-center border-2 border-indigo-200 rounded-2xl mb-5 transition delay-50"
        style={{ backgroundColor: color, color: textColor }}
      >
        <p>Selected Color: {color}</p>
      </div>

      <label className="text-xl">Select a Color below:</label>
      <input
        type="color"
        value={color}
        className="cursor-pointer w-20 h-10 rounded-2xl"
        onChange={handleChangeColor}
      />
    </div>
  );
}

export default ColorPicker;
