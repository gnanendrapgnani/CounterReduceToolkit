import { createStore } from "redux";

const INITIAL_VALUE = {
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
};

const counterStore = createStore(counterReducer);

export default counterStore;
