import { FC } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import { GroupedHistoryType } from '../types';
import { getOptions } from '../utils';

type StockChartProps = {
  data: GroupedHistoryType;
}
export const StockChart: FC<StockChartProps> = ({ data }) => {
  if (!data) return null

  return <HighchartsReact
    highcharts={Highcharts}
    constructorType={'stockChart'}
    options={getOptions(data)}
  />
}