import { useReducer } from "react";

// useReducer를 이용한 useState 구현
const useState0 = (initialState) => {
  const [state, diispatch] = useReducer(
    (state, action) => (typeof action === "function" ? action(state) : action),
    initialState
  );
  return [state, diispatch];
};

// 리팩토링
const reducer = (prev, action) =>
  typeof action === "function" ? action(prev) : action;

const useState1 = (initialState) => {
  useReducer(reducer, initialState);
};
