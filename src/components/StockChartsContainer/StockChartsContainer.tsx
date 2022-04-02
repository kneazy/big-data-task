import { useParams } from 'react-router';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getStockHistory } from '../../store/actions/getStockHistory';
import { State } from '../../store/redusers/stockHistory';
import { groupedHistoryData } from '../utils';
import { StockChart } from '../Stock/StockChart';
import { ReduxProps } from '../../types';

const RANGE = '3m'

export const StockChartsContainer: FC = () => {
  const stockHistory = useSelector<ReduxProps, State>((state) => state.stockHistoryData);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getStockHistory(id, RANGE))
  }, [dispatch, id])

  return stockHistory.fetching ? <h1>...Loading</h1> : <StockChart data={groupedHistoryData(stockHistory.data)} />
}