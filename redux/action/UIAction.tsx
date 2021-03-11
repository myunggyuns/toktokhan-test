import {
  ENTER_ACCIDENT_CONTENT,
  SELECT_IS_ACCIDENT,
  SELECT_CAR_COMPANY,
  CLEAR,
  ENTER_CAR_PRICE,
  SELECT_FOREIGN_CAR,
} from "./UIActionTypes";

export const clear = () => ({ type: CLEAR });

export const selectIsAccident = (isAccident: boolean) => ({
  type: SELECT_IS_ACCIDENT,
  isAccident,
});
export const enterAccident = (content: string) => ({
  type: ENTER_ACCIDENT_CONTENT,
  content,
});
export const selectCarCompany = (company: string) => ({
  type: SELECT_CAR_COMPANY,
  company,
});
export const enterCarPrice = (carPrice: string) => ({
  type: ENTER_CAR_PRICE,
  carPrice,
});
export const selectForeignCar = (foreignCar: boolean) => ({
  type: SELECT_FOREIGN_CAR,
  foreignCar,
});
