import {FC, useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';

import {Table} from "../components";
import { Pagination } from "../components";
import {getStockList} from "../store/actions/getStockList";
import { ReduxProps } from "../types";

const postsPerPage = 10

export const StockListPage: FC = () => {
  const stockList = useSelector<ReduxProps, any>((state) => state.stockListData)
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!stockList.data.length) {
      dispatch(getStockList())
    }
  }, [dispatch, stockList.data.length]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = stockList.data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Wrapper>
      {stockList.fetching ? (
        <h1>...Loading</h1>
      ) : (
        <>
          <TableContainer>
            <Table data={currentPosts} />
          </TableContainer><PaginationContainer>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={stockList.data.length}
            paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} />
          </PaginationContainer>
        </>
      )}
    </Wrapper>
  )
}

const TableContainer = styled.div `
  max-height: 500px;
  overflow: auto;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: end;
`
const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;