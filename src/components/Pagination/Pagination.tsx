import {FC} from "react";
import styled from "styled-components";

type PaginationProps = {
  postsPerPage: number;
  totalPosts: number;
  paginate: (n : number) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number
}
export const Pagination: FC < PaginationProps > = ({postsPerPage, totalPosts, paginate, setCurrentPage, currentPage}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const goToNextPage = () => {
    setCurrentPage((page: number) => page + 1);
  }

  const goToPreviousPage = () => {
    setCurrentPage((page: number) => page - 1);
  }

  return (
    <nav>
      <PaginationWrapper>
        <ListItem>
          <Button disabled={currentPage === 1} onClick={goToPreviousPage}>
            {'<'}
          </Button>
        </ListItem>
        {
        pageNumbers.map(number => (
          <ListItem key={number}>
            <Button isCurrent={currentPage === number} onClick={() => paginate(number)}>{number}</Button>
          </ListItem>
        ))
      }
        <ListItem>
          <Button disabled={currentPage === postsPerPage} onClick={goToNextPage}>
            {'>'}
          </Button>
        </ListItem>
      </PaginationWrapper>
    </nav>
  );
};

const PaginationWrapper = styled.ul `
  display: flex;
`;

const ListItem = styled.li `
  list-style: none;
`;

const Button = styled.button<{isCurrent?: boolean}>`
    background-color:#fff;
    color: ${({isCurrent}) => isCurrent ? '#149ee3' : '#b4b0b0'};
    border: ${({isCurrent}) => isCurrent ? '2px solid #149ee3' : '1px solid#b4b0b0'}; 
    border-radius: 2px;
    padding: 6px 8px;
    margin-left: 2px;
    &:disabled {
      color: #e3e1e1;
      border: 1px solid#e3e1e1;
    }
`