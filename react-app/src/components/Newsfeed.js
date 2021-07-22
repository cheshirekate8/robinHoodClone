import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/Newsfeed.css';
import LineGraph from './LineGraph';
import Ticker from './Ticker';

function Newsfeed() {
    const [dates, setDates] = useState();
    const [balance, setBalance] = useState([])

    const user = useSelector(state => state.session.user);
    



    const createDates = () => {
        let dates = [];
        for(let i = 0; i < 30; i++) {
            let date = new Date();
            date.setHours(0,0,0,0);
            date.setDate(i);
            dates.push(date)
        }
        setDates(dates)
    }

    useEffect(() => {
        createDates()
    }, [])


    return (
        <div className='newsfeed__container'>
            <div className='newsfeed__chartSection'>
                <div className='newsfeed__portfolio'>
                    <h1>${user.balance}</h1>
                    <p>+50.68 (+0.05%) Today</p>
                </div>
                <div className='newsfeed__chart'>
                    <LineGraph balance={balance} dates={dates} />
                </div>
                <div className='ticker__container'>
                    <Ticker/>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed;
