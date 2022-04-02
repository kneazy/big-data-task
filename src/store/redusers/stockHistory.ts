import type { AnyAction } from "redux";
import type { HistoryType } from "../../types";
import { actionsTyps } from "../constants";

const initialState = {
  data: [],
  fetching: false,
  error: false
};


export type stockHistoryDataState = {
  data: HistoryType[];
  fetching: boolean;
  error: boolean;
}

export const stockHistoryData = (state: stockHistoryDataState = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionsTyps.GET_STOCK_HISTORY:
      return {
        ...state,
        data: action.payload,
        error: false
      };
    case actionsTyps.ERROR_STOCK_HISTORY:
      return {
        ...state,
        error: true
      };
    case actionsTyps.FETCHING_STOCK_HISTORY:
      return {
        ...state,
        fetching: action.payload,
      };
    default:
      return state;
  }
};