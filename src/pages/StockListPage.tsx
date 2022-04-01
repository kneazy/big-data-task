import {FC, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {createSelector} from "reselect";
import Styled from 'styled-components';

import {Table} from "../components";
import {getStockList} from "../store/actions/getStockList";

const getReduxData = createSelector(
  (state : any) => state.stockListData, 
  (stockList : any) => ({ stockList })
);

export const StockListPage: FC = () => {
  const { stockList } = useSelector(getReduxData)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStockList())
  }, [dispatch]);
  console.log(stockList);
  return (
    <Wrapper>
      <TableContainer>
        <Table data={stockList.data} />
      </TableContainer>
    </Wrapper>
  )
}

const Wrapper = Styled.div `
  margin-top: 20px;
  * {
    box-sizing: border-box;
  }

  body {
    color: #383f4d;
    line-height: 1.5;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
  }
  `;

  const TableContainer = Styled.div `
    max-width: 800px;
    max-height: 600px;
    margin: 0 auto;
    overflow: auto;
  `;
