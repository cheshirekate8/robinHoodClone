import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Newsfeed from './Newsfeed';
import '../styles/Portfolio.css'
import Watchlist from './Watchlist';
import DailyMover from './DailyMover'
import NewsStories from './NewsStories'
import * as stockActions from '../store/stock'

function Portfolio() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(stockActions.getTicker())
        dispatch(stockActions.clearCurrentStock())
    })

    return (
        <div className='app__body'>
            <div className='app__container'>
                <Newsfeed />
                {/* <Watchlist /> */}
                {/* <DailyMover /> */}
                <NewsStories />
            </div>
        </div>
    )
}

export default Portfolio;


