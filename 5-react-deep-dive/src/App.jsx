import React from "react";
import ForceUpdate from "./ForceUpdate";
import SetCount from "./assets/setCount";
import TaskApp from "./assets/Reduce";

function App() {
  return (
    <div>
      <h1>This is App Component</h1>
      <ForceUpdate />
      <SetCount />
      <TaskApp />
    </div>
  );
}

export default App;
