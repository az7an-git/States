import React from "react";

const CounterButton = ({ onClick, label, colorClass }) => {
  return (
    <button
      onClick={onClick}
      className={`${colorClass} px-4 py-2 rounded-lg font-semibold text-sm shadow-md hover:scale-105 transition-transform duration-200`}
    >
      {label}
    </button>
  );
};

export default CounterButton;
