import {FC} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Styled from 'styled-components'; 
import {StockDeatailPage, StockListPage} from './pages';

export const Router: FC = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StockListPage />}/>
          <Route path='/details/:id' element={<StockDeatailPage />}/>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = Styled.div `
  * {
    box-sizing: border-box;
  }

  margin-top: 20px;

  body {
    color: #383f4d;
    line-height: 1.5;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
  }
`;