import { actionsTyps } from "../constants";

const initialState = {
  data: [],
  fetching: false,
  error: false
};

type HistoryType = {
  average: number;
  close: number
  date: string
  high: number
  label: string
  low: number
  minute: string
  notional: number
  numberOfTrades: number
  open: number
  volume: number
}


export type State = {
  data: HistoryType[];
  fetching: boolean;
  error: boolean;
}

export const stockHistoryData = (state: State = initialState, action: { type: any; payload: any; }) => {
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