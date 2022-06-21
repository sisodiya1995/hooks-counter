import React from "react";
import { useState } from "react";
function App() {
  let [count, setCount] = useState(0);
  return (
    <>
      <h2>counter : {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount((count = 0));
        }}
      >
        Reset
      </button>
    </>
  );
}
export default App;
