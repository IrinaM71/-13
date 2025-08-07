const initialState = {
  users: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Max" },
    { id: 3, name: "Irina" },
    { id: 4, name: "Henry" },
  ],
  filter: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default reducer;
