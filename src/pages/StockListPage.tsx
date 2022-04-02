import {FC, useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {createSelector} from "reselect";
import Styled from 'styled-components';

import {Table} from "../components";
import { Pagination } from "../components/Pagination";
import {getStockList} from "../store/actions/getStockList";

const getReduxData = createSelector(
  (state : any) => state.stockListData, 
  (stockList : any) => ({ stockList })
);

export const StockListPage: FC = () => {
  const { stockList } = useSelector(getReduxData)
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    dispatch(getStockList())
  }, [dispatch]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = stockList.data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  console.log(stockList);
  return (
    <>
      <TableContainer>
        <Table data={currentPosts} />
      </TableContainer>
      <Pagination
          postsPerPage={postsPerPage}
          totalPosts={stockList.data.length}
          paginate={paginate}
      />
    </>
  )
}

const TableContainer = Styled.div `
  max-width: 800px;
  max-height: 600px;
  margin: 0 auto;
  overflow: auto;
`;
