import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import '../styles/DailyMovers.css'


const DailyMover = () => {
    const [quotes, setQuotes] = useState([]);
    const tickerQuotes = useSelector(state => state.stocks.ticker?.quotes);
    const watches = useSelector(state => state.watches.userWatches);
    

    useEffect(() => {
        setQuotes(tickerQuotes);
    }, [tickerQuotes])
    
    const movers = (quotes?.filter((quote) => {
        return quote.regularMarketChange > 2 || quote.regularMarketChange < -2;
    }))?.slice(0, 10)
    return (
        <div className="movers-wrapper">
        <h2 className='movers-header'>Daily Movers</h2>
        <div className="daily-movers-container">
            {movers && movers.map( quote => {
                const price = (quote.regularMarketPrice).toFixed(2)
                const change = (quote.regularMarketChange).toFixed(2)
                // console.log('MOVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', quote)
             return (
                
                <div className="daily-mover" key={quote.symbol}>
                <p className="mover-symbol">{quote.symbol}</p>
                <div className='mover-prices'>
                <p className="mover-price" 
                style={price > 0
                        ? {color:'chartreuse'} : {color:'red'}
                    }>{price}</p>
                <p className="mover-change"
                style={change > 0
                    ? {color:'chartreuse'} : {color:'red'}
                }>{change}</p>
                </div>
                </div>
                )})}
                
        </div>
        </div>
    )
}

export default DailyMover;