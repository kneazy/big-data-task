import Highcharts from 'highcharts';
import { StockChart } from '../components' 

export const StockDeatailPage = () => {

  
  return (
    <div>
      <h2>Highstock</h2>
      <StockChart options={options} highcharts={Highcharts} />
    </div>
  )
}