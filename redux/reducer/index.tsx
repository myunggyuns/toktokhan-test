import { combineReducers, AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { productReducer } from "./ProductReducer";

export interface State {}

const combinedReducer: any = combineReducers({
  productReducer,
});

export const rootReducer = (state: State, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    default:
      return combinedReducer(state, action);
  }
};
