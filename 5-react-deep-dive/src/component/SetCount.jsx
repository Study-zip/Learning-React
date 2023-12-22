import React, { useState } from "react";

const SetCount = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          console.log("setCount 실행");
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default SetCount;
