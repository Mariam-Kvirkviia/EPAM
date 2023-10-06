import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store";
const Counter = () => {
  const dispatch = useDispatch();
  let counter = useSelector((state) => state.counterReducer.counter);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>

      <button
        onClick={() => {
          dispatch(actions.incr());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(actions.decr(3));//{type:unique identi....;payload:3}
        }}
      >
        -
      </button>
    </main>
  );
};

export default Counter;
