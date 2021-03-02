const appReducer = (state = "", action) => {
  console.log("heeey", action.payload);
  switch (action.type) {
    case "SET_TOKEN":
      return action.payload;
    default:
      return state;
  }
};

export default appReducer;
