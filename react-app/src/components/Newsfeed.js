import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Newsfeed.css';
import LineGraph from './LineGraph';
import Ticker from './Ticker';

function Newsfeed() {
    const user = useSelector(state => state.session.user)
    return (
        <div className='newsfeed__container'>
            <div className='newsfeed__chartSection'>
                <div className='newsfeed__portfolio'>
                    <h1>${user.balance}</h1>
                    <p>+50.68 (+0.05%) Today</p>
                </div>
                <div className='newsfeed__chart'>
                    <LineGraph />
                </div>
                <div className='ticker-container'>
                    <Ticker/>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed;
