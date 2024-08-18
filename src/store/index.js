import { configureStore, createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return (state = !state);
    },
  },
});

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload);
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload);
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;

export default counterStore;

/* const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};


const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "Increment") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "Decrement") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "Add") {
    return {
      ...store,
      counter: store.counter + Number(action.payload.num),
    };
  } else if (action.type === "Subtract") {
    return {
      ...store,
      counter: store.counter - Number(action.payload.num),
    };
  } else if (action.type === "Privacy") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
}; */
