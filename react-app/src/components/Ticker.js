import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as stockActions from '../store/stock';

import '../styles/Ticker.css';




function Ticker() {
    
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

    // useEffect(() => {
    //     const ticker = document.getElementById('ticker')
    //     const tickerScrollWidth = ticker?.scrollWidth
        
    //     setInterval(() => {
    //         if (ticker.scrollLeft !== tickerScrollWidth) {
    //             ticker.scrollTo(ticker.scrollLeft + 1, 0)
    //         }
    //     }, 15)

    // }, [])
    
        
        return (
            <marquee className='ticker' id='ticker' scroll='auto'>
                {mockData.map(data => (
                    <span key={data.symbol}>
                        <p className='symbol'>{data.symbol}</p> 
                        <p className='price-traded'
                            style={data.changeDirection === 'up'
                            ? {color:'chartreuse'} : {color:'red'}
                        }>{data.priceTraded}</p>   
                        <p className='change-direction'
                            style={data.changeDirection === 'up'
                            ? {color:'chartreuse'} : {color:'red'}
                        }>{data.changeDirection}</p>  
                        <p className='change-amount'
                            style={data.changeDirection === 'up'
                            ? {color:'chartreuse'} : {color:'red'}
                            }>{data.changeAmount}</p> 
                        <p className='change-percent' 
                            style={data.changeDirection === 'up'
                            ? {color:'chartreuse'} : {color:'red'}
                            }>{data.changePercent}</p>
                    </span>
                ))}
            </marquee>
        )

    
    
    
    // const dispatch = useDispatch()
    // let tickerContainer = useRef([])
    
    // useEffect(() => {
    //     async function getTicker() {
    //         tickerContainer.current = await dispatch(stockActions.getTicker())
    //     }
    //     getTicker()
    // }, [dispatch])
    // // return (
    // //     <div></div>
    // // )
    // const tickerData = useSelector(state => state.stock.ticker?.quotes)
    // if(tickerData) {
    //     return (
    //         <div>
    //             {tickerData.map(ticker => (
    //               <li key={tickerData.symbol}>{tickerData.symbol}</li>  
    //             ))}
    //         </div>
    //     )
    // } else {
    //     return null;
    // }
}

export default Ticker;
