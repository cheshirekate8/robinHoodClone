import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux'


function AssetLineGraph() {
    const [count, setCount] = useState(0);
    const stock = useSelector(state => state.stock.currentStock)
    const sparkData = useSelector(state => state.stock.currentStock?.spark)

    
    const config = {
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
            <Line 
                data={config}
                options={options}
            />
        </div>
    )
}

export default AssetLineGraph;