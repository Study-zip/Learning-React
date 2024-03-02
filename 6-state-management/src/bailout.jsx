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
