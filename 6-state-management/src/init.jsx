const init = (count) => ({ count, text: "hi" });

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "SET_TEXT":
      if (!action.text) {
        return state;
      }
      return { ...state, text: action.text };
    default:
      throw new Error("Unknown action type");
  }
};

const Component = () => {
  const [state, dispatch] = useReducer(reducer, 0, init);
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <input
        value={state.text}
        onChange={(e) => dispatch({ type: "SET_TEXT", text: e.target.value })}
      />
    </div>
  );
};
