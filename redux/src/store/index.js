import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { counter: 0 };
const counterSlice = createSlice({
  name: "counter", //name of the slice
  initialState, // initial state of the slice
  reducers: {
    // all reducers(methods) that this slice needs
    //we don't need actions cause this methods will be automatically called
    incr(state) {
      //here we are allowed to mutate states(it internally will be translated into immutable code)
      state.counter++;
    },
    decr(state, action) {
      state.counter = state.counter - action.payload;
    },
  },
});

let store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
  },
});

export const actions = counterSlice.actions;

export { store };
