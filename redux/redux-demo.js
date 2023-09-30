let redux = require("redux");

let reducer = (prevState = { value: 0 }, action) => {
  switch (action.type) {
    case "incr": {
      return { value: prevState.value + 1 };
    }
    case "decr": {
      return { value: prevState.value - 1 };
    }
    default:
      break;
  }
};
let store = redux.createStore(reducer);
function counterSubscriber() {
  let value = store.getState();
  console.log(value);
}
store.subscribe(counterSubscriber);
store.dispatch({ type: "incr" });
store.dispatch({ type: "incr" });
