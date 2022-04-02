import { actionsTyps } from "../constants";


export type State = {
  selected: any;
}

const initialState = {
  selected: {},
};

export const selectedStock = (state: State = initialState, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case actionsTyps.SET_SELECTED_STOCK:
      return {
        selected: action.payload,
      };

    default:
      return state;
  }
};