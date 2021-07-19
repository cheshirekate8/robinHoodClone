import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as stockActions from '../store/stock';

function Ticker() {
    const dispatch = useDispatch()
    // let tickerContainer = useRef([])
    
    // useEffect(() => {
    //     async function getTicker() {
    //         tickerContainer.current = await dispatch(stockActions.getTicker())
    //     }
    //     getTicker()
    // }, [dispatch])
    return (
        <div></div>
    )
    // const tickerData = useSelector(state => state.stock.ticker.quotes)
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
