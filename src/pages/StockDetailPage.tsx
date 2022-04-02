import styled from 'styled-components';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { StockChartsContainer } from '../components';
import { ReduxProps } from '../types';
import { getStockList } from '../store/actions/getStockList';
import type { StockListDataState } from '../store/redusers/stockList';
import type { SelectedState } from '../store/redusers/selected';
import { setSelected } from '../store/actions/setSelected';

export const StockDeatailPage: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const stockList = useSelector<ReduxProps, StockListDataState>((state) => state.stockListData)
  const { selected } = useSelector<ReduxProps, SelectedState>((state) => state.selectedStock)

  useEffect(() => {
    if (!stockList.data.length) {
      dispatch(getStockList())
    }
  }, [dispatch, stockList.data.length]);

  useEffect(() => {
    if (!Object.keys(selected).length) {
      const s = stockList.data.find(({ symbol }) => id === symbol);
      if (s) {
        dispatch(setSelected(s))
      }
    }
  }, [dispatch, id, selected, stockList.data]);

  return (
    <StockChartWrapper>
      <HeaderContainer>
        <div>
          <Title>{selected?.symbol}</Title>
          <Description>{selected?.companyName}</Description>
          <Earnings>Earnings: {selected?.latestTime}</Earnings>
          <MarketCap>Market Cap: ${selected?.marketCap?.toLocaleString()}</MarketCap>
        </div>
        <div>
          <Price>{selected?.latestPrice}</Price>
          <PriceChangeColor isPozitive={selected?.change > 0} >{selected.change}%</PriceChangeColor>
        </div>
      </HeaderContainer>
      <StockChartsContainer />
    </StockChartWrapper>
  )
}

const StockChartWrapper = styled.div `
  max-width: 800px;
  max-height: 600px;
  margin: 0 auto;
  overflow: auto;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Description = styled.div`
  margin: 0;
  font-size: 10px;
  color: #c9c9c9;
`;

const Earnings = styled.div`
  margin-top: 10px;
  font-size: 10px;
`;

const MarketCap = styled.div`
  font-size: 10px;
  color: #c9c9c9;
`;

const Price = styled.h1`
  margin: 0;
`;

const PriceChangeColor = styled.div<{ isPozitive: boolean }>`
  text-align: end;
  color: ${(props) => props.isPozitive ? 'green' : 'red' }
`