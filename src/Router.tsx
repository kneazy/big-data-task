import {FC} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import {StockListPage} from './pages';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StockListPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
