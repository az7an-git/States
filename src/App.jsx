import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <header className="text-center">
        <h1 className="text-5xl text-red-600">Header</h1>
      </header> */}
      <main className="flex flex-col gap-5 items-center justify-center h-dvh">
        <h2 className="text-4xl">Count: {count}</h2>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded w-fit"
        >
          Increment
        </button>
      </main>
    </>
  );
}

export default App;
