import React, { useState } from "react";
import CarInput from "./CarInput";
import CarFields from "../data/CarFields";

function CarForm() {
  const [car, setCar] = useState({
    year: 2024,
    make: "BMW",
    model: "M3 CS",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prev) => ({
      ...prev,
      [name]: name === "year" ? Number(value) : value,
    }));
  };

  return (
    <>
      <div>
        <h1 className="font-bold text-4xl mb-5 text-blue-600">
          Objects Update in States
        </h1>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-6 w-100">
        <p className="text-center text-lg font-semibold text-gray-700">
          Your favorite car is:{" "}
          <span className="text-blue-600">
            {car.year} {car.make} {car.model}
          </span>
        </p>

        {CarFields.map((field) => (
          <CarInput
            key={field.name}
            type={field.type || "text"}
            name={field.name}
            value={car[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
          />
        ))}
      </div>
    </>
  );
}

export default CarForm;
