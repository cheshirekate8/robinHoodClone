import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';



import '../styles/Ticker.css';

const upArrow = '\ue5c7'
const downArrow = '\ue5c5'



function Ticker() {
    const ticker = useSelector(state => state?.stocks?.ticker?.quotes);
    
    
    return (
        <marquee className='ticker' id='ticker' scroll='auto'>
            {ticker?.map(data => {
                let price;
                let change;
                let changePercent;
                if (data.regularMarketPrice && data.regularMarketChange && data.regularMarketChangePercent) {  
                    price = (data.regularMarketPrice).toFixed(2)
                    change = (data.regularMarketChange).toFixed(2)
                    changePercent = (data.regularMarketChangePercent).toFixed(2)
                } else {
                    price = 142.55
                    change = 15.89
                    changePercent = -0.01
                }
                return (
                <span key={data.symbol}>
                    <p className='symbol'>{data.symbol}</p> 
                    <p className='price-traded'
                        style={data.regularMarketChange > 0
                        ? {color:'chartreuse'} : {color:'red'}
                    }>${price}</p>   
                    <span className='change-direction material-icons'
                        style={data.regularMarketChange > 0
                        ? {color:'chartreuse'} : {color:'red'}
                    }>{data.regularMarketChange > 0 ? upArrow : downArrow}</span>  
                    <p className='change-amount'
                        style={data.regularMarketChange > 0
                        ? {color:'chartreuse'} : {color:'red'}
                        }>${change}</p> 
                    <p className='change-percent' 
                        style={data.regularMarketChange > 0
                        ? {color:'chartreuse'} : {color:'red'}
                        }>{changePercent}%</p>
                </span>
            )})}
        </marquee>
    )
       
        

}

export default Ticker;
