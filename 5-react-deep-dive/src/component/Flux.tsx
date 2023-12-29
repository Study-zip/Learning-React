import React from "react";
import { useReducer } from "react";

type StoreState = {
  count: number;
};

type Action = { type: "add"; payload: number }; 
// payload는 전송되는 데이터를 의미한다.

function reducer(prevState: StoreState, action: Action) {
  const { type: ActionType } = action;
  if (ActionType === "add") {
    return {
      count: prevState.count + action.payload,
    };
  }

  throw new Error(`Unexpected Action [${ActionType}]`);
}

export default function App() {
  const [state, dispatcher] = useReducer(reducer, { count: 0 });

  function handleClick() {
    dispatcher({ type: "add", payload: 1 });
  }

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
