import { actionsTyps } from "../constants";

const selectedStock = (data: any) => ({
  type: actionsTyps.SET_SELECTED_STOCK,
  payload: data,
});

export const setSelected = (selected: any) => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  console.log(selected, 'selectedsxasas')
  dispatch(selectedStock(selected))
};
