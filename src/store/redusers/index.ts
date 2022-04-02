import { combineReducers } from "redux";
import { stockListData } from "./stockList";
import { stockHistoryData } from "./stockHistory";
import { selectedStock } from "./selected";

export const rootReducers = combineReducers({
  stockListData,
  stockHistoryData,
  selectedStock,
});