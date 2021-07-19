import React from 'react';
import { Line } from 'react-chartjs-2';

function LineGraph() {
    const data = [
        {
            x: 10,
            y: 20
        },
        {
            x: 15,
            y: 10
        },
        {
            x: 20,
            y: 15
        }
    ];

    return (
        <div className='linegraph'>
            <Line 
                data={{
                    datasets: [
                        {
                            type: 'line',
                            data: data,
                            backgroundColor: '#00C807',
                            borderColor: '#00C807',
                        }
                    ]
                }}
            />
        </div>
    )
}

export default LineGraph;
