import type { StockType } from "../../types";
import { actionsTyps } from "../constants";

type DispatchType = { 
  type: string;
  payload: StockType; 
}

const selectedStock = (data: StockType) => ({
  type: actionsTyps.SET_SELECTED_STOCK,
  payload: data,
});

export const setSelected = (selected: StockType) => (dispatch: (arg0: DispatchType) => void) => {
  dispatch(selectedStock(selected))
};
