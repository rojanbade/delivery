export function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    case "multiply":
      return {
        count: state.count * 2,
      };
    default:
      return state;
  }
}
