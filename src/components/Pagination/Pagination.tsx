import { FC } from "react";
import styled from "styled-components";

type PaginationProps = {
  postsPerPage: number;
  totalPosts: number;
  paginate: (n: number) => void;
}
export const Pagination: FC<PaginationProps> = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <PaginationWrapper>
        {pageNumbers.map(number => (
          <ListItem key={number} className='page-item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </ListItem>
        ))}
      </PaginationWrapper>
    </nav>
  );
};

const PaginationWrapper = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  list-style: none;
`;