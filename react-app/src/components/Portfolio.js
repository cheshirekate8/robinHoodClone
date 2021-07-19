import React from 'react';
import Newsfeed from './Newsfeed';
import '../styles/Portfolio.css'
import Watchlist from './Watchlist';

function Portfolio() {
    return (
        <div className='app__body'>
            <div className='app__container'>
                <Newsfeed />
                <Watchlist />
            </div>
        </div>
    )
}

export default Portfolio;
