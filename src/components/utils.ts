import { GroupedHistoryType, HistoryType } from "./types";

export const getOptions = (data: GroupedHistoryType) => {
  let groupingUnits = [
    ['day', [1]],
    ['week', [1]],
    ['month', [1, 3]]
  ]
  return {
    rangeSelector: {

      buttons: [
        {
          text: '1d',
          type: 'day',
          count: 1,
        }, {
          text: '1w',
          type: 'week',
          count: 1,
        }, {
          text: '1m',
          type: 'month',
          count: 1,
        }, {
          text: '3m',
          type: 'month',
          count: 3,
        }],

      allButtonsEnabled: true,
      inputEnabled: true,

    },

    title: {
      text: ''
    },

    yAxis: [
      {
        labels: {
          align: "right",
          x: -3
        },
        title: {
          text: "OHLC"
        },
        height: "80%",
        lineWidth: 1,
        resize: {
          enabled: true
        }
      },
      {
        labels: {
          align: "right",
          x: -3
        },
        title: {
          text: "Volume"
        },
        top: "65%",
        height: "35%",
        offset: 0,
        lineWidth: 1
      }
    ],

    tooltip: {
      split: false
    },

    series: [
      {
        type: "line",
        name: "AAPL",
        data: data.ohlc,
        dataGrouping: {
          units: groupingUnits
        }
      },
      {
        type: "column",
        name: "Volume",
        data: data.volume,
        yAxis: 1,
        dataGrouping: {
          units: groupingUnits
        }
      }
    ]
  };
}

export const groupedHistoryData = (stockHistory: HistoryType[]): GroupedHistoryType => stockHistory.reduce((acc: GroupedHistoryType, history) => {
  const date = new Date(history.date)
  acc.ohlc.push([date.getTime(), history.close]);
  acc.volume.push([date.getTime(), history.volume]);
  return acc;
}, { ohlc: [], volume: [] })
