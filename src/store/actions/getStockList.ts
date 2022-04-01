import { actionsTyps } from "../constants";
import { request } from "./request";

const responseData = (res: { data: any }) => ({
  type: actionsTyps.GET_STOCK_LIST,
  payload: res.data,
});

const fetching = (fetching: boolean) => ({
  type: actionsTyps.FETCHING_STOCK_LIST,
  payload: fetching,
});

const error = (error: boolean) => ({
  type: actionsTyps.FETCHING_STOCK_LIST,
  payload: error,
});

export const getStockList = () => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  dispatch(fetching(true))
  try {
    const response = await request().get("/stock/market/list/mostactive", {
      params: {
        token: process.env.REACT_APP_API_KEY,
        listLimit: 100,
      },
    });
    console.log(response);
    dispatch(responseData(response));
  } catch (e) {
    dispatch(error(false))
    console.error(e);
  } finally {
    dispatch(fetching(false))
  }
};
