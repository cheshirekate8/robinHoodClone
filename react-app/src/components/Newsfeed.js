import React from 'react';
import '../styles/Newsfeed.css';
import LineGraph from './LineGraph';

function Newsfeed() {
    return (
        <div className='newsfeed__container'>
            <div className='newsfeed__chartSection'>
                <div className='newsfeed__portfolio'>
                    <h1>$10,000</h1>
                    <p>+50.68 (+0.05%) Today</p>
                </div>
                <div className='newsfeed__chart'>
                    <LineGraph />
                </div>
            </div>
        </div>
    )
}

export default Newsfeed;
