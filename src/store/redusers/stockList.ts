import type { AnyAction } from "redux";
import type { StockType } from "../../types";
import { actionsTyps } from "../constants";

const initialState = {
  data: [],
  fetching: false,
  error: false
};

export type StockListDataState = {
  data: StockType[];
  fetching: boolean;
  error: boolean;
}


export const stockListData = (state: StockListDataState = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionsTyps.GET_STOCK_LIST:
      return {
        ...state,
        data: action.payload,
        error: false
      };
    case actionsTyps.ERROR_GET_STOCK_LIST:
      return {
        ...state,
        error: true
      };
    case actionsTyps.FETCHING_STOCK_LIST:
      return {
        ...state,
        fetching: action.payload,
      };
    default:
      return state;
  }
};