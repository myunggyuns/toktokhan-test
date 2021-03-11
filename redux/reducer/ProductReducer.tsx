import {
  ENTER_ACCIDENT_CONTENT,
  SELECT_IS_ACCIDENT,
  SELECT_CAR_COMPANY,
  CLEAR,
  ENTER_CAR_PRICE,
  SELECT_FOREIGN_CAR,
} from "../action/UIActionTypes";

type State = {
  isAccident: boolean;
  content: string;
  company: string;
  carPrice: string;
  foreignCar: boolean;
};

type Action = {
  type: string;
  isAccident: boolean;
  content: string;
  company: string;
  carPrice: string;
  foreignCar: boolean;
};

const initState = {
  isAccident: false,
  content: "",
  company: "",
  carPrice: "",
  foreignCar: false,
};

export const productReducer = (state: State = initState, action: Action) => {
  switch (action.type) {
    case CLEAR:
      return initState;

    case SELECT_IS_ACCIDENT:
      return { ...state, isAccident: action.isAccident };

    case ENTER_ACCIDENT_CONTENT:
      return { ...state, content: action.content };

    case SELECT_CAR_COMPANY:
      return { ...state, company: action.company };

    case SELECT_FOREIGN_CAR:
      return { ...state, foreignCar: action.foreignCar };

    case ENTER_CAR_PRICE:
      let price = action.carPrice;
      if (price === "") {
        price = "0";
      }
      return { ...state, carPrice: parseInt(price) };

    default:
      return state;
  }
};
