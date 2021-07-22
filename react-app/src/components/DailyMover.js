import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'

const DailyMover = () => {
    const [quotes, setQuotes] = useState([]);
    const tickerQuotes = useSelector(state => state.stocks.ticker?.quotes);

    return (
        <div className="daily-movers">
            <h2>Daily Movers</h2>
            {movers?.map( quote => {
                <div className="daily-mover" key={quote.symbol}>
                {/* <div className="symbol">{quote.symbol}</div>
                <div className="price">{mover.price}</div>
                <div className="change">{mover.change}</div> */}
                </div>
            })}
        </div>
    )
}

export default DailyMover;