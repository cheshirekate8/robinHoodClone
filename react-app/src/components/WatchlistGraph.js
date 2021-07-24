import React from 'react';
import { Line } from 'react-chartjs-2';

let months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function WatchlistGraph({props}) {

  // console.log(props)

  let sparks = [];
  let labels = [];


  for(let i = 0; i < 24; i++) {
    labels.push(i)
  }
  // console.log(labels)

  

// console.log(sparks)

  const data = {
    labels: labels,
    datasets: [
        {
            data: props,
            fill: false,
            backgroundColor: '#00C807',
            borderColor: '#00C807',
            borderWidth: 1
        }
    ]
};

const options = {
    elements: {
        point: {
            radius: 0
        }
    },
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
                display: false
            },
            type: 'time',
            time: {
                parser: props?.timeFormat,
                tooltipFormat: '11 HH:mm',
                unit: 'day',
                unitStepSize: 1,
                displayFormats: {
                    'day': 'MM/dd/yyyy'
                }
            }
        },
        yAxes: {
            ticks: {
                display: false
            }
        },
        
    }
};


  return (
    <div>
      
        <div className='watchlist-graph' style={{
          width: '100px',
          height: '10px'
        }}>
          <Line data={data} options={options} />
        </div>

    </div>
  )
}

export default WatchlistGraph;
