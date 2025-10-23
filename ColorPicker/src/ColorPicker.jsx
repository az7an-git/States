import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#fff");

  function handleChangeColor(e) {
    setColor(e.target.value);
  }
  return (
    <div className="">
      <h1>Color-Picker</h1>
      <div style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handleChangeColor} />
    </div>
  );
}
export default ColorPicker;
