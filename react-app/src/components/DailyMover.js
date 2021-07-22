import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';


const DailyMover = () => {
    const [quotes, setQuotes] = useState([]);
    const tickerQuotes = useSelector(state => state.stocks.ticker?.quotes);

    useEffect(() => {
        setQuotes(tickerQuotes);
    }, [tickerQuotes])
    
    const movers = quotes?.filter((quote) => {
        return quote.regularMarketChange > 2 || quote.regularMarketChange < -2;
    })
    
    return (
        <div className="daily-movers">
            <h2>Daily Movers</h2>
            {movers && movers.map( quote => (
                <div className="daily-mover" key={quote.symbol}>
                    {console.log(quote)}
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