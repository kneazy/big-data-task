import { FC } from 'react';
import HighchartsReact from 'highcharts-react-official';

export const StockChart: FC<any> = ({ options, highcharts }) => <HighchartsReact
  highcharts={highcharts}
  constructorType={'stockChart'}
  options={options}
/>