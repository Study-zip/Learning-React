import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Counter from "./hooks/useEffect.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Counter />
  </React.StrictMode>
);
