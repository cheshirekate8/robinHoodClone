import React from 'react';
import { Line } from 'react-chartjs-2';

let months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function WatchlistGraph() {
  const data = {
    labels: months,
    datasets: [
      {
        data: [10, 25, 45, 100, 250, 225, 400, 300, 350, 450, 500],
        fill: false,
        backgroundColor: '#00C807',
        borderColor: '#00C807',
      }
    ]
  };



  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    tooltips: {
      mode: 'index',
      intersect: false
    },
    scales: {
      xAxes: {
        ticks: {
          display: true
        }
      },
      yAxes: {
        ticks: {
          display: true
        }
      },
    }
  };


  return (
    <div className='watchlist-graph'>
      <Line
        data={data}
        options={options}
      />
    </div>
  )
}

export default WatchlistGraph;
