import type { StockType } from "../../types";
import { actionsTyps } from "../constants";
import { request } from "./request";

const responseData = (data: StockType[]) => ({
  type: actionsTyps.GET_STOCK_LIST,
  payload: data,
});

const fetching = (fetching: boolean) => ({
  type: actionsTyps.FETCHING_STOCK_LIST,
  payload: fetching,
});

const error = (error: boolean) => ({
  type: actionsTyps.ERROR_GET_STOCK_LIST,
  payload: error,
});

type DispatchType = { 
  type: string;
  payload: StockType[] | boolean; 
}

export const getStockList = () => async (dispatch: (arg0: DispatchType) => void) => {
  dispatch(fetching(true))
  try {
    const response = await request().get("/stock/market/list/mostactive", {
      params: {
        token: process.env.REACT_APP_API_KEY,
        listLimit: 100,
      },
    });
    dispatch(responseData(response.data));
  } catch (e) {
    dispatch(error(false))
    console.error(e);
  } finally {
    dispatch(fetching(false))
  }
};
