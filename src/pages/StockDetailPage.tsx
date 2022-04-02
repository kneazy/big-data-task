import styled from 'styled-components';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { StockChartsContainer } from '../components';
import { ReduxProps } from '../types';

export const StockDeatailPage: FC = () => {
  const { selected } = useSelector<ReduxProps, any>((state) => state.selectedStock)

  return (
    <StockChartWrapper>
      <HeaderContainer>
        <div>
          <Title>{selected?.symbol}</Title>
          <Description>{selected?.companyName}</Description>
          <Earnings>Earnings: 21-121-12</Earnings>
          <MarketCap>Market Cap: ${selected.marketCap.toLocaleString()}</MarketCap>
        </div>
        <div>
          <Price>{selected.latestPrice}</Price>
          <PriceChangeColor isPozitive={selected.change > 0} >{selected.change}%</PriceChangeColor>
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