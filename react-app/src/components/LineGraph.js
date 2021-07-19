import React from 'react';
import { Line } from 'react-chartjs-2';

let months = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"]

function LineGraph() {
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
                    display: false
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
        <div className='linegraph'>
            <Line 
                data={data}
                options={options}
            />
        </div>
    )
}

export default LineGraph;
