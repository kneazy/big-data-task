import type { HistoryType } from "../../types";
import { actionsTyps } from "../constants";
import { request } from "./request";

const responseData = ( data: HistoryType[]) => ({
  type: actionsTyps.GET_STOCK_HISTORY,
  payload: data,
});

const fetching = (fetching: boolean) => ({
  type: actionsTyps.FETCHING_STOCK_HISTORY,
  payload: fetching,
});

const error = (error: boolean) => ({
  type: actionsTyps.ERROR_STOCK_HISTORY,
  payload: error,
});

type DispatchType = { 
  type: string;
  payload: HistoryType[] | boolean; 
}

export const getStockHistory = (symbol: string | undefined, range: string) => async (dispatch: (arg0: DispatchType) => void) => {
  dispatch(fetching(true))
  try {
    const response = await request().get(`/stock/${symbol}/chart/${range}`, {
      params: {
        token: process.env.REACT_APP_API_KEY,
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
