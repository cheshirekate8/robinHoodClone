import React from 'react';
import { Line } from 'react-chartjs-2';

let months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function WatchlistGraph({theWatches}) {

     // let sparks = []
  // useEffect(() => {
  //   theWatches?.forEach(watch => {
  //     sparks.push(watch.spark.c?.slice(watch.spark.c?.length -24, watch.spark.c?.length))
  //   });
  // }, [sparks, theWatches])
  

  let sparks = theWatches.map(watch => {
    return watch?.spark?.c?.slice(watch?.spark?.c?.length -24, watch?.spark?.c?.length)
  })
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
            data: sparks,
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
                parser: sparks?.timeFormat,
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
