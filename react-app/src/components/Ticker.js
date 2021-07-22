import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';



import '../styles/Ticker.css';

const upArrow = '\ue5c7'
const downArrow = '\ue5c5'



function Ticker() {
    const stock = useSelector(state => state?.stock);
    
    const [ticker, setTicker] = useState([]);

    
    const mockData = [
        {
            symbol: 'AXP',
            priceTraded: '168.32',
            changeDirection: 'up',
            changeAmount: '+5.46',
            changePercent: '+3.37%'
        },
        {
            symbol: 'IBM',
            priceTraded: '141.98',
            changeDirection: 'up',
            changeAmount: '+3.84',
            changePercent: '+2.79%'
        },
        {
            symbol: 'BA',
            priceTraded: '212.65',
            changeDirection: 'up',
            changeAmount: '+5.66',
            changePercent: '+2.76%'
        },
        {
            symbol: 'HD',
            priceTraded: '325.31',
            changeDirection: 'down',
            changeAmount: '-6.36',
            changePercent: '-1.97%'
        },
    ]

    useEffect(() => {
        setTicker(stock?.ticker?.quotes)

    }, [stock])
    
    


       
        return (
            <marquee className='ticker' id='ticker' scroll='auto'>
                {ticker?.map(data => (
                    <span key={data.symbol}>
                        <p className='symbol'>{data.symbol}</p> 
                        <p className='price-traded'
                            style={data.regularMarketChange > 0
                            ? {color:'chartreuse'} : {color:'red'}
                        }>${data.regularMarketPrice.toFixed(2)}</p>   
                        <span className='change-direction material-icons'
                            style={data.regularMarketChange > 0
                            ? {color:'chartreuse'} : {color:'red'}
                        }>{data.regularMarketChange > 0 ? upArrow : downArrow}</span>  
                        <p className='change-amount'
                            style={data.regularMarketChange > 0
                            ? {color:'chartreuse'} : {color:'red'}
                            }>${data.regularMarketChange.toFixed(2)}</p> 
                        <p className='change-percent' 
                            style={data.regularMarketChange > 0
                            ? {color:'chartreuse'} : {color:'red'}
                            }>{data.regularMarketChangePercent.toFixed(2)}%</p>
                    </span>
                ))}
            </marquee>
        )
       
        

}

export default Ticker;
