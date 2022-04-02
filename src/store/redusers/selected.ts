import type { AnyAction } from "redux";
import { StockType } from "../../types";
import { actionsTyps } from "../constants";


export type SelectedState = {
  selected: StockType;
}

const initialState = {
  selected: {},
};

// @ts-ignore
export const selectedStock = (state: SelectedState = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionsTyps.SET_SELECTED_STOCK:
      return {
        selected: action.payload,
      };

    default:
      return state;
  }
};