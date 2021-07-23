import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

function LineGraph({props, watch}) {
    // time format for portfolio 'MM/dd/yyyy HH:mm'
    // props = {
    //     dates: [], // array of dates
    //     balance: [], // array of prices
    //     xdisplay: true || false,
    //     ydisplay: true || false,
    //     timeFormat: 'MM/dd/yyyy HH:mm',
    // }
    if (watch && props) {
        props.balance = watch.spark?.c.slice(0, 10);
        props.dates = watch.spark?.c.slice(0, 10);
    }
    // console.log('THE PROPS ', props);
    // console.log('THE BALANCE ', props?.balance)
    // console.log('THE DATES ', props?.dates)
    
    const data = {
        labels: props?.dates,
        datasets: [
            {
                data: props?.balance,
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
                    display: props?.xdisplay
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
                    display: props?.ydisplay
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
