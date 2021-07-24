import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux'


function AssetLineGraph({props}) {
    
    console.log(props)

    const sparkData = props.slice(props.length - 30, props.length)
    
    let labels = [];
    for(let i = 0; i < 30; i++) {
        labels.push(i)
    }

    const config = {
        labels: labels,
        datasets: [
            {   // sparkData is what it doesn't like, i dont know
                // why it's not liking this array?
                data: sparkData,
                fill: false,
                backgroundColor: '#00C807',
                borderColor: '#00C807',
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
                data={config}
                options={options}
            />
        </div>
    )
}

export default AssetLineGraph;