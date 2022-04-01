import { actionsTyps } from "../constants";

const initialState = {
  data: [],
  fetching: false,
  error: false
};

export const stockListData = (state = initialState, action: { type: any; payload: any; }) => {
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