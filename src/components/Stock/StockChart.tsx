import { FC } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import { GroupedHistoryType } from '../types';
import { getOptions } from '../utils';
import { useParams } from 'react-router';

type StockChartProps = {
  data: GroupedHistoryType;
}
export const StockChart: FC<StockChartProps> = ({ data }) => {
  const { id } = useParams();

  return <HighchartsReact
    highcharts={Highcharts}
    constructorType={'stockChart'}
    options={getOptions(data, id)}
  />
}