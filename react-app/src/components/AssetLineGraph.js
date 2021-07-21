import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux'


function LineGraph() {
    const stock = useSelector(state => state.stock.currentStock)

    const data = {
        datasets: [
            {
                data: stock.spark.close,
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
        <div className='linegraph'>
            <h3>{stock.name}</h3>
            <Line 
                data={data}
                options={options}
            />
        </div>
    )
}

export default LineGraph;