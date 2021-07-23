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
    
    const movers = quotes?.filter((quote) => {
        return quote.regularMarketChange > 2 || quote.regularMarketChange < -2;
    })
    
    return (
        <div className="daily-movers-container">
            <h2>Daily Movers</h2>
            {movers && movers.map( quote => (
                <div className="daily-mover" key={quote.symbol}>
                <p className="symbol">{quote.symbol}</p>
                <p className="price">{quote.regularMarketPrice}</p>
                <p className="change">{quote.regularMarketChange}</p>
                </div>
            ))}
            <p>movers go here</p>
        </div>
    )
}

export default DailyMover;