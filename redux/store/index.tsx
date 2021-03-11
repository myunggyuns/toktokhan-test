import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import { rootReducer } from "../reducer/index";

const initStore = () => {
  const store = createStore(rootReducer);

  return store;
};

export const wrapper = createWrapper(initStore);
