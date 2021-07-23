import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

function LineGraph(props) {

    const data = {
        labels: props.dates,
        datasets: [
            {
                data: props.balance,
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
                },
                type: 'time',
                time: {
                    parser: 'MM/dd/yyyy HH:mm',
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
                    display: true
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
