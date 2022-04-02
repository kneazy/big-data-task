import { actionsTyps } from "../constants";
import { request } from "./request";

const responseData = (res: { data: any }) => ({
  type: actionsTyps.GET_STOCK_HISTORY,
  payload: res.data,
});

const fetching = (fetching: boolean) => ({
  type: actionsTyps.FETCHING_STOCK_HISTORY,
  payload: fetching,
});

const error = (error: boolean) => ({
  type: actionsTyps.ERROR_STOCK_HISTORY,
  payload: error,
});

export const getStockHistory = (symbol: any, range: any) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  dispatch(fetching(true))
  try {
    const response = await request().get(`/stock/${symbol}/chart/${range}`, {
      params: {
        token: process.env.REACT_APP_API_KEY,
      },
    });
    dispatch(responseData(response));
  } catch (e) {
    dispatch(error(false))
    console.error(e);
  } finally {
    dispatch(fetching(false))
  }
};
