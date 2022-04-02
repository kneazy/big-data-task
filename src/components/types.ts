export type GroupedHistoryType = {
  ohlc: number[][];
  volume: number[][];
} 

export type HistoryType = {
  average: number;
  close: number
  date: string
  high: number
  label: string
  low: number
  minute: string
  notional: number
  numberOfTrades: number
  open: number
  volume: number
}